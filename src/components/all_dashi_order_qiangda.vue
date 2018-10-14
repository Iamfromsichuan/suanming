<template>
  <div class="qiangda">
    <div class="all-order_all">
      <div
        class="all-order_all__item"
        v-for="(index,key) in orders"
        :key="key"
      >
        <p class="all-order_all__itemP">
          订购号：<span class="all_all-spanB">{{index.order_sn}}</span>
          <span class="all_all-spanA">{{index.order_main_status_text}}</span>
        </p>
        <div class="all-order_all__dashi">
          <img class="all-order_all__IMG" :src="'http://xingybc.com/'+index.goods_logo_image" alt="">
          <p class="all-order_all__dasPA">{{index.goods_name}}</p>
          <p class="all-order_all__dasPB">￥{{index.total_amount}}</p>
          <p class="all-order_all__dasPC">{{index.createtime}}</p>
        </div>
        <p class="all-order_all__dasPD">
        <span class="spanC" style="background:pink" v-for="(a,b) in index.order_op_type_list" :key="b">
         <a @click="Dosome(index,key,a)"  href="javascript:;">{{a}}</a>
        </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import apiSetting from "../AXIOS/api"
  export default {
    name: "all-order_all",
    data(){
      return{
        list:[],
        userGonging:"",
        userwaitToCommit:"",
        userwaitingPayRes:"",
        orders:[]
      }
    },
    methods:{
      Dosome(index,key,a){
        if(a  == "立即抢单"){
          var order_goods_id = index.order_goods_id
          this.$axios(apiSetting.masterGrabOrder,{
            order_goods_id:order_goods_id,
          }).then(res=>{
            this.$toast(res.data.msg)
            if(res.data.msg.indexOf("成功")>=0){
              this.orders.splice(key,1)
            }
          })
        }
      }
    },
    created(){
      this.orders = JSON.parse(sessionStorage.getItem('masterGrabOrderList'))
      console.log(this.orders)
    }
  }
</script>

<style scoped>

</style>
