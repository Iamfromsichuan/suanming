<!--在我的选项中点击--如果我是大师--选项跳转到的大师页面-->
<template>
<div class="nav-my_dashi">
  <div class="nav-my-header">
    <img class="nav-my-img" src="../../static/images/my/个人中心，头部背景.png"/>
    <img class="nav-my-user" :src="'http://xingybc.com'+dashis.data.userinfo.avatar" alt="">
    <p class="nav-my-p">
      <span>
          <router-link to="/simple-main/leavingmessage">
             <img class="nav-my-userImg" src="../../static/images/my/系统消息2.png"/>
            <span class="nav-my-spanB">{{dashis.data.unreadCount}}</span>
          </router-link>
        </span>
    </p>
    <div class="nav-my-ID">
      <h3 class="nav-my-h3">{{dashis.data.userinfo.nickname}}</h3>
      <p class="nav-my-pB">UID:{{dashis.data.userinfo.id}}</p>
    </div>
  </div>
  <div class="nav-my-wallet">
    <a @click="toQianBao" href="javascript:;">
      <img class="nav-my-walletIMGL" src="../../static/images/my/钱包管理.png"/>
      <h3>我的钱包</h3>
      <p>当前收入：{{dashis.data.income}}</p>
      <img class="nav-my-walletIMGR"  src="../../static/images/箭头.png"/>
    </a>
  </div>
  <p class="nav-my_dashiP">
    我的订单
    <!--再此处跳转到大师所有的订单页面-->
    <a @click="toAll" href="javascript:;">
      <span>查看全部></span>
    </a>
  </p>

  <div class="nav-my_dashiAnsown">
    <div class="nav-my_dashiAnsownItem">
      <img src="../../static/images/my/待回复-FDAEBD.png" />
      <p><a href="javascript:;" @click="TomasterXiangceOrder">详测</a></p>
    </div>
    <div class="nav-my_dashiAnsownItem">
      <img src="../../static/images/my/待回复-FDAEBD.png" />
      <p><a href="javascript:;" @click="TomasterQingceOrder" >轻测</a></p>
    </div>
    <div class="nav-my_dashiAnsownItem">
      <img src="../../static/images/my/待回复-FDAEBD.png" />
      <p><a href="javascript:;" @click="TomasterallansonewnOrder" >问答</a></p>
    </div>
  </div>


  <div class="nav-my_dashiAnsown AAAB">
    <div class="nav-my_dashiAnsownItem">
      <img src="../../static/images/dashi/意见反馈.png"/>
      <p><a href="javascript:;">意见反馈</a></p>
    </div>
    <div class="nav-my_dashiAnsownItem">
      <img src="../../static/images/dashi/意见反馈.png"/>
      <p><a href="javascript:;">联系客服</a></p>
    </div>
    <div class="nav-my_dashiAnsownItem">
      <img src="../../static/images/dashi/抢单.png"/>
      <p><a href="javascript:;" @click="TomasterGrabOrderList">问题抢答</a></p>
    </div>
  </div>
</div>
</template>

<script>
  import apiSetting from "../AXIOS/api"
    export default {
        name: "nav-my_dashi",
      data(){
          return{
            user:{
              page1:"",
              number:12,
              Name:"大师1",
              Id:'201805130001',
              imgSrc:"../../static/images/dashi/1.png"
            },
            dashis:[
              {
                tent:"详测",
                srcIMG:"../../static/images/my/待回复-FDAEBD.png",
                routerP:"/simple-main/dashiorder/allxiangce"
              },
              {
                tent:"轻测",
                srcIMG:"../../static/images/dashi/联系客服.png",
                routerP:"/simple-main/dashiorder/allqingce"
              },
              {
                tent:"问答",
                srcIMG:"../../static/images/my/待回复-FDAEBD.png",
                routerP:"/simple-main/dashiorder/allansonewn"
              }
            ],
            bom:[
              {
                tent:"意见反馈",
                srcIMG:"../../static/images/dashi/意见反馈.png",
                routerP:""
              },
              {
                tent:"联系客服",
                srcIMG:"../../static/images/dashi/意见反馈.png",
                routerP:""
              },
              {
                tent:"问题抢答",
                srcIMG:"../../static/images/dashi/抢单.png",
                routerP:"/simple-main/alldashiorderqiangda"
              }
            ]
          }
      },
      methods:{
        toAll(){
          var page = this.page1
          var masterAllOrder = JSON.parse(sessionStorage.getItem("masterAllOrder"))
          if(masterAllOrder){
            this.$router.push({
              path:"/simple-main/dashiorder/alldashiorder"
            })
          }else {
            alert("网络繁忙，请稍后再试")
          }
            // this.$axios(apiSetting.masterAllOrder,{
            //   page:page
            // }).then(res=>{
            //   sessionStorage.setItem("masterAllOrder",JSON.stringify(res.data.data))
            // })

        },
        TomasterXiangceOrder(){
          var page = this.page1
          var masterXiangceOrder = JSON.parse(sessionStorage.getItem("masterXiangceOrder"))
          if(masterXiangceOrder){
            this.$router.push({
              path:"/simple-main/dashiorder/allxiangce"
            })
          }else {
            this.$toast("网络繁忙，请稍后再试")
          }
          // this.$axios(apiSetting.masterXiangceOrder).then(res=>{
          //   sessionStorage.setItem("masterXiangceOrder",JSON.stringify(res.data.data))
          // })
        },
        TomasterQingceOrder(){//masterQingceOrder
          var page = this.page1
          var masterQingceOrder = JSON.parse(sessionStorage.getItem("masterQingceOrder"))
          if(masterQingceOrder){
            this.$router.push({
              path:"/simple-main/dashiorder/allqingce"
            })
          }else {
            alert("网络繁忙，请稍后再试")
          }
        },
        TomasterallansonewnOrder(){
          var page = this.page1

          var masterWendaOrder = JSON.parse(sessionStorage.getItem("masterWendaOrder"))
          if(masterWendaOrder){
            this.$router.push({
              path:"/simple-main/dashiorder/allansonewn"
            })
          }else {
            alert("网络繁忙，请稍后再试")
          }
        },
        TomasterGrabOrderList(){
          var page = this.page1
          this.$axios(apiSetting.masterGrabOrderList,{
            page:page
          }).then(res=>{
            sessionStorage.setItem("masterGrabOrderList",JSON.stringify(res.data.data.orders))
            this.$router.push({
              path:"/simple-main/alldashiorderqiangda"
            })
          })
        },

        toQianBao(){
          this.$axios(apiSetting.getAccountAllList).then(res=>{
            sessionStorage.setItem("getAccountAllList",JSON.stringify(res.data.data))
            this.$router.push({
              path:"/simple-main/dashiqianbao/dashiqianbaoAll"
            })
          })
        }
      },
      created(){
        this.dashis = JSON.parse(sessionStorage.getItem("masterCenter"))
      }
    }
</script>

<style scoped>

</style>
