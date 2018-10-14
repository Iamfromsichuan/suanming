<!--大师的全部订单界面-->
<template>
  <div class="alldashiorder">
    <!--<p class="alldashiorder-nav">-->
      <!--<span :class="a"><router-link to="/simple-main/dashiorder/allxiangce">详测</router-link></span>-->
      <!--<span :class="b"><router-link to="/simple-main/dashiorder/allqingce">轻测</router-link></span>-->
      <!--<span :class="c"><router-link to="/simple-main/dashiorder/allansonewn">问答</router-link></span>-->
      <!--<span :class="d"><router-link to="/simple-main/dashiorder/alldashiorder">全部</router-link></span>-->
    <!--</p>-->
    <van-tabs v-model="active" @click="onClick">
      <van-tab v-for="(key,index) in dashis" :title="key.a" :key="index">
      </van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
  import apiSetting from "../AXIOS/api"
  export default {
    name: "alldashiorder",

    data(){
        return{
          active:1,
          page1:1,
          dashis:[
            {
              a:"详测",
              b:"/simple-main/dashiorder/allxiangce"
            },
            {
              a:"轻测",
              b:"/simple-main/dashiorder/allqingce"
            },
            {
              a:"问答",
              b:"/simple-main/dashiorder/allansonewn"
            },
            {
              a:"全部",
              b:"/simple-main/dashiorder/alldashiorder"
            }
          ],
          dashiorders:[
            {
              id:"Q2018050612020000001",
              tip:"待评价",
              srcImg:"../../static/images/dashi/1.png",
              itme:"大师1-事业财运",
              money:"￥300.00",
              time:"2018-05-06 12:02:02",
              tent1:"",
              tent2:"查看记录",
              tent3:"",
              color1:"",
              color2:"background-color:pink;",
              color3:""
            },
            {
              id:"Q2018050612020000001",
              tip:"进行中",
              srcImg:"../../static/images/dashi/1.png",
              itme:"大师1-事业财运",
              money:"￥300.00",
              time:"2018-05-06 12:02:02",
              tent1:"",
              tent2:"去回复",
              tent3:"",
              color1:"",
              color2:"background-color:pink;",
              color3:""
            },
            {
              id:"Q2018050612020000001",
              tip:"进行中",
              srcImg:"../../static/images/dashi/1.png",
              itme:"大师1-事业财运",
              money:"￥300.00",
              time:"2018-05-06 12:02:02",
              tent1:"",
              tent2:"去回复",
              tent3:"",
              color1:"",
              color2:"background-color:pink;",
              color3:""
            },
            {
              id:"Q2018050612020000001",
              tip:"进行中",
              srcImg:"../../static/images/dashi/1.png",
              itme:"大师1-事业财运",
              money:"￥300.00",
              time:"2018-05-06 12:02:02",
              tent1:"",
              tent2:"联系用户",
              tent3:"",
              color1:"",
              color2:"background-color:pink;",
              color3:""
            },
            {
              id:"Q2018050612020000001",
              tip:"已完成",
              srcImg:"../../static/images/dashi/1.png",
              itme:"大师1-事业财运",
              money:"￥300.00",
              time:"2018-05-06 12:02:02",
              tent1:"",
              tent2:"查看记录",
              tent3:"",
              color1:"",
              color2:"background-color:pink;",
              color3:""
            },
            {
              id:"Q2018050612020000001",
              tip:"待评价",
              srcImg:"../../static/images/dashi/1.png",
              itme:"大师1-事业财运",
              money:"￥300.00",
              time:"2018-05-06 12:02:02",
              tent1:"",
              tent2:"删除订单",
              tent3:"",
              color1:"",
              color2:"background-color:pink;",
              color3:""
            }
          ]
        }
    },
    methods: {
      onClick(index,title) {
        if(title == "详测"){
          var page = this.page1
          this.$axios(apiSetting.masterXiangceOrder,{
            page:page
          }).then(res=>{
            sessionStorage.setItem("masterXiangceOrder",JSON.stringify(res.data.data))
            this.$router.push({
              path:"/simple-main/dashiorder/allxiangce"
            })
          })
        }
        this.$router.replace({
          path: this.dashis[index].b
        })
      }
    },
    created(){
      if(this.$route.path.indexOf('/simple-main/dashiorder/allxiangce')>=0){
        this.active=0;
      }else if(this.$route.path.indexOf('/simple-main/dashiorder/allansonewn')>=0){
        this.active=2;
      } else if(this.$route.path.indexOf('/simple-main/dashiorder/allqingce')>=0){
        this.active=1;
      }else {
        this.active=3;
      }
      console.log(this.$route.path)
    },
    components:{
      "nav-simple-order": require('../components/common/order_nuber').default,
    }
  }
</script>

<style>

</style>
