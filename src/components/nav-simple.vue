<template>
<div class="nav-simple">
  <header>
    <div class="nav-simple-header">
      <div
        class="nav-simple-item"
        v-for="(tent,index) in wenda_cat_list"
        :key="index"
      >
        <h4>{{tent.name}}</h4>
        <p>{{tent.goods_content}}</p>
        <img class="nav-simple-img" :src="'http://xingybc.com'+tent.image" alt="">
        <p class="routerFilpp">
          <a @click="submit(tent)" href="javascript:;">提问</a>
        </p>
      </div>
    </div>
  </header>
  <div class="nav-search-main">
    <nav-simple-search></nav-simple-search>
    <div class="nav-unbo-itemITN">
      <div
        class="nav-unbo-item aaa"
        v-for="(index,key) in qingce_cat_list"
        :key="key"
        @click="getQingceList(index.id,key)"
      >
        <a href="javascript:;">
          <!--//有个问题下来去解决，动态传参，如何传vue的deda数据-->
          <img :src="'http://xingybc.com'+index.image"/>
          <p>{{index.name}}</p>
        </a>
      </div>
    </div>
  </div>
  <nav-simple-water></nav-simple-water>
</div>
</template>

<script>
  import apiSetting from "../AXIOS/api"
  import qs from "qs"
    export default {
      name: "nav-simple",
      data(){
        return {
          page:1,
          basecatid:"",
          cat_id:"",
          wenda_cat_list:[],
          qingce_cat_list:[],
          simple:[
            {
              mem:"情感婚恋",
              choice:"恋爱,婚姻，桃花，脱单等",
              srcImg:"../../static/images/detailed/婚恋感情.png",
              routerFi:"/simple-main/infoproblem"
            },
            {
              mem:"事业财运",
              choice:"职场，学业，创业，理财等",
              srcImg:"../../static/images/detailed/事业财运.png",
              routerFi:"/simple-main/infoproblem"
            },
            {
              mem:"生活健康",
              choice:"封面，子女，生活，健康等",
              srcImg:"../../static/images/detailed/健康孕育.png",
              routerFi:"/simple-main/infoproblem"
            },
            {
              mem:"流年运程",
              choice:"流年，流月，本命年等",
              srcImg:"../../static/images/detailed/流年运势.png",
              routerFi:"/simple-main/infoproblem"
            }
          ],
          active: 2,
          routerFil:''
        }
      },
      components:{
          "nav-simple-water": require('../components/common/watefall').default,
           "nav-simple-search":require('../components/common/search').default,
      },
      methods:{
        submit(tent){
          var cat_id = tent.id
          var basecatid = sessionStorage.getItem("basecatid")
          this.$axios(apiSetting.wenda,{
            cat_id:cat_id,
            basecatid:basecatid
          }).then(res=>{
            this.$router.push({
              path:"/simple-main/infoproblem",
              query:{
                cat_id:res.data.data.goods_id
              }
            })
          })
        },
        getQingceList(index,key){
          this.cat_id = this.qingce_cat_list[key].id
          sessionStorage.setItem("ID", this.cat_id)
          this.basecatid = sessionStorage.getItem("basecatid")
          var that = this
          this.$axios(apiSetting.qingceList,{
            basecatid:this.basecatid,
            cat_id:this.cat_id,
            pagerows:10,
            page:this.page
          }).then(res=>{
            this.page++
            sessionStorage.setItem("goodslist",qs.stringify(res.data.data.goodslist))
            that.$router.push({
              path:'/simple-main/problemlist?',
              query:{
                cat_id:index
              }
            })
          })
        }
      },
      created(){
        this.qingce_cat_list = qs.parse(sessionStorage.getItem("qingce_cat_list"))
        this.wenda_cat_list = qs.parse(sessionStorage.getItem("wenda_cat_list"))
        console.log(qs.parse(sessionStorage.getItem("wenda_cat_list")))
        console.log(qs.parse(sessionStorage.getItem("qingce_cat_list")))
      }
    }
</script>

<style scoped>

</style>
