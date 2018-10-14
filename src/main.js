// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//微信登录
//拿openid
//拿token->direct_login

import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from "axios"
import apiSetting from "./AXIOS/api"
import Axios from "./AXIOS/ajax"
import './assets/scss/app.scss'
import './assets/animate.css'
import Vant from 'vant';
import qs from "qs"
import Sort from "./Unitl/sort"
// import VueWebsocket from "vue-websocket"
import WS from  "./websocket/WS"
import wsLib from  "./websocket/ws_lib"
var swf=document.createElement('script')
swf.src='http://h07.situantec.cn/public/static/chat/js/swfobject.js'
document.body.appendChild(swf)
swf.onload=function () {
  wsLib()
}


var basecatid = 1

Vue.use(Vant);
// Vue.use(VueWebsocket)

Vue.prototype.$axios = Axios;
Vue.prototype.$showLoading = "ture";
Vue.prototype.$ws = WS;
Vue.config.productionTip = false
var uid
//----------------这是正式上线版本，做测试是下面的
// var token
// if(!token){
//   axios.get("http://xingybc.com/api/third/connect/platform/{platform}",{
//     params:{
//       platform:"wechat",
//       redirect_uri:"http%3a%2f%2fxingybc.com%2f%23%2findex%2fnav-simple"
//     }
//   }).then(res=>{
//     // token = document.cookie.slice(10)
//     // sessionStorage.setItem("token",token)
//     for(var i=0;i<document.cookie.split(";").length;i++){
//       if(document.cookie.split(";")[i].indexOf("uid") > 0 ){
//         console.log(i)
//         uid = document.cookie.split(";")[1].slice(5);
//       }else if(document.cookie.split(";")[i].indexOf("token")>0){
//         token = document.cookie.split(";")[2].slice(7);
//         sessionStorage.setItem("token",token)
//         sessionStorage.setItem("userId",uid)
//       }
//     }
//   })
// }


Axios(apiSetting.LoginGetToken,{userid:1679}).then(res=>{
  sessionStorage.setItem("token",res.data.data.userinfo.token)
  sessionStorage.setItem("userId",1679)
})
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created(){
    if(!sessionStorage.getItem("basecatid")){
      sessionStorage.setItem("basecatid",851)
    }

    //-----------------------------------暂时未接通
    // this.$axios(apiSetting.Member).then(res=>{
    //     // console.log("--------------22222222222222");
    //     // console.log(res);
    //     // console.log("--------------2222222222222")
    //     sessionStorage.setItem("memberResponse",qs.stringify(res))
    //   }
    // )
    var basecatid = sessionStorage.getItem("basecatid")
    this.$axios(apiSetting.GetIndex,{basecatid:basecatid}).then(res=>{
        sessionStorage.setItem("indexResponse",qs.stringify(res))
      }
    )
    this.$axios(apiSetting.Detaile,{basecatid:basecatid}).then(res=>{
        sessionStorage.setItem("detaileResponse",qs.stringify(res))
      }
    )
    this.$axios(apiSetting.CheckTokenLife,{basecatid:basecatid}).then(res=>{
        sessionStorage.setItem("CheckTokenLifeResponse",qs.stringify(res))
      }
    )
    this.$axios(apiSetting.Qingce,{basecatid:basecatid}).then(res=> {
      var qingce_cat_list
      var wenda_cat_list
      qingce_cat_list = Sort(res.data.data.qingce_cat_list,qingce_cat_list)
      wenda_cat_list = Sort(res.data.data.wenda_cat_list,wenda_cat_list)
      sessionStorage.setItem("qingce_cat_list",qs.stringify(qingce_cat_list))
      sessionStorage.setItem("wenda_cat_list",qs.stringify(wenda_cat_list))
      console.log(qs.parse(sessionStorage.getItem("wenda_cat_list")));
    })
    this.$axios(apiSetting.getUnreadChats,{
      basecatid:basecatid
    }).then(res=>{
      sessionStorage.setItem("getUnreadChats",JSON.stringify(res.data))
    })
    this.$axios(apiSetting.center,{
      basecatid:basecatid
    }).then(res=>{
      sessionStorage.setItem("center",res.data.data.userinfo.id)
      sessionStorage.setItem("avatar",res.data.data.userinfo.avatar)
      sessionStorage.setItem("nickname",res.data.data.userinfo.nickname)
      console.log(res.data.data.userinfo.avatar)
    })




    this.$axios(apiSetting.userPendingPayOrder).then(res=>{
      sessionStorage.setItem("userwaitingPayRes",JSON.stringify(res))
    })
    this.$axios(apiSetting.userInServiceOrder).then(res=>{
      sessionStorage.setItem("userGonging",JSON.stringify(res))

    })
    this.$axios(apiSetting.userToCommentOrder).then(res=>{
      sessionStorage.setItem("userwaitToCommit",JSON.stringify(res))
    })
    this.$axios(apiSetting.userAllOrder).then(res=>{
      sessionStorage.setItem("userAllOrder",JSON.stringify(res))
    })







    this.$axios(apiSetting.masterXiangceOrder).then(res=>{
      sessionStorage.setItem("masterXiangceOrder",JSON.stringify(res.data.data))
      console.log(res.data.data)
    })
    this.$axios(apiSetting.masterQingceOrder).then(res=>{
      sessionStorage.setItem("masterQingceOrder",JSON.stringify(res.data.data))
    })
    this.$axios(apiSetting.masterAllOrder).then(res=>{
      sessionStorage.setItem("masterAllOrder",JSON.stringify(res.data.data))
    })
    this.$axios(apiSetting.masterWendaOrder).then(res=>{
      sessionStorage.setItem("masterWendaOrder",JSON.stringify(res.data.data))
    })
  }
})
