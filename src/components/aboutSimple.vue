<template>
  <div class="nav-index-waterfall">
    <p>轻测相关</p>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul>
        <li v-for="(tent,key) in relatedgoods" :key="key" >
          <router-link :to="{
              path:'/simple-main?',
            }"
          >
            <img  v-bind:src="'http://xingybc.com'+tent.goods_logo_image"/>
            <h4>{{tent.goods_name}}</h4>
            <h5>{{tent.goods_content.slice(0,20)}}</h5>
            <p><span class="nav-index-span"><img src="../../static/images/simpleMain/订单.png"/>{{tent.sales_sum}}测试</span><span class="nav-index-span"><img src="../../static/images/simpleMain/待评价.png"/>{{tent.comment_count}}评价</span></p>
          </router-link>
        </li>
      </ul>
    </van-pull-refresh>
  </div>
</template>
<script>
  import qs from "qs"
  export default {
    name: "watefall",
    data(){
      return{
        count: 0,
        isLoading: false,
        relatedgoods:[],
        nublist:[],
        hotGoods:"",
        weighs:[]
      }
    },
    created(){
      this.relatedgoods = qs.parse(sessionStorage.getItem("Goods")).relatedgoods
      console.log(this.relatedgoods)
    },
    methods:{
      onRefresh() {
      }
    },
  }
</script>

