package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"sort"
	"time"

	"github.com/border/vdk/av"

	webrtc "github.com/border/vdk/format/webrtcv3"
	"github.com/gin-gonic/gin"
)

type JCodec struct {
	Type string
}

func serveHTTP() {
	gin.SetMode(gin.ReleaseMode)

	router := gin.Default()
	router.Use(CORSMiddleware())

	if _, err := os.Stat("./web"); !os.IsNotExist(err) {
		router.LoadHTMLGlob("web/templates/*")
		router.GET("/", HTTPAPIServerIndex)
		router.GET("/stream/player/:uuid", HTTPAPIServerStreamPlayer)
	}
	router.POST("/stream/receiver/:uuid", HTTPAPIServerStreamWebRTC)
	router.GET("/stream/codec/:uuid", HTTPAPIServerStreamCodec)
	router.POST("/stream/playrtc", HTTPAPIServerStreamWebRTC2)
	router.POST("/stream/add", HTTPAPIServerStreamAdd)
	router.POST("/stream/clean", HTTPAPIServerStreamClean)

	router.StaticFS("/static", http.Dir("web/static"))

	router.StaticFS("/play", http.Dir("play"))

	err := router.Run(Config.Server.HTTPPort)
	if err != nil {
		log.Fatalln("Start HTTP Server error", err)
	}
}

//HTTPAPIServerIndex  index
func HTTPAPIServerIndex(c *gin.Context) {
	_, all := Config.list()
	if len(all) > 0 {
		c.Header("Cache-Control", "no-cache, max-age=0, must-revalidate, no-store")
		c.Header("Access-Control-Allow-Origin", "*")
		c.Redirect(http.StatusMovedPermanently, "stream/player/"+all[0])
	} else {
		c.HTML(http.StatusOK, "index.tmpl", gin.H{
			"port":    Config.Server.HTTPPort,
			"version": time.Now().String(),
		})
	}
}

//HTTPAPIServerStreamPlayer stream player
func HTTPAPIServerStreamPlayer(c *gin.Context) {
	_, all := Config.list()
	sort.Strings(all)
	c.HTML(http.StatusOK, "player.tmpl", gin.H{
		"port":     Config.Server.HTTPPort,
		"suuid":    c.Param("uuid"),
		"suuidMap": all,
		"version":  time.Now().String(),
	})
}

//HTTPAPIServerStreamCodec stream codec
func HTTPAPIServerStreamCodec(c *gin.Context) {
	if Config.ext(c.Param("uuid")) {
		Config.RunIFNotRun(c.Param("uuid"))
		codecs := Config.coGe(c.Param("uuid"))
		if codecs == nil {
			return
		}
		var tmpCodec []JCodec
		for _, codec := range codecs {
			if codec.Type() != av.H264 && codec.Type() != av.PCM_ALAW && codec.Type() != av.PCM_MULAW && codec.Type() != av.OPUS {
				log.Println("Codec Not Supported WebRTC ignore this track", codec.Type())
				continue
			}
			if codec.Type().IsVideo() {
				tmpCodec = append(tmpCodec, JCodec{Type: "video"})
			} else {
				tmpCodec = append(tmpCodec, JCodec{Type: "audio"})
			}
		}
		b, err := json.Marshal(tmpCodec)
		if err == nil {
			_, err = c.Writer.Write(b)
			if err != nil {
				log.Println("Write Codec Info error", err)
				return
			}
		}
	}
}

//HTTPAPIServerStreamWebRTC stream video over WebRTC
func HTTPAPIServerStreamWebRTC(c *gin.Context) {
	if !Config.ext(c.PostForm("suuid")) {
		log.Println("Stream Not Found")
		return
	}
	Config.RunIFNotRun(c.PostForm("suuid"))
	codecs := Config.coGe(c.PostForm("suuid"))
	if codecs == nil {
		log.Println("Stream Codec Not Found")
		return
	}
	var AudioOnly bool
	if len(codecs) == 1 && codecs[0].Type().IsAudio() {
		AudioOnly = true
	}
	muxerWebRTC := webrtc.NewMuxer(webrtc.Options{ICEServers: Config.GetICEServers(), ICEUsername: Config.GetICEUsername(), ICECredential: Config.GetICECredential(), PortMin: Config.GetWebRTCPortMin(), PortMax: Config.GetWebRTCPortMax()})
	answer, err := muxerWebRTC.WriteHeader(codecs, c.PostForm("data"))
	if err != nil {
		log.Println("WriteHeader", err)
		return
	}
	_, err = c.Writer.Write([]byte(answer))
	if err != nil {
		log.Println("Write", err)
		return
	}
	go func() {
		cid, ch := Config.clAd(c.PostForm("suuid"))
		defer Config.clDe(c.PostForm("suuid"), cid)
		defer muxerWebRTC.Close()
		var videoStart bool
		noVideo := time.NewTimer(10 * time.Second)
		for {
			select {
			case <-noVideo.C:
				log.Println("noVideo")
				return
			case pck := <-ch:
				if pck.IsKeyFrame || AudioOnly {
					noVideo.Reset(10 * time.Second)
					videoStart = true
				}
				if !videoStart && !AudioOnly {
					continue
				}
				err = muxerWebRTC.WritePacket(pck)
				if err != nil {
					log.Println("WritePacket", err)
					return
				}
			}
		}
	}()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token")
		c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type")
		c.Header("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}

type Response struct {
	Tracks []string `json:"tracks"`
	Sdp    string   `json:"sdp"`
}

type ResponseError struct {
	Error string `json:"error"`
}

type PlayWebRTC struct {
	StreamUrl string `json:"streamurl"`
	CameraSn  string `json:"camerasn"`
	Clientip  string `json:"clientip"`
	Sdp       string `json:"sdp"` // Base64 encoded
}

func HTTPAPIServerStreamAdd(c *gin.Context) {

	play := PlayWebRTC{}

	c.BindJSON(&play)

	camerasn := play.CameraSn
	url := play.StreamUrl
	sdp := play.Sdp

	if camerasn == "" {
		camerasn = url
	}

	if _, ok := Config.Streams[camerasn]; !ok {
		Config.Streams[camerasn] = StreamST{
			URL:          url,
			OnDemand:     true,
			DisableAudio: true,
			Cl:           make(map[string]viewer),
		}
	}

	log.Printf("camerasn: %s, url: %s, sdp: %s\n", camerasn, url, sdp)

	Config.RunIFNotRun(camerasn)

	codecs := Config.coGe(camerasn)
	if codecs == nil {
		log.Println("Stream Codec Not Found")
		c.JSON(500, ResponseError{Error: Config.LastError.Error()})
		return
	}

	b, err := json.Marshal(play)
	if err == nil {
		_, err = c.Writer.Write(b)
		if err != nil {
			log.Println("Write Codec Info error", err)
			return
		}
	}
}

func HTTPAPIServerStreamClean(c *gin.Context) {
	keys := Config.coClean()
	b, err := json.Marshal(keys)
	if err == nil {
		_, err = c.Writer.Write(b)
		if err != nil {
			log.Println("Write Codec Info error", err)
			return
		}
	}
}

func HTTPAPIServerStreamWebRTC2(c *gin.Context) {

	play := PlayWebRTC{}

	c.BindJSON(&play)

	camerasn := play.CameraSn
	url := play.StreamUrl
	sdp := play.Sdp

	if camerasn == "" {
		camerasn = url
	}

	if _, ok := Config.Streams[camerasn]; !ok {
		Config.Streams[camerasn] = StreamST{
			URL:          url,
			OnDemand:     true,
			DisableAudio: true,
			Cl:           make(map[string]viewer),
		}
	}

	log.Printf("camerasn: %s, url: %s, sdp: %s\n", camerasn, url, sdp)

	Config.RunIFNotRun(camerasn)

	codecs := Config.coGe(camerasn)
	if codecs == nil {
		log.Println("Stream Codec Not Found")
		c.JSON(500, ResponseError{Error: Config.LastError.Error()})
		return
	}

	muxerWebRTC := webrtc.NewMuxer(
		webrtc.Options{
			ICEServers: Config.GetICEServers(),
			PortMin:    Config.GetWebRTCPortMin(),
			PortMax:    Config.GetWebRTCPortMax(),
		},
	)

	answer, err := muxerWebRTC.WriteHeader(codecs, sdp)
	if err != nil {
		log.Println("Muxer WriteHeader", err)
		c.JSON(500, ResponseError{Error: err.Error()})
		return
	}

	response := Response{
		Sdp: answer,
	}

	for _, codec := range codecs {
		if codec.Type() != av.H264 &&
			codec.Type() != av.PCM_ALAW &&
			codec.Type() != av.PCM_MULAW &&
			codec.Type() != av.OPUS {
			log.Println("Codec Not Supported WebRTC ignore this track", codec.Type())
			continue
		}
		if codec.Type().IsVideo() {
			response.Tracks = append(response.Tracks, "video")
		} else {
			response.Tracks = append(response.Tracks, "audio")
		}
	}

	c.JSON(200, response)

	AudioOnly := len(codecs) == 1 && codecs[0].Type().IsAudio()

	go func() {
		cid, ch := Config.clAd(camerasn)
		defer Config.clDe(camerasn, cid)
		defer muxerWebRTC.Close()
		var videoStart bool
		noVideo := time.NewTimer(10 * time.Second)
		for {
			select {
			case <-noVideo.C:
				log.Printf("noVideo %s\n", camerasn)
				return
			case pck := <-ch:
				if pck.IsKeyFrame || AudioOnly {
					noVideo.Reset(10 * time.Second)
					videoStart = true
				}
				if !videoStart && !AudioOnly {
					continue
				}
				err = muxerWebRTC.WritePacket(pck)
				if err != nil {
					log.Printf("WritePacket %s, %v \n", camerasn, err)
					return
				}
			}
		}
	}()
}
