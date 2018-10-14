<template>
  <div class="nav-my">
    <div class="nav-my-header">
      <img class="nav-my-img" src="../../static/images/my/个人中心，头部背景.png"/>
      <img class="nav-my-user" :src="img" alt="">
      <p class="nav-my-p">
        <span class="nav-my-spanA">
          <router-link to="/simple-main/userSeting">
            <img class="nav-my-img" src="../../static/images/my/设置 (1).png"/>
          </router-link>
        </span>
        <span>
          <router-link to="/simple-main/leavingmessage">
             <img src="../../static/images/my/系统消息2.png"/>
            <span class="nav-my-spanB">{{user.number}}</span>
          </router-link>
        </span>
      </p>
      <div class="nav-my-ID">
        <h3 class="nav-my-h3">{{nickname}}</h3>
        <p class="nav-my-pB">UID:{{uid}}</p>
      </div>
    </div>
    <div class="my-order">
      <p class="my-order-p">
        <span class="my-order-spanB">我的订单</span>
        <span class="my-order-span my-order-C"><a @click="toAll" href="javascript:;">查看全部<img class="my-order-imgB" src="../../static/images/my/箭头.png" /></a></span>
      </p>
      <div class="order">
        <div class="order-pay">
          <img class="order-pay-img" src="../../static/images/my/待付款-FDAEBD.png" height="60" width="60"/>
          <p class="order-pay-p"><router-link to="/simple-main/allorder/waitpay">待付款 </router-link></p>
        </div>
        <div class="order-pay">
          <img class="order-pay-img" src="../../static/images/my/待付款-FDAEBD.png" height="60" width="60"/>
          <p class="order-pay-p"><router-link to="/simple-main/allorder/starting">进行中 </router-link></p>
        </div>
        <div class="order-pay">
          <img class="order-pay-img" src="../../static/images/my/待付款-FDAEBD.png" height="60" width="60"/>
          <p class="order-pay-p"><router-link to="/simple-main/allorder/waitcommit">待评价 </router-link></p>
        </div>
      </div>
    </div>
    <div class="order-chois">
      <div class="order-pay">
        <router-link to="">
          <img class="order-pay-img" src="../../static/images/my/意见反馈.png" height="56" width="56"/>
          <p class="order-pay-p">意见反馈</p>
        </router-link>
      </div>
      <div class="order-pay">
        <router-link to="">
          <img class="order-pay-img" src="../../static/images/my/联系客服.png" height="56" width="56"/>
          <p class="order-pay-p">联系客服</p>
        </router-link>
      </div>
    </div>
    <div class="my-order-botto">
      <a @click="toDashimain" href="javascript:;">
        <img class="my-order-imgA" src="../../static/images/my/指导老师.png"/>
        <h3>我是大师</h3>
        <p class="my-order-p">如果您是大师，点击进入大师界面</p>
        <img class="my-order-imgB" src="../../static/images/my/箭头.png" height="26" width="18"/>
      </a>
    </div>
  </div>
</template>

<script>
  import apiSetting from "../AXIOS/api"
    export default {
        name: "nav-my",
      data(){
          return {
            user:{
              number:12,
              Name:"林雨",
              Id:'201805130001',
              imgSrc:"../../static/images/dashi/用户头像.jpeg"
            },
            nickname:"",
            uid:"",
            img:"",
            token:""
          }
      },
      methods:{
        toAll(){
            this.$router.push({
              path:"/simple-main/allorder"
            })
        },
        toDashimain(){
          this.$axios(apiSetting.checkIsMaster).then(res=>{
            if(res.data.msg.indexOf("欢迎")>=0){
              this.$axios(apiSetting.masterCenter).then(res=>{
                sessionStorage.setItem("masterCenter",JSON.stringify(res.data))
                this.$router.push({
                  path:"/index/nav-my_dashi"
                })
              })
            }else {
              this.$toast(res.data.msg)
            }
          })
        }
      },
      created(){
          this.nickname = sessionStorage.getItem("nickname")
          this.img = sessionStorage.getItem("avatar")
          if(this.img.indexOf('http')<0){
            this.img = "http://xingybc.com"+this.img
          }
          this.uid = sessionStorage.getItem("center")
      }
    }
</script>

<style scoped>

</style>
