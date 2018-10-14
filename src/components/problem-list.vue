<template>
  <div class="nav-index-waterfall">
    <van-pull-refresh  v-model="isLoading" @refresh="onRefresh">
      <ul>
        <li v-for="(tent,key) in goodslist" :key="key" @click="ToDetaile(tent.id)">
          <a href="javascript:;">
            <img  v-bind:src="'http://xingybc.com'+tent.goods_logo_image"/>
            <h4>{{tent.goods_name}}</h4>
            <h5>{{tent.goods_content.slice(0,19)}}</h5>
            <p><span class="nav-index-span"><img src="../../static/images/hot/sG6cRW34zstt.jpg" alt="">{{tent.sales_sum}}测试</span><span class="nav-index-span"><img src="../../static/images/hot/sG6cRW34zstt.jpg" alt="">{{tent.comment_count}}评价</span></p>
          </a>
        </li>
      </ul>
    </van-pull-refresh>
  </div>
</template>
<script>
  import qs from "qs"
  import apiSetting from "../AXIOS/api"
  import Sort from "../Unitl/sort"
    export default {
      name: "problem-list",
      data(){
        return{
          count: 0,
          isLoading: false,
          loading: false,
          finished: false,
          goodslist:[],
          page:2,
          cat_id:"",
          id:""
        }
      },
      methods:{
        //下拉获取更多问题
        getQingceList(){
          var qingce_cat_list = qs.parse(sessionStorage.getItem("qingce_cat_list"))
          var basecatid
          this.cat_id = this.$route.query.cat_id

          basecatid = sessionStorage.getItem("basecatid")
          this.$axios(apiSetting.qingceList,{
            basecatid:basecatid,
            cat_id:this.cat_id,
            pagerows:10,
            page:this.page
          }).then(res=>{

            this.isLoading = false;
            var local
            Sort(res.data.data.goodslist,local)
            this.goodslist = this.goodslist.concat(Sort(res.data.data.goodslist,local))
          })
        },
        onRefresh() {
          this.getQingceList()
        },
        //跳转到选择的问题详情页
        ToDetaile(arg){
          //获取存在内存的basecatid
          var basecatid = sessionStorage.getItem("basecatid")
          //发送数据详情页内容请求

          this.$axios(apiSetting.qingceDeail,{
            basecatid:basecatid,
            //商品的id
            goods_id:arg
          }).then(res=>{
            //获取详情页数据成功，路由跳转
            sessionStorage.setItem("Goods",qs.stringify(res.data.data))
            sessionStorage.setItem("GoodsName",res.data.data.goods_name)
            this.$router.push({
              path:"/simple-main2"
            })
            //将获取的数据，存到内存
          })
        }
      },
      created(){
        var goodslist
        this.goodslist = Sort(qs.parse(sessionStorage.getItem("goodslist")),goodslist)
      }
    }
</script>

<style scoped>

</style>
