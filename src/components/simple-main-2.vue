<template>
  <div :class="{'simpleMain':IsTrue,'AFTER':FuTrue}">
    <div class="simpleMain-header">
      <img class="simpleMain-header-img" src="../../static/images/my/轻测问题头部图片.jpg"/>
      <div class="simpleMain-header-shadom">
        <p> {{Goods.goods_name}}</p>
      </div>
      <p class="simpleMain-header-p">
        {{Goods.goods_content}}
      </p>
      <p class="simpleMain-header-pA">
        <span class="simpleMain-header-imgA"><img src="../../static/images/simpleMain/订单.png" /> {{Goods.sales_sum}}测试</span>
        <span class="simpleMain-header-imgB"><img src="../../static/images/simpleMain/待评价.png"/> {{Goods.comment_count}}评价</span>
      </p>
    </div>
    <p class="simpleMain-commit-p">评论反馈（{{Goods.comment_count}}）</p>
    <div
      class="simpleMain-commit"
      v-for="(index ,key) in recod.commits"
      :key="key"
    >
      <div class="simpleMain-commit-tent">
        <p class="simpleMain-tent-pa">{{index.username}}</p>
        <p >{{index.time}}</p>
        <p class="simpleMain-tent-p">{{index.conmitContent}}</p>
        <img :src="index.imgsrc" alt="" class="simpleMain-tent-img">
      </div>
    </div>
    <p class="simpleMain-tent-pap"><router-link to="/simple-main/allcommit">全部评论{{Goods.comment_count}}条></router-link></p>
    <nav-simple-water></nav-simple-water>
    <div class="simpleMain-submit">
      <p class="simpleMain-submitA">￥ {{Goods.shop_price}}</p>
      <p class="simpleMain-submitB"><img src="../../static/images/simpleMain/时效.png"/>2小时内回复</p>
      <!--confirm方法用来控制  弹出层的显示，给simpleMaind添加一个蒙层-->
      <p class="simpleMain-submitC" @click="confirm">立即购买</p>
      <!--<router-link to="/simple-main/nowpay">-->
    </div>
    <!--chunk这个div是在点击提问后的弹出层，ShoeTifull用来控制chunk的显示与隐藏-->
    <div v-if="ShoeTifull" class="chunk">
      <div class="chunk2">
        <p>您是否确认提出问题</p>
      </div>
      <div class="chunk1" @click="ShowT">
        <p>取消提问</p>
      </div>
      <!--ShowTTTT方法用来取消simpleMaind的蒙层以及路由的跳转----跳转到nowpaay路由-->
      <div class="chunk1 chun3" @click="ShowTTTT">
        <p>确认提问</p>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from "qs"
  import apiSetting from "../AXIOS/api"
    export default {
      name: "simpleMain2",
      data(){
        return {
          Goods:[],
          IsTrue:true,
          FuTrue:false,//控制body背景色 false表示取消蒙层
          ShoeTifull:false,//控制提示框的显示隐藏  false隐藏
          recod:{
            number1:2000,
            number2:1800,
            cont:2000,
            commits:[//表示用户的评论，评论的用户，评论的内容，时间，用户头像
              {
                imgsrc:"../../static/images/dashi/用户头像.jpeg",
                username:"林雨",
                time:"2018-05-06",
                conmitContent:"用户默认好评"
              },
              {
                imgsrc:"../../static/images/dashi/用户头像.jpeg",
                username:"林雨",
                time:"2018-05-06",
                conmitContent:"时辰是午时，可能选错了，老师，麻烦看一下，结果有变化吗"
              },
              {
                imgsrc:"../../static/images/dashi/用户头像.jpeg",
                username:"林雨",
                time:"2018-05-06",
                conmitContent:"可以，" +
                "很好"
              }
            ]
          },
          Nub:"",
          res:""
        }
      },
      components:{
        //注册一个子组件，下面的热门轻测
        "nav-simple-water": require('../components/aboutSimple').default,
      },
      methods:{
        confirm(){
          this.ShoeTifull = true;
          this.FuTrue = true
        },
        ShowT(){
          this.ShoeTifull = false;
          this.FuTrue = false
        },
        ShowTTTT(){
          this.ShoeTifull = false;
          this.FuTrue = false;
          var goods_id = this.Goods.id
          sessionStorage.setItem("ID",goods_id)
          var basecatid = sessionStorage.getItem("basecatid")
          this.$axios(apiSetting.MasterList,{
            basecatid:basecatid,
            goods_id:goods_id
          }).then(res=>{
            for(var a in res.data.data.masterlist){
              res.data.data.masterlist[a].masters.gender_text = false
            }
            res.data.data.qiangda.masters.gender_text =false
            // console.log( res.data.data.masterlist[a].masters.gender_text)
            sessionStorage.setItem("MasterList",qs.stringify(res.data.data))
            console.log(res.data.data)
            sessionStorage.setItem("MasterList1",JSON.stringify(res.data.data))
            this.$router.push({path:"/simple-main/nowpay"})
          })
        },
        getParams () {
          // 取到路由带过来的参数
          this.Nub = this.$route.query.list//是什么原因导致没有赋值成功
        }
      },
      created(){
        this.Goods = qs.parse(sessionStorage.getItem("Goods"))
        console.log(1)
      }
    }
</script>

<style scoped>

</style>
