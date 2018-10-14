<template>
  <div class="index">
    <div class="index-header" >
      <router-view v-on:accept="sonActive"></router-view>
    </div>
    <div class="index-footer">
      <van-tabbar  v-model="active">
        <van-tabbar-item icon="shop" to="/index/nav-index">
          <span><a>首页</a></span>
          <template slot="icon" slot-scope="props">
            <img :src="props.active ? icon1.active : icon1.normal" />
          </template>
        </van-tabbar-item>

        <van-tabbar-item icon="chat" to="/index/nav-detailed">
          <span><a>详测</a></span>
          <template slot="icon" slot-scope="props">
            <img :src="props.active ? icon2.active : icon2.normal" />
          </template>
        </van-tabbar-item>

        <van-tabbar-item icon="records" to="/index/nav-simple">
          <span> <a >轻测</a></span>
          <template slot="icon" slot-scope="props">
            <img :src="props.active ? icon3.active : icon3.normal" />
          </template>
        </van-tabbar-item>

        <van-tabbar-item icon="records" to="/index/nav-my">
          <span>  <a>我的</a></span>
          <template slot="icon" slot-scope="props">
            <img :src="props.active ? icon4.active : icon4.normal" />
          </template>
        </van-tabbar-item>

      </van-tabbar>
    </div>
  </div>
</template>
<script>
  import qs from "qs"
    export default {
        name: "index",
        data() {
          return {
            active: 0,
            icon1: {
              active: '../../static/images/Home-Active-fdaebd.png',
               normal:"../../static/images/Home.png"
            },
            icon2: {
              active: '../../static/images/nav/Messages-Active-fdaebd-256.png',
              normal:"../../static/images/nav/Messages-256.png"
            },
            icon3: {
              active: '../../static/images/nav/Messaging-Active-fdaebd-256.png',
              normal:"../../static/images/nav/Messaging-256.png"
            },
            icon4: {
              active: '../../static/images/nav/User-Profile-Active-fdaebd-256.png',
              normal:"../../static/images/nav/User-Profile-256.png"
            }
          }
        },
        methods:{
          sonActive(x){
            this.active = x
            console.log(x)
          }
        },
        created(){
          // console.log(this.$route.path+"1111111111111111111111111111111111111")
          if(this.$route.path.indexOf("nav-index")>=0 ){
              this.active = 0;
          }else if(this.$route.path.indexOf("nav-my")>=0){
            this.active=3;
          }else if(this.$route.path.indexOf("nav-detailed")>=0){
            this.active=1;
          }else if(this.$route.path.indexOf("nav-simple")>=0){
            this.active=2;
          }
        }
    }
</script>
//http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php
//http://www.wwtliu.com/sxtstu/news/juhenews.php
// params:{
//   type:"junshi",
//   count:30
// }
