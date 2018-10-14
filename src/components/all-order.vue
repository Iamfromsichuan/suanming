<!--主页 我的选项 -- 查看全部   选项  跳转后--全部订单 ---页面-->
<template>
  <div class="all-order">
    <div class="all-order-nav">
      <van-tabs v-model="active" @click="onClick">
        <van-tab v-for="(index,key) in items" :title="index.a" :key="key" >
        </van-tab>
      </van-tabs>
    </div>
    <div class="all-order-item">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "all-order",
        data(){
          return{
            active:2,
            items:[
              {
                a:"待付款",
                b:"/simple-main/allorder/waitpay"
              },
              {
                a:"进行中",
                b:"/simple-main/allorder/starting"
              },
              {
                a:"待评价",
                b:"/simple-main/allorder/waitcommit"
              },
              {
                a:"全部",
                b:"/simple-main/allorder/all"
              }
            ]
          }
        },
        methods:{
          onClick(index, title) {
            this.$router.replace({path:this.items[index].b})
          }
        },
        created(){
          if(this.$route.path.indexOf("/simple-main/allorder/waitcommit")>=0){
            this.active = 2
          }else if(this.$route.path.indexOf("/simple-main/allorder/starting")>=0){
            this.active = 1
          }else if(this.$route.path.indexOf("/simple-main/allorder/waitpay")>=0){
            this.active = 0
          }else {
            this.active = 3
          }
        }
    }
</script>

<style scoped>

</style>
