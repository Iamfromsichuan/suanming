<!--轻测---》提问---》下一步---》疑问---》确认支付-->
<template>
  <div class="payorder-detale">
    <div class="payorder">
      <div class="payorder-top">
        <van-steps
          :active="active"
          active-color="#fdaebd"
        >
          <van-step>选择问题</van-step>
          <van-step>确认订单</van-step>
          <van-step>完成支付</van-step>
          <van-step>等待回复</van-step>
        </van-steps>
      </div>
      <div class="payorder-body">
        <p>订单信息</p>
        <p>我是否错过了正缘</p>
        <p>订单号 <span class="payorder-body-spanA">Q20180506120200001</span></p>
        <p class="payorder-body-pA">下单时间 <span class="payorder-body-spanB">Q20180506 12:02:02</span></p>

        <p >支付信息</p>
        <p class="payorder-body-pB">订单金额 <span class="payorder-body-spanC">￥300.00</span></p>

        <p>支付方式</p>
        <p class="payorder-body-pD" v-on:click="fucus">
          <img v-if="show" class="payorder-body-IMG" src="../../static/images/dashi/选中-FDAEBD.png"/>
          <img src="../../static/images/dashi/微信支付.png"/><span class="payorder-body-spanE">微信支付</span> <span class="payorder-body-spanD"></span>
        </p>
      </div>
      <div class="payorder-bOM">
        <p><router-link to="/simple-main/dashiuserchat">确认支付</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "payorder",
    data(){
      return{
        active:1,
        show:false
      }
    },
    methods:{
      fucus(){
        this.show = !this.show
      }
    }
  }
</script>

<style scoped>

</style>
