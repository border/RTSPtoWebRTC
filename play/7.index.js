(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{447:function(e,t,a){"use strict";a.r(t);var i=a(461),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);var o=a(533),r=a(30);var l=function(e){a(532)},c=Object(r.a)(n.a,o.a,o.b,!1,l,"data-v-e9528bfe",null);c.options.__file="demo\\tools\\perception.vue",t.default=c.exports},461:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=h(a(62)),s=h(a(38)),o=h(a(39)),r=h(a(13)),l=h(a(216)),c=a(64),d=a(46),p=a(0),u=a(17),m=h(a(471)),v=a(40);function h(e){return e&&e.__esModule?e:{default:e}}t.default={components:{MapView:l.default},data:function(){return{projectid:93151045894923,mapConfig:{compass:!0,control:!1,renderMode:"lod",lodUrl:"https://ace.apollo.auto/pdtmap/lod/guangzhou2/dec.json",lodStyle:d.style,mode:"SCEME_WITH_GLOW",style:{background:"gradient",aaMode:1}},config:{},link:"ws://10.138.32.66:8817/mapServer/track/specific/ws",timeServer:"http://10.138.32.66:8099/replay",message:'{"lng":113.44612891545145,"lat":23.168229692390668,"dis":1000,"TimeStamp":1629673200505}',carMessage:"HQEV612",eventId:"41914625"}},created:function(){this.showViewParams=[113.4653195,22.8437947,31503.6,0,-.6768649348971942,0],this.josn=m.default},beforeDestroy:function(){this.wsConnect.dispose()},mounted:function(){var e=u.Utils.transformWGS84ToUTM({x:113.54298823073374,y:23.32843438609696}),t=e.x,a=e.y;console.log("转化",t,a),this.playindex=0,this.testList=[]},methods:{trafficInit:function(e){var t=this;this.view=this.$refs.view,this.map=this.view.$refs.map,this.Map=this.map.Map,this.view.betterRenderConfig={delayDisappear:!1,removeShake:!0,rectify:!1,insertData:!1},this.lodLayer=e,this.map.animationTo(this.showViewParams,1e3,!1),this.Map.viewer.addEventListener("camera_changed",(function(){var e=t.Map.viewer.getCameraPosition(!0),a=e.x,i=e.y,n=(e.z,e.yaw,t.Map.transformUTMToWGS84({x:a,y:i}));t.position=n}));this.view.loadModels({path:"https://mapdata.bj.bcebos.com/model/guangzhou/",names:[],hasSceneNames:["apolloPark-build","apolloPark-inner","apolloPark-inner-bigScreen","apolloPark-ground"],animateNames:[],commonPath:"https://mapdata.bj.bcebos.com/model/common/",commonNames:["trafficLights","robobus","robocop","robotaxi","netCar","car","bus","truck","sanlunche","pedestrian","diandongche","bicycle","traffic_cone","salecar","cleanCar","wxb","dumpTruck","minibus","newbus","newcar","pedestrian_man_animate","pedestrian_woman_animate","newtricycle","trafficcone","newmotorcycle","newtruck","newbicycle"]}).then((function(){t.view.setSideLayer().then((function(e){console.log("sideList",e)})),t.view.addRegion({cityRange:"merged_src_region.geojson",townshipRange:"merged_src_黄浦区.geojson"}).then((function(e){console.log(e)})),t.view.setRootView([113.4653195,22.8437947,31503.6,0,-.6768649348971942,0]),t.addApolloPark()}))},clickObj:function(e){console.log("点击",e)},active:function(){var e=this;this.view.map.resetRender(),console.log(this.view.map.perception);var t=this.json.length;this.testList=[],this.playindex=0,this.activeInterval=setInterval((function(){e.draw(e.json[e.playindex].data),e.playindex+=1,e.playindex>t-1&&(e.playindex=0,clearInterval(e.activeInterval))}),150)},last:function(){this.playindex-=1,this.playindex<0?this.playindex=0:(this.test(this.json[this.playindex]),console.log(this.json[this.playindex],this.playindex))},next:function(){var e=this.json.length;this.playindex+=1,this.playindex>e-1&&(this.playindex=0),this.test(this.json[this.playindex]),console.log(this.json[this.playindex],this.playindex)},test:function(e){var t=this,a=e.data;this.testList.forEach((function(e,i){a.some((function(t){return t.id===e.name}))||(t.view.Map.removeObj(e),t.testList.splice(i,1))})),a.forEach((function(e){var a=u.Utils.transformWGS84ToUTM({x:e.longitude,y:e.latitude}),i=a.x,n=a.y,s=t.testList.find((function(t){return t.name===e.id}));if(s)s.position.x=i,s.position.y=n,s.position.z=1,s.setText(e.id),s.setRotationFromAxisAngle(new p.Vector3(0,0,1),-e.heading*(Math.PI/180));else{var o=new u.Model({name:e.id,modelUrl:"https://mapdata.bj.bcebos.com/maptv/model/car.glb",modelType:"car",label:e.id});o.setText(e.id),o.position.x=i,o.position.y=n,o.position.z=1,t.view.Map.addModel(o),t.testList.push(o)}}))},pause:function(){clearInterval(this.activeInterval)},draw:function(e){var t=e.map((function(e){var t=e.id,a=(e.source,e.type),i=e.heading,n=e.extra,s=n?n.elementType:null,o=a>99?i:u.Utils.degreeToRadian(i-90)/(Math.PI/180);return a<99&&(o=-e.heading),(0,r.default)({z:.5},e,{heading:o,id:t,elementType:s})}));this.view.map.drawModels(t,{timestamp:e[0].timestamp,delay:1e3,delayType:"byTime",rate:2})},fileChange:function(e){var t=e.target.files;if(t&&t.length){var a=t[0],i=new FileReader,n=this;i.onload=function(e){n.json=JSON.parse(e.target.result)},i.readAsText(a)}},connect:(i=(0,o.default)(s.default.mark((function e(){var t,a;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new c.Ws({needToken:!1}),e.next=3,t.connect(this.link);case 3:a=e.sent,this.wsConnect=a,this.view.handleMixData({ws:t,connect:a},2e3,{z:1});case 6:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)}),send:function(){var e=this;this.wsConnect&&(0,v.get)(this.timeServer).then((function(t){var a=t.timestamp,i=e.position,n=i.x,s=i.y;e.message='{"lng":'+n+',"lat":'+s+',"dis":1000,"TimeStamp":'+a+"}",setTimeout((function(){e.wsConnect.send(e.message)}),1e3)}))},sendByCar:function(){var e=this;this.wsConnect&&(0,v.get)(this.timeServer).then((function(t){var a=t.timestamp,i={vehID:e.carMessage,dis:500,timeStamp:Number(a)};setTimeout((function(){e.wsConnect.send((0,n.default)(i))}),1e3)}))},focusCar:function(){this.focusCarStatus=!this.focusCarStatus},getRenderData:function(){var e=this;if(this.focusCarStatus){var t=this.view.modelList.find((function(t){return t.vehicleId===e.carMessage}));this.Map.followObj(t)}},replay:function(){this.view.sendMixParams({eventID:this.eventId},"replayWs")},addApolloPark:function(){var e=this,t=this.view.createFlagLabel({url:"https://mapdata.bj.bcebos.com/images/guangzhou/icon_apollopark%403x.png",label:"ApolloPark"});t.position.set(753035.28,2558264.81,1),t.visible=!0,t.addEventListener("mouseup",(function(){e.map.animationTo([113.47117466105213,23.113940734992234,53.44437646310936,15.233688126374862,-.5275911404059036,0],1e3,!1),e.ApolloPark.build.visible=!0}));var a=this.view.createFlagLabel({url:"https://mapdata.bj.bcebos.com/images/guangzhou/icon_apollopark%403x.png",label:"展厅"});a.sizeAttenuation=!1,a.scale.set(8,8,8),a.position.set(753065.28,2558404.81,1),a.visible=!0,a.addEventListener("mouseup",(function(){e.animateStatus||(e.ApolloPark.build.visible?(e.map.animationTo([113.47107566882003,23.114410973468306,67.02889869675376,12.267918418878635,-.793478649536656,0],1e3,!0),e.animateStatus=!0):(e.map.animationTo([113.47117466105213,23.113940734992234,53.44437646310936,15.233688126374862,-.5275911404059036,0],1e3,!0),e.animateStatus=!0),e.ApolloPark.build.visible=!e.ApolloPark.build.visible,setTimeout((function(){e.animateStatus=!1}),1e3))}));var i=new u.Model({modelUrl:"https://mapdata.bj.bcebos.com/model/guangzhou/apolloPark-ground.glb",modelType:"apolloPark-ground",isLoadScene:!0}),n=new u.Model({modelUrl:"https://mapdata.bj.bcebos.com/model/guangzhou/apolloPark-build.glb",modelType:"apolloPark-build",isLoadScene:!0}),s=new u.Model({modelUrl:"https://mapdata.bj.bcebos.com/model/guangzhou/apolloPark-inner.glb",modelType:"apolloPark-inner",isLoadScene:!0}),o=new u.Model({modelUrl:"https://mapdata.bj.bcebos.com/model/guangzhou/apolloPark-inner-bigScreen.glb",modelType:"apolloPark-inner-bigScreen",isLoadScene:!0});this.ApolloPark={ground:i,build:n,inner:s,bigScreen:o},i.position.set(752934.8,2558156.8,1),n.position.set(752934.8,2558156.8,1),s.position.set(752934.8,2558156.8,1),o.position.set(752934.8,2558156.8,1),this.Map.viewer.scene.addModel(i),this.Map.viewer.scene.addModel(n),this.Map.viewer.scene.addModel(s),this.Map.viewer.scene.addModel(o)}}}},532:function(e,t,a){"use strict";a.r(t)},533:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map-view",staticStyle:{height:"100%",display:"flex"}},[a("map-view",{ref:"view",attrs:{id:"1","city-id":"guangzhou","map-config":e.mapConfig,config:e.config,mix:!0,"project-id":e.projectid},on:{trafficInit:e.trafficInit,clickObj:e.clickObj,getRenderData:e.getRenderData}}),e._v(" "),a("div",{staticClass:"btn-box"},[a("div",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],staticClass:"btn",attrs:{type:"text"},domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}}),e._v(" "),a("div",{staticClass:"btn",on:{click:e.connect}},[e._v("连接")]),e._v(" "),a("div",{staticClass:"btn"},[e._v("断开")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"btn",attrs:{type:"text"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),a("div",{staticClass:"btn",on:{click:e.send}},[e._v("按位置发送")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.carMessage,expression:"carMessage"}],staticClass:"btn",attrs:{type:"text"},domProps:{value:e.carMessage},on:{input:function(t){t.target.composing||(e.carMessage=t.target.value)}}}),e._v(" "),a("div",{staticClass:"btn",on:{click:e.sendByCar}},[e._v("按车辆发送")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.focusCar}},[e._v("聚焦")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.timeServer,expression:"timeServer"}],staticClass:"btn",domProps:{value:e.timeServer},on:{input:function(t){t.target.composing||(e.timeServer=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"btn"},[a("input",{ref:"uploadInput",attrs:{type:"file"},on:{change:e.fileChange}})]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.next}},[e._v("下一帧")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.last}},[e._v("上一帧")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.active}},[e._v("播放")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.pause}},[e._v("暂停")]),e._v(" "),a("div",{staticClass:"btn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.eventId,expression:"eventId"}],attrs:{type:"text"},domProps:{value:e.eventId},on:{input:function(t){t.target.composing||(e.eventId=t.target.value)}}}),e._v(" "),a("div",{staticClass:"btn",on:{click:e.replay}},[e._v("回放")])])])],1)},n=[];i._withStripped=!0}}]);