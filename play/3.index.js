(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{450:function(i,o,e){"use strict";e.r(o);var t=e(464),a=e.n(t);for(var s in t)"default"!==s&&function(i){e.d(o,i,(function(){return t[i]}))}(s);var n=e(540),c=e(30);var l=function(i){e(538)},r=Object(c.a)(a.a,n.a,n.b,!1,l,"data-v-3ab01e43",null);r.options.__file="demo\\cloud\\Cloud.vue",o.default=r.exports},464:function(i,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t,a=e(216),s=(t=a)&&t.__esModule?t:{default:t},n=e(539);o.default={components:{MapView:s.default},data:function(){return{mapConfig:{compass:!0,control:!1,renderMode:"lod",lodUrl:"https://ace.apollo.auto/pdtmap/lod/guangzhou/dec.json",lodStyle:n.style,lodDebuggerMode:!0,mode:"SCEME_WITH_GLOW",style:{backgroundColor:1184274,aaMode:0,aaLevel:0}},config:{},serviceConfig:{ip:"219.135.214.196:9001",lampsPath:"/v2x/platform/lamp/crossinfo/gis",signalPath:"/v2x/platform/ws/lampsselect",singleCarPath:"/v2x/platform/vehicle",ssl:!0,tokenUrl:"/v2x/platform/auth/user/login",trafficPath:"/v2x/platform/ws/perception"}}},created:function(){this.showViewParams=[113.4653195,22.8437947,31503.6,0,-.6768649348971942,0]},mounted:function(){},methods:{trafficInit:function(i){var o=this;this.view=this.$refs.view,this.map=this.view.$refs.map,this.Map=this.map.Map,this.view.betterRenderConfig={delayDisappear:!1,removeShake:!0,rectify:!1,insertData:!1,maxDelayCount:5},this.lodLayer=i,this.map.animationTo(this.showViewParams,1e3,!1);this.view.loadModels({path:"https://mapdata.bj.bcebos.com/model/guangzhou/",names:[],animateNames:[],commonPath:"https://mapdata.bj.bcebos.com/model/common/",commonNames:["trafficLights","robobus","robocop","robotaxi","netCar","car","bus","truck","sanlunche","pedestrian","diandongche","bicycle","traffic_cone","salecar","cleanCar","wxb","dumpTruck","minibus","newbus","newcar","pedestrian_man_animate","pedestrian_woman_animate","newtricycle","trafficcone","newmotorcycle","newtruck","newbicycle"]}).then((function(){o.view.setSideLayer().then((function(){})),o.view.setLod(),o.view.connectSignal()}))},goToSide:function(i){this.view.signalConnectContract.disposeStatus&&this.view.connectSignal(),this.view.goToSide(i)},focusCar:function(i){this.view.signalConnectContract.dispose();var o=i;this.view.followVehicleId=i,this.view.connectSingleCar(o,!0)}}}},538:function(i,o,e){"use strict";e.r(o)},539:function(i,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.style={crosswalk:{color:"#768094",opacity:1,offset:[0,0,.2],visible:!0},road:{color:"#4A515E",opacity:1,offset:[0,0,.2],visible:!0},arrow:{color:"#768094",opacity:1,offset:[0,0,.3],visible:!0},laneSolidWhite:{color:"#6A778C",opacity:1,width:2,offset:[0,0,.2],visible:!0},laneDottedWhite:{color:"#6A778C",opacity:1,width:2,dashSize:3,gapSize:3,offset:[0,0,.2],visible:!0},laneDottedYellow:{color:"#AFA971",opacity:1,width:2,dashSize:3,gapSize:3,offset:[0,0,.2],visible:!0},laneSolidYellow:{color:"#AFA971",opacity:1,width:2,offset:[0,0,.2],visible:!0},roadEdge:{color:"#e5e2fa",opacity:1,offset:[0,0,.2],visible:!1},stopLine:{color:"#768094",opacity:1,width:3,offset:[0,0,.2],visible:!0},river:{color:"#223030",opacity:.6,offset:[0,0,-1],visible:!0},grass:{color:"#232730",opacity:.3,offset:[0,0,0],visible:!0},linkTownshipRoad:{color:"#232730",opacity:1,width:1,offset:[0,0,0],visible:!0},linkHightway:{color:"#262B35",opacity:1,width:4,offset:[0,0,0],visible:!0},linkExpressway:{color:"#262B35",opacity:1,width:4,offset:[0,0,.1],visible:!0},linkNPRoad:{color:"#262B35",opacity:1,width:2,offset:[0,0,.1],visible:!0},linkCountyRoad:{color:"#262B35",opacity:1,width:2,offset:[0,0,.1],visible:!0},linkOther:{color:"#262B35",opacity:0,width:3,offset:[0,0,-1],visible:!0},region:{color:"#5472A3",opacity:.8,width:3,offset:[0,0,.1],visible:!0},township:{color:"#0D60EE",opacity:1,width:2,offset:[0,0,.1],visible:!0},range:{color:"#092C71",opacity:.4,width:1,offset:[0,0,300],visible:!0},building:{color:"#202530",topColor:"#3A3F4C",opacity:.8,wire:!0,transprent:!0,offset:[0,0,0],visible:!0,scale:[1,1,2],map:""},pointlight:{color:"#FFFFFF",intensity:.3,distance:900,offset:[0,0,0],visible:!0},hemiLight:{color:"#fff",groundColor:"fff",intensity:1,offset:[0,0,0],visible:!0},directional:{color:"#fff",intensity:.4,offset:[0,0,0],visible:!0},back:{color:"#122246",opacity:1,offset:[0,0,.1],visible:!0},plane:{color:"#1C1F24",opacity:1,offset:[469182.49,4397309.56,-2],visible:!0},mountain:{color:"#2A4352",width:1,visible:!0},other:{color:"#7ECEFC",offset:[0,0,.11],visible:!0},greenBelt:{color:"#195F65",offset:[0,0,.11],visible:!0}}},540:function(i,o,e){"use strict";e.d(o,"a",(function(){return t})),e.d(o,"b",(function(){return a}));var t=function(){var i=this.$createElement;return(this._self._c||i)("map-view",{ref:"view",attrs:{"city-id":"guangzhou","map-config":this.mapConfig,"service-config":this.serviceConfig,config:this.config,mix:!1,"view-param":[113.5406738,23.3771277,176785.86629267124,0,-1.6418284385468291,0]},on:{trafficInit:this.trafficInit}})},a=[];t._withStripped=!0}}]);