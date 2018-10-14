<template>
  <div class="nav-index">
    <!--头部轮播-->
    <div class="nav-index-header">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <router-link :to="image.url"><img v-bind:src="image.img" /></router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--手动切换的banner-->
    <div v-if="show" v-on:click="ToChange" class="nav-index-body ">
      <img class="nav-index-banner" :src="suanming[0].url"/>
      <h3>{{suanming[0].content}}</h3>
      <p>点击切换到占星测算版本</p>
      <img class="updatimg" src="../../static/images/更换版本.png" />
    </div>
    <div  v-else  v-on:click="ToChange" class="nav-index-body">
      <img class="nav-index-banner" :src="suanming[1].url"/>
      <h3>占星测算版本</h3>
      <p>点击切换到周易测算版本</p>
      <img class="updatimg" src="../../static/images/更换版本.png" />
    </div>
    <!--搜索框-->
    <div class="nav-index-search">
      <input type="text" placeholder="查找大师或者问题">
      <img class="search" src="../../static/images/search.png"/>
    </div>
    <!--找祥测/快速问答跳转页面-->
    <div  class="nav-index-body search-deatal" @click="toFather(1)">
      <router-link to="/index/nav-detailed">
        <img class="nav-index-banner" :src="'http://xingybc.com'+lalla[0].image"/>
        <h3>{{lalla[0].name}}</h3>
        <p>{{lalla[0].goods_content}}</p>
        <img class="updatimg jiantou" src="../../static/images/箭头.png"/>
      </router-link>
    </div>
    <div  class="nav-index-body search-simple" @click="toFather(2)">
      <router-link to="/index/nav-simple">
        <img class="nav-index-banner" :src="'http://xingybc.com'+lalla[1].image"/>
        <h3>{{lalla[1].name}}</h3>
        <p>{{lalla[1].goods_content}}</p>
        <img class="updatimg jiantou" src="../../static/images/箭头.png" height="26" width="18"/>
      </router-link>
    </div>
    <nav-simple-water></nav-simple-water>
  </div>
</template>

<script>
  import Sort from "../Unitl/sort"
  import apiSetting from "../AXIOS/api"
  import qs from 'qs'
  export default {
    name: "nav-index",
    data(){
      return {
        lalla:[],
        basecatid:"",
        adminToken:'',
        images:[
          {
            img:"../../static/images/prMb8MHkTwKw.jpg",
            url:""
          },
          {
            img:"../../static/images/WeW8XpAf4Wfx.jpg",
            url:""
          }
        ],
        suanming:[
          {
            url:"",
            content:"",
            featuresNmae:"",
            featuresUrl:""
          },
          {
            url:"",
            content:"",
            featuresNmae:"",
            featuresUrl:""
          }
        ],
        show:true,
        value:"",
        list:[
        {
          a:"我是否已经错过了正缘",
          b:"生命中的富贵姻缘就像公交车，生命就像路线",
          c:"2000",
          d:"1800",
          imgsrc:"../../static/images/hot/ZxFHn5PpWxdn.jpg"
        },
        {
          a:"我是否已经错过了正缘",
          b:"生命中的富贵姻缘就像公交车，生命就像路线",
          c:"2000",
          d:"1800",
          imgsrc:"../../static/images/hot/YwRxs5bYwher.jpg"
        },
        {
          a:"我是否已经错过了正缘",
          b:"生命中的富贵姻缘就像公交车，生命就像路线",
          c:"2000",
          d:"1800",
          imgsrc:"../../static/images/hot/sG6cRW34zstt.jpg"
        },
        {
          a:"我是否已经错过了正缘",
          b:"生命中的富贵姻缘就像公交车，生命就像路线",
          c:"2000",
          d:"1800",
          imgsrc:"../../static/images/hot/b3FdMnGs3C6c.jpg"
        }
      ],
        loading: false,
        finished: false,
      }
    },
    methods: {
      toFather(x){
        this.$emit("accept",x)
        console.log("to")
      },
      onLoad() {},
      ToChange(){
        this.show=!this.show;
        if(this.show==true){
          this.basecatid = 851
        }else {
          this.basecatid = 852
        }
        sessionStorage.setItem("basecatid",this.basecatid)
        console.log(this.basecatid)
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
        })
      }
    },
    created(){
      var res = qs.parse(sessionStorage.getItem("indexResponse"))
        this.images[0].img = "http://xingybc.com"+res.data.data.slideres_list[0].res_file_image;
        this.images[1].img ="http://xingybc.com"+res.data.data.slideres_list[1].res_file_image
        this.images[0].url = res.data.data.slideres_list[0].res_href_url
        this.images[1].url = res.data.data.slideres_list[1].res_href_url
        this.suanming[0].url = "http://xingybc.com"+res.data.data.base_cat[851].image
        this.suanming[1].url = "http://xingybc.com"+res.data.data.base_cat[852].image
       this.suanming[0].content = res.data.data.base_cat[851].goods_content
       this.suanming[1].content = res.data.data.base_cat[852].goods_content
      this.lalla =[]
        for(var a in res.data.data.features_cat){
          this.lalla.push(res.data.data.features_cat[a])
        }
        console.log("lala",this.lalla)
       // this.lalla[0].featuresNmae
       // this.lalla[1].featuresNmae

       // this.suanming[0].featuresUrl = "http://xingybc.com"+res.data.data.features_cat[856].image
       // this.suanming[1].featuresUrl = "http://xingybc.com"+res.data.data.features_cat[858].image
    },
    components:{
      "nav-simple-water": require('../components/common/watefall').default,
    }
  }
</script>
