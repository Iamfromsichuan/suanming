<template>
<div class="all-qianbao">
  <div class="all-qianbao-nav">
    <van-tabs @click="onClick" v-model="active">
      <van-tab v-for="(index,key) in lists" :title="index.a" :key="key">
      </van-tab>
    </van-tabs>
  </div>
  <div class="alldashiqianbaoall">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div
        v-show="show3"
        class="alldashiqianbaoall-item"
        v-for="(index,key) in orders"
        :key="key"
      >
        <p class="alldashiqianbaoall-item-PA">{{index.title}}</p>
        <p class="alldashiqianbaoall-item-PB">{{index.createtime}}  <span :class="{'lala':true,'shou':index.title.indexOf('订单')>=0?true:false,'chu':index.title.indexOf('订单')>=0?false:true}">￥{{index.amount}}</span></p>
      </div>
    </van-pull-refresh>

  </div>
</div>
</template>

<script>
  import apiSetting from "../AXIOS/api"
    export default {
        name: "all_dashi_qianbao",
        data(){
          return{
            active:2,
            isLoading:"",
            show1:"",
            show2:"",
            show3:true,
            lists:[
              {
                a:"收入",
                b:"/simple-main/dashiqianbao/dashiqianbaoIncome"
              },
              {
                a:"支出",
                b:"/simple-main/dashiqianbao/dashiqianbaoExpenditure"
              },
              {
                a:"全部",
                b:"/simple-main/dashiqianbao/dashiqianbaoAll"
              }
            ],
            orders:"",
            count1:1,
            count2:1,
            count3:1
          }
        },
      methods:{
        onRefresh() {
          var page

          var title = sessionStorage.getItem("title")
          if(title == "支出"){
            this.count1++;
            page =  this.count1
            this.$axios(apiSetting.getAccountOutList,{
              page:page
            }).then(res=>{
              this.orders = this.orders.concat(res.data.data.accounts)
              this.isLoading = false;
            })
          }
          if(title == "收入"){
            this.count2++;
            page =  this.count2
            this.$axios(apiSetting.getAccountOutList,{
              page:page
            }).then(res=>{
              this.orders = this.orders.concat(res.data.data.accounts)
              this.isLoading = false;
            })
          }
          if(title == "全部"){
            this.count3++;
            page =  this.count3
            this.$axios(apiSetting.getAccountOutList,{
              page:page
            }).then(res=>{
              this.orders = this.orders.concat(res.data.data.accounts)
              this.isLoading = false;
            })
          }
        },
        onClick(index, title){
          var orders = JSON.parse(sessionStorage.getItem("getAccountAllList")).accounts
          var that = this
          if(title == "支出"){
            var a =[]
            for(let i=0;i<orders.length;i++){
              if(orders[i].title.indexOf('订单') < 0){
                  a.push(orders[i])
              }
            }
            this.orders = a;
            if(!this.orders){
              this.show3 = false
            }
            sessionStorage.setItem("title",title)
          }
          if(title == "收入"){
            var a =[]
            for(let i=0;i<orders.length;i++){
              if(orders[i].title.indexOf('订单') >= 0){
                a.push(orders[i])
              }
            }
            this.orders = a;
            if(!this.orders){
              this.show3 = false
            }
            sessionStorage.setItem("title",title)
          }

          if(title == "全部"){
            this.orders = JSON.parse(sessionStorage.getItem("getAccountAllList")).accounts
            sessionStorage.setItem("title",title)
          }
        }
      },
      created(){
          this.orders = JSON.parse(sessionStorage.getItem("getAccountAllList")).accounts
        console.log(this.orders)
        sessionStorage.setItem("title","全部")
      }
    }
</script>

<style scoped>
  .shou{
    color: pink;
  }
  .chu{
    color: #000;
  }
</style>
