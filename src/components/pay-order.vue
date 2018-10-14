<!--轻测---》提问---》下一步---》疑问---》确认支付-->
<template>
  <div class="payorder">
    <div class="payorder-top">
      <van-steps
        :active="active"
        active-color="#fdaebd"
      >
        <van-step>选择问题</van-step>
        <van-step>确认订单</van-step>
        <van-step>完成支付</van-step>
        <van-step>填写信息</van-step>
        <van-step>等待回复</van-step>
      </van-steps>
    </div>
    <div class="payorder-body">
      <p>订单信息</p>
      <p>
        {{GoodsName}}
      </p>
      <p>订单编号 <span class="payorder-body-spanA">{{orderpayIndex.order_sn}}</span></p>
      <p class="payorder-body-pA">下单时间 <span class="payorder-body-spanB">{{orderpayIndex.createtime}}</span></p>

      <p >支付信息</p>
      <p class="payorder-body-pB">订单金额 <span class="payorder-body-spanC">￥{{ orderpayIndex.total_amount }}</span></p>

      <p>支付方式</p>
      <p class="payorder-body-pD" v-on:click="fucus">
        <img v-if="show" class="payorder-body-IMG" src="../../static/images/dashi/选中-FDAEBD.png"/>
        <img src="../../static/images/dashi/微信支付.png"/><span class="payorder-body-spanE">微信支付</span> <span class="payorder-body-spanD"></span>
      </p>
    </div>
    <div class="payorder-bOM">
      <p><a @click="payOrder" href="javascript:;">确认支付</a></p>
    </div>
  </div>
</template>

<script>
  import formatDateTime from "../Unitl/data"
  import apiSetting from "../AXIOS/api"
    export default {
        name: "payorder",
      data(){
          return{
            msg:"30",
            active:1,
            show:false,
            GoodsName:"",
            OrderDetaile:"",
            date:"",
            OrderId:"",
            orderpayIndex:"",
            showTenda:""
          }
      },
      methods:{
        fucus(){
         this.show = !this.show
          if(this.show){
            this.showTenda = JSON.parse(sessionStorage.getItem("orderpayIndex")).payment[0].code
          }else {
            this.showTenda =""
          }
        },
        getParams(){
          // 取到路由带过来的参数
          this.msg = this.$route.query.nowPayTotal
        },
        payOrder(){
          var pay_code = this.showTenda
          var order_id = this.OrderId
          console.log(order_id)
          //notify_simulation接口用来模拟成功之后
          this.$axios(apiSetting.notify_simulation,{
            pay_code:pay_code,
            order_id:order_id
          }).then(res=>{
            var code = res.data.code
              if(code == 0){
                this.$toast('订单不存在，请重新提问');
                const toast = this.$toast.loading({
                  duration: 0,       // 持续展示 toast
                  forbidClick: true, // 禁用背景点击
                  loadingType: 'spinner',
                  message: '订单不存在，三秒后跳转到轻测主页，请重新选择问题'
                });

                let second = 3;
                const timer = setInterval(() => {
                  second--;
                  if (second) {
                    toast.message = `订单不存在，三秒后跳转到轻测主页，请重新选择问题倒计时 ${second} 秒`;
                  } else {
                    clearInterval(timer);
                    this.$toast.clear();
                    this.$router.push({
                      path:"/index/nav-simple"
                    })
                  }
                }, 1000);

              }else {
                this.$router.push({
                  path:"/simple-main/submitOrder"
                })
              }
            }
          )
        }
      },
      created(){
        this.msg = this.$route.query.nowPayTotal
        this.GoodsName = sessionStorage.getItem("GoodsName")
        var date = JSON.parse(sessionStorage.getItem("OrderDetaile")).time*1000
        this.date = formatDateTime(date)
        this.OrderId = JSON.parse(sessionStorage.getItem("OrderDetaile")).data.order_id
        this.orderpayIndex = JSON.parse(sessionStorage.getItem("orderpayIndex"))
        console.log( this.orderpayIndex.payment[0].code)

      },
      watch: {
        // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
        '$route': 'getParams'
      }
    }
</script>

<style scoped>

</style>
