(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{452:function(e,t,i){"use strict";i.r(t);var o=i(466),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);var s=i(545),l=i(30);var r=function(e){i(544)},c=Object(l.a)(n.a,s.a,s.b,!1,r,"data-v-cdf112d2",null);c.options.__file="demo\\bigScreen\\index.vue",t.default=c.exports},466:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n,a=f(i(25)),s=f(i(38)),l=f(i(39)),r=f(i(216)),c=i(46),u=(i(0),i(17)),d=i(40);function f(e){return e&&e.__esModule?e:{default:e}}t.default={components:{MapView:r.default},data:function(){return{projectid:93151045894923,mapConfig:{compass:!0,control:!1,renderMode:"lod",lodUrl:"https://ace.apollo.auto/pdtmap/lod/guangzhou2/dec.json",lodStyle:c.style,mode:"SCEME_WITH_GLOW",style:{background:"gradient",aaMode:1}},config:{showTrafficEvent:!0}}},created:function(){this.showViewParams=[113.4653195,22.8437947,31503.6,0,-.6768649348971942,0]},mounted:function(){var e=u.Utils.transformWGS84ToUTM({x:113.54298823073374,y:23.32843438609696}),t=e.x,i=e.y;console.log("转化",t,i),this.playindex=0,this.testList=[]},methods:{trafficInit:(n=(0,l.default)(s.default.mark((function e(t){var i,o,n,a=this;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.view=this.$refs.view,this.map=this.view.$refs.map,this.Map=this.map.Map,this.view.betterRenderConfig={delayDisappear:!0,removeShake:!0,rectify:!1,insertData:!0,maxDelayCount:5},this.lodLayer=t,this.map.animationTo(this.showViewParams,1e3,!1),this.view.computeRandom(6,!1,{cityCode:"guangzhou"}),this.view.addActiveServeLayer("180.76.36.251:9005",!1,"/data/mapServer/graphQL"),e.next=10,this.view.getModelList(10037);case 10:i=e.sent,o=i.filter((function(e){return e.onlineUrl||e.testUrl})).map((function(e){e.fileName.startsWith("0105")&&a.roadList.push(e.fileName.split(".")[0]);var t=e.fileName,i=e.onlineUrl;return e.testUrl,{url:i,fileName:t}})),n={path:"https://mapdata.bj.bcebos.com/model/guangzhou/",names:["guojijiaoliuzhongxin","shenxiezhongxin","haisizhongxin","zhishichengdasha","zhishicheng","huacheng","rencaidasha","linglizhongxin","guangzhouta","pazhouzhanguan","rencaidasha","tianhetiyuzhongxin","zhongxindasha","liededaqiao"],animateNames:["lmj4","lmj5","lmj6"],commonPath:"https://mapdata.bj.bcebos.com/model/common/",commonNames:["trafficLights","robobus","robocop","robotaxi","netCar","car","bus","truck","sanlunche","pedestrian","diandongche","bicycle","salecar","cleanCar","wxb","dumpTruck","minibus","newbus","newcar","pedestrian_man_animate","pedestrian_woman_animate","newtricycle","trafficcone","newmotorcycle","newtruck","newbicycle"],bosModelList:o},this.view.addEditor2Layer(),this.view.editor2.init(),this.view.loadModels(n).then((function(){a.view.setSideLayer().then((function(e){console.log("sideList",e)})),a.view.addRegion({cityRange:"merged_src_region.geojson",townshipRange:"merged_src_黄浦区.geojson"}).then((function(e){console.log(e)})),a.view.subscribeTunnelInfo(),a.view.getLanesInfoByPoints(),a.view.addCentralRoad(),a.view.addGpsCarLayer(),a.view.addTrafficLayer({dataRange:4,rscuSn:a.allRscuSn},{z:.7}),a.view.addCopEventLayer(),a.view.addEditorLayer(),a.view.setLod(),a.view.connectSignalWs("all"),a.view.getSafeEventList(),a.view.editor.loadGeoJsonToMap("https://mapdata.bj.bcebos.com/json/guangzhou/soft_lane.geojson",{color:"#5B77AF",opacity:.01,offset:[0,0,.6],visible:!0},"id"),a.view.getActiveSceneInfo(),a.mockEvent(),a.addSceneLabel(),a.view.setRootView([113.4653195,22.8437947,31503.6,0,-.6768649348971942,0]),a.view.addRoadConstructionArea()}));case 16:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),mockEvent:function(){var e=this;(0,d.get)("https://mapdata.bj.bcebos.com/json/guangzhou/mian.geojson").then((function(t){var i=t.features,o=u.Utils.json2polygon(i,{color:"#5B77AF",width:3,offset:[0,0,1],opacity:1});e.cityConstructionArea=o,console.log(o),o.position.z=.6,o.updateMatrixWorld(),o.updateMatrix(),e.Map.viewer.scene.addModel(o)}));var t=this.view.addTrafficEvent({position:[752268.4084,2564023.9614,.6],options:{eventIcon:"EventIcon2",source:"level1",trafficType:"cityConstruction",imgUrlMap:{}}}),i=[{value:"施工地点：",position:[98,48],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"凤湖一路",position:[104,48],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"FZZYJW--GB1-0"},{value:"施工开始时间：",position:[98,72],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"2021-04-17 20:12:01",position:[104,72],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"DINAlternate-Bold"},{value:"计划完成时间：",position:[98,96],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"2021-07-13 18:12:01",position:[104,96],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"DINAlternate-Bold"},{value:"占道范围：",position:[98,120],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"机动车道最外侧车道",position:[104,120],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"FZZYJW--GB1-0"}];t.drawInfoPane(250,i,"燃气管道维修",{showDetail:!0,showClose:!0}),t.enter.addEventListener("mouseup",(function(){t.drawInfoPane(250,[{value:"施工长度：",position:[98,48],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"38.5m",position:[104,48],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"DINAlternate-Bold"},{value:"施工宽度：",position:[98,72],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"3.7m",position:[104,72],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"DINAlternate-Bold"},{value:"施工深度：",position:[98,96],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"4.3m",position:[104,96],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"DINAlternate-Bold"},{value:"管道说明：",position:[98,120],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"燃气管道",position:[104,120],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"FZZYJW--GB1-0",legend:"#FFD47C"},{value:"",position:[98,144],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"排污管道",position:[104,144],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"FZZYJW--GB1-0",legend:"#909BB7"},{value:"",position:[98,168],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"给水管道",position:[104,168],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"FZZYJW--GB1-0",legend:"#72C7DB"},{value:"",position:[98,192],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:"电网管道",position:[104,192],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"FZZYJW--GB1-0",legend:"#4CA87F"}],"燃气管道维修",{showClose:!0}),e.cityConstructionArea.material.transparent=!0;var i=1;e.opacityInterval=setInterval((function(){i-=.1,e.cityConstructionArea.material.opacity=i.toFixed(1),i<=0&&clearInterval(e.opacityInterval)}),100)})),t.close.addEventListener("mouseup",(function(){t.setActive(!1);var o=0;e.opacityInterval=setInterval((function(){o+=.1,e.cityConstructionArea.material.opacity=o.toFixed(1),console.log(o),o>=1&&(e.cityConstructionArea.material.transparent=!1,clearInterval(e.opacityInterval))}),100),setTimeout((function(){t.infoPane=null,t.drawInfoPane(250,i,"燃气管道维修",{showClose:!0,showDetail:!0})}),0)}))},clickObj:function(e){console.log("点击",e)},addSceneLabel:function(){var e=this,t=this.view.createFlagLabel({flagType:"softRoad",miniLabel:"4.3km"});t.position.set(752535.2272,2565011.6189,1),t.addEventListener("mouseup",(function(){e.view.focusEvent(t)}));var i=this.view.createFlagLabel({flagType:"gate"});i.position.set(757685.647,2563735.236,1),i.addEventListener("mouseup",(function(){e.view.focusEvent(i)}));var o=this.view.createFlagLabel({flagType:"gate"});o.position.set(757298.12277,2564098.0545,1),o.addEventListener("mouseup",(function(){e.view.focusEvent(o)}));var n=this.view.createFlagLabel({flagType:"sensor"});n.position.set(757472.12277,2563915.0545,1),n.addEventListener("mouseup",(function(){e.map.animationTo([113.5149801,23.1641467,-1.4781164,78.919696,-.3490659,0],1e3,!0)}));var a=this.view.createFlagLabel({flagType:"sensor"});a.position.set(757489.12277,2563929.0545,1),a.addEventListener("mouseup",(function(){e.map.animationTo([113.515003,23.1642522,-.7923223,-1.1659025,-.3744544,0],1e3,!0)}));var s=this.view.createFlagLabel({flagType:"trafficLight"});s.position.set(757750.077,2563668.678,1),s.addEventListener("mouseup",(function(){e.view.focusEvent(s)}));var l=window.viewer.scene.getObjectByName("gate_9");l.visible=!0;var r=l.position,c=r.x,u=r.y,d=this.view.createFlagLabel({flagType:"lmj",label:"龙门架"});d.position.set(c,u,1),d.addEventListener("mouseup",(function(){l.focus(window.viewer.scene),d.setActive(!0)})),this.addCrosswalkIcon()},addCrosswalkIcon:function(){var e=this;[{point:"点位1",position:[113.46705731406554,23.165642903011957],location:"天丰路与天泰二路交叉口",date:"2021-09-12"},{point:"点位2",position:[113.49725714363582,23.182497001350804],location:"香雪大道与香雪六路交叉口",date:"2021-09-12"}].forEach((function(t){var i=t.position,o=t.point,n=t.location,s=t.date,l=(0,a.default)(i,2),r=l[0],c=l[1],d=u.Utils.transformWGS84ToUTM({x:r,y:c}),f=d.x,p=d.y,v=e.view.createFlagLabel({label:"智慧斑马线"});v.position.set(f,p,1),v.addEventListener("mouseup",(function(){var t=[{value:"点位名称：",position:[80,48],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:o,position:[82,48],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"DINAlternate-Bold"},{value:"安装位置：",position:[80,72],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:n,position:[82,72],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"DINAlternate-Bold"},{value:"安装时间：",position:[80,96],textAlign:"right",size:12,color:"#707A8D",fontFamily:"FZZYJW--GB1-0"},{value:s,position:[82,96],textAlign:"left",size:14,color:"#A4B3CD",fontFamily:"DINAlternate-Bold"}];v.drawInfoPane(255,t,"智慧斑马线",{showClose:!0}),v.close.addEventListener("mouseup",(function(){v.infoPane.visible=!1})),e.view.focusEvent(v)}))}))},viewChange:function(e,t){},updateDevice:(o=(0,l.default)(s.default.mark((function e(t){var i;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.view.editor2.update(t);case 2:i=e.sent,console.log(i);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})}}},544:function(e,t,i){"use strict";i.r(t)},545:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return n}));var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"map-view",staticStyle:{height:"100%",display:"flex"}},[t("map-view",{ref:"view",attrs:{id:"1","city-id":"guangzhou","map-config":this.mapConfig,config:this.config,mix:!0,"project-id":this.projectid,"mobile-control":!0,showSpeedLabelLayer:!0},on:{trafficInit:this.trafficInit,clickObj:this.clickObj,viewChange:this.viewChange}})],1)},n=[];o._withStripped=!0}}]);