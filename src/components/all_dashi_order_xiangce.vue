<!--&lt;!&ndash;大师的全部订单界面&ndash;&gt;-->
<!--<template>-->
<!--<div class="all-order_all">-->
<!--<div-->
<!--class="all-order_all__item"-->
<!--v-for="(index,key) in orders"-->
<!--:key="key"-->
<!--&gt;-->
<!--<p class="all-order_all__itemP">-->
<!--订购号：<span class="all_all-spanB">{{index.id}}</span>-->
<!--<span class="all_all-spanA">{{index.tip}}</span>-->
<!--</p>-->
<!--<div class="all-order_all__dashi">-->
<!--<img class="all-order_all__IMG" :src="index.srcImg" alt="">-->
<!--<p class="all-order_all__dasPA">{{index.itme}}</p>-->
<!--<p class="all-order_all__dasPB">{{index.money}}</p>-->
<!--<p class="all-order_all__dasPC">{{index.time}}</p>-->
<!--</div>-->
<!--<p class="all-order_all__dasPD">-->
<!--<span class="spanA" v-bind:style="index.color3"><router-link to="">{{index.tent3}}</router-link></span>-->
<!--<span class="spanB" v-bind:style="index.color1"><router-link to="">{{index.tent1}}</router-link></span>-->

<!--</p>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: "alldashiorder",-->

<!--data(){-->
<!--return{-->
<!--a:'',-->
<!--b:'',-->
<!--c:'',-->
<!--d:'',-->
<!--orders:[-->
<!--{-->
<!--id:"Q2018050612020000001",-->
<!--tip:"待评价",-->
<!--srcImg:"../../static/images/dashi/1.png",-->
<!--itme:"大师1-事业财运",-->
<!--money:"￥300.00",-->
<!--time:"2018-05-06 12:02:02",-->
<!--tent1:"",-->
<!--tent2:"查看记录",-->
<!--tent3:"",-->
<!--color1:"",-->
<!--color2:"background-color:pink;",-->
<!--color3:""-->
<!--},-->
<!--{-->
<!--id:"Q2018050612020000001",-->
<!--tip:"进行中",-->
<!--srcImg:"../../static/images/dashi/1.png",-->
<!--itme:"大师1-事业财运",-->
<!--money:"￥300.00",-->
<!--time:"2018-05-06 12:02:02",-->
<!--tent1:"",-->
<!--tent2:"去回复",-->
<!--tent3:"",-->
<!--color1:"",-->
<!--color2:"background-color:pink;",-->
<!--color3:""-->
<!--},-->
<!--{-->
<!--id:"Q2018050612020000001",-->
<!--tip:"进行中",-->
<!--srcImg:"../../static/images/dashi/1.png",-->
<!--itme:"大师1-事业财运",-->
<!--money:"￥300.00",-->
<!--time:"2018-05-06 12:02:02",-->
<!--tent1:"",-->
<!--tent2:"去回复",-->
<!--tent3:"",-->
<!--color1:"",-->
<!--color2:"background-color:pink;",-->
<!--color3:""-->
<!--},-->
<!--{-->
<!--id:"Q2018050612020000001",-->
<!--tip:"进行中",-->
<!--srcImg:"../../static/images/dashi/1.png",-->
<!--itme:"大师1-事业财运",-->
<!--money:"￥300.00",-->
<!--time:"2018-05-06 12:02:02",-->
<!--tent1:"",-->
<!--tent2:"联系用户",-->
<!--tent3:"",-->
<!--color1:"",-->
<!--color2:"background-color:pink;",-->
<!--color3:""-->
<!--},-->
<!--{-->
<!--id:"Q2018050612020000001",-->
<!--tip:"已完成",-->
<!--srcImg:"../../static/images/dashi/1.png",-->
<!--itme:"大师1-事业财运",-->
<!--money:"￥300.00",-->
<!--time:"2018-05-06 12:02:02",-->
<!--tent1:"",-->
<!--tent2:"查看记录",-->
<!--tent3:"",-->
<!--color1:"",-->
<!--color2:"background-color:pink;",-->
<!--color3:""-->
<!--},-->
<!--{-->
<!--id:"Q2018050612020000001",-->
<!--tip:"待评价",-->
<!--srcImg:"../../static/images/dashi/1.png",-->
<!--itme:"大师1-事业财运",-->
<!--money:"￥300.00",-->
<!--time:"2018-05-06 12:02:02",-->
<!--tent1:"",-->
<!--tent2:"删除订单",-->
<!--tent3:"",-->
<!--color1:"",-->
<!--color2:"background-color:pink;",-->
<!--color3:""-->
<!--}-->
<!--]-->
<!--}-->
<!--},-->
<!--created(){-->
<!---->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
<template>
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
      }
    },
    methods:{
      Dosome(index,key,a){
        //当点击得按钮是“进入交流”，那我们就拉取相关聊天数据得基础信息，还有聊天得历史数据，再进去到聊天得界面，
        if(a == "进入交流"||a == "查看记录"){
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
              this.$router.push({
                path:"/simple-main/dashiuserchat"
              })
            })
          })
        } else if(a == "去付款"){
          var basecatid = sessionStorage.getItem("basecatid")
          var order_id = index.order_id
          this.$axios(apiSetting.orderpayIndex,{
            basecatid:basecatid,
            order_id:order_id
          }).then(res=>{
            console.log(res.data)
            sessionStorage.setItem("orderpayIndex",JSON.stringify(res.data.data))
            this.$router.push({
              path:"/simple-main/payorder"
            })
          })
        }else if(a == "删除订单"){
          console.log(index)
          var basecatid = sessionStorage.getItem("basecatid")
          var order_id = index.order_id
          var order_goods_id = index.order_goods_id
          var status = index.order_main_status_text
          if(status == "查看记录"){
            this.$axios(apiSetting.delCancelledOrder,{
              basecatid:basecatid,
              order_id:order_id
            }).then(res=>{
              alert(res.data.msg)
              // sessionStorage.setItem("orderpayIndex",JSON.stringify(res.data.data))
              // this.$router.push({
              //   path:"/simple-main/payorder"
              // })
            })
          }else if(status == "已完成"){
            this.$axios(apiSetting.delCompletedOrder,{
              basecatid:basecatid,
              order_goods_id:order_goods_id
            }).then(res=>{
              console.log(res.data)
              // sessionStorage.setItem("orderpayIndex",JSON.stringify(res.data.data))
              // this.$router.push({
              //   path:"/simple-main/payorder"
              // })
            })
          }
        }else if(a == "取消订单"){
          this.$axios(apiSetting.cancelOrder,{
            order_id:index.order_id
          }).then(res=>{
            alert(res.data.msg)
          })
        }
      }
    },
    created(){
      var list =[]
      var masterXiangceOrder=[]
      var userwaitToCommit=[]
      var userwaitingPayRes=[]
      for(let i =0;i<JSON.parse(sessionStorage.getItem("masterXiangceOrder")).orders.length;i++ ){
        masterXiangceOrder.push(JSON.parse(sessionStorage.getItem("masterXiangceOrder")).orders[i])
      }
      // for(let i =0;i<JSON.parse(sessionStorage.getItem("userwaitToCommit")).data.data.orders.length;i++ ){
      //   userwaitToCommit.push(JSON.parse(sessionStorage.getItem("userwaitToCommit")).data.data.orders[i])
      // }
      // for(let i =0;i<JSON.parse(sessionStorage.getItem("userwaitingPayRes")).data.data.orders.length;i++ ){
      //   userwaitingPayRes.push(JSON.parse(sessionStorage.getItem("userwaitingPayRes")).data.data.orders[i])
      // }
      //  this.list =list.concat(userGonging,userwaitToCommit,userwaitingPayRes)
      this.orders = masterXiangceOrder
      console.log(this.list)
    }
  }
</script>

<style scoped>

</style>
