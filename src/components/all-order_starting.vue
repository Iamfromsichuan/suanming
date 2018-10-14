<template>
<div class="all-order_all">
  <div
    class="all-order_all__item"
    v-for="(index,key) in list"
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
      <span style="background:pink" v-for="(a,b) in index.order_op_type_list" :key="b">
        <a @click="Dosome(index,key,a)"  href="javascript:;">{{a}}</a>
      </span>
    </p>
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
        //当点击得按钮是“进入交流”，那我们就拉取相关聊天数据得基础信息，还有聊天得历史数据，再进去到聊天得界面，
        if(a == "进入交流" ){
          // console.log(a)
          // console.log(index)
          // console.log(key)
          //发送请求，获取当前订单得状态
          this.$axios(apiSetting.chatIndex,{
            order_goods_id:index.order_goods_id
          }).then(res=>{
            sessionStorage.setItem("Checkend_order_goods_id",index.order_goods_id)
            sessionStorage.setItem("chatIndexRes",JSON.stringify(res.data.data))
            var chatIndexRes = JSON.parse(sessionStorage.getItem("chatIndexRes"))
            //拉取聊天记录
            this.$axios(apiSetting.getHis,{
              group_id:chatIndexRes.group_id
            }).then(res=>{
              sessionStorage.setItem("getHis",JSON.stringify(res.data))
              sessionStorage.setItem("type",a)
              this.$router.push({
                path:"/simple-main/dashiuserchat"
              })
            })
          })
        }else if(a=="去完善信息"){
          console.log(index)
          sessionStorage.setItem("OrderDetaileID",index.order_id)
         this.$router.push({
           path:"/simple-main/submitOrder"
         })
        }
      }
    },
    created(){
      var list =[]
      var userGonging=[]
      var userwaitToCommit=[]
      var userwaitingPayRes=[]
      for(let i =0;i<JSON.parse(sessionStorage.getItem("userGonging")).data.data.orders.length;i++ ){
        userGonging.push(JSON.parse(sessionStorage.getItem("userGonging")).data.data.orders[i])
      }
      this.list = userGonging
      console.log(userGonging)
    }
  }
</script>

<style scoped>

</style>
