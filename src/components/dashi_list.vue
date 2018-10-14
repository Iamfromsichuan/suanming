<template>
  <div class="divabb">
    <p class="now-pay-header"><span>人气最高</span>
      <span>价格<img class="now-pay-imgA" src="../../static/images/simpleMain/筛选-未选中.png" /></span>
      <span>筛选<img class="now-pay-imgB" src="../../static/images/simpleMain/升序-未选中 - 副本.png"/></span
      ></p>

    <div class="now-pay-answer">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="all"
             v-for="(index,key) in hotMasters"
             :key="key"
             @click="submit(index,key)"
        >
          <div class="now-answer-dashi">
            <span class="now-answer-spanB">{{index.master_price}}</span>
            <span class="now-answer-spanZ">￥400.00</span>
            <p><span class="now-answer-spanA">{{index.masters.nickname}}</span></p>
            <p class="now-answer-p2">
              <van-rate v-model="index.masters.avg_rank" color="pink" />
              <span>{{index.masters.avg_rank+'.00'}}</span>
            </p>
            <p class="ppppp">
            <span
              class="now-answer-spanG"
              v-for="(dd,b) in batt[key]"
              :key="b"
            >
              {{dd}}
            </span>
            </p>
          </div>
          <p class="now-answer-spanF">擅长解决学业和情感问题，自幼见邻家老者研习五行传统之道，长成之年授得其祖十纸古卷....</p>
          <p class="now-answer-p3">
            <span class="now-answer-spanC"><img src="../../static/images/simpleMain/待评价.png" /> {{index.masters.comment_count}}个问答</span>
            <span class="now-answer-spanD"><img src="../../static/images/simpleMain/订单.png"/> {{index.masters.sales_sum}}人查看</span >
          </p>
          <img class="now-answer-dashimg" :src="'http://xingybc.com'+index.masters.avatar" alt="">
        </div>
      </van-pull-refresh>

    </div>
  </div>
</template>

<script>
  import qs from "qs"
  import Sort from "../Unitl/SortEveryone"
  import apiSetting from "../AXIOS/api";
    export default {
        name: "dashi_list",
      data(){
        return{
          hotMasters:"",
          batt:"",
          value:"",
          count: 0,
          isLoading: false,
          page:"",
          cat_id:""
        }
      },
      methods:{
        submit(index,key){
          var cat_id = this.cat_id
          var master_id = index.master_id
          this.$axios(apiSetting.masterCatIndex,{
            cat_id:cat_id,
            master_id:master_id
          }).then(res=>{
            sessionStorage.setItem("masterCatIndex",JSON.stringify(res.data.data))
            sessionStorage.setItem("mIndex",JSON.stringify(res.data.data))

            this.$router.push({
              path:"/simple-main/immediately"
            })
          })

        },
        onRefresh() {
          var cat_id = this.$route.query.a
          this.page++
          var that = this
          var page = this.page
          var basecatid = sessionStorage.getItem("basecatid")
          this.$axios(apiSetting.catMasterList,{
            basecatid:basecatid,
            cat_id:cat_id,
            page:page
          }).then(res=>{
            var masterlist = res.data.data.masterlist
            that.hotMasters = that.hotMasters.concat(masterlist)
            that.isLoading = false;
          })
        }
      },
      created(){
        this.hotMasters= "";
        this.cat_id = this.$route.query.a
        this.hotMasters = JSON.parse(sessionStorage.getItem("listL"))
        console.log( this.hotMasters)
        this.batt=[]
        var _that = this
        for(let b=0;b<this.hotMasters.length;b++){
          this.batt.push(this.hotMasters[b].masters.divination_ids_text.split(","))
        }
      }
    }
</script>

<style scoped>

</style>
