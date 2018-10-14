<template>
<div class="info-problem">
  <div class="he">
    <p class="info-problem-header"> 请输入您的问题：</p>
    <p class="info-problem-p">请描述你的感情状态，背景信息以及具体问题。</p>
    <textarea v-on:input="a"  id="" cols="30" rows="10" v-model="messsage"></textarea>
    <p class="info-problem-pC">{{count}}/150</p>
  </div>

  <div class="info-problem-pB">
    <p>注：仅限提出单个问题，多个问题老师会选择其中一个问题作答</p>
  </div>
  <div class="info-problem-pD">
      <p><a @click="submit" href="javascript:;">下一步</a></p>
  </div>
</div>
</template>

<script>
  import qs from  "qs"
  import apiSetting from "../AXIOS/api"
    export default {
        name: "info-problem1",
      data(){
          return {
            messsage:"",
            count:0,
            cat_id:'',
          }
      },
      methods:{
          a(){
            console.log(1)
            this.count =  this.messsage.split("").length
          },
        submit(){
          var goods_id = sessionStorage.getItem("ID")
            this.$axios(apiSetting.MasterList,{
              goods_id:goods_id
            }).then(res=>{
              console.log("-------------------------------------------------------------------------------------")
              console.log(res.data.data)
              for(var a in res.data.data.masterlist){
                res.data.data.masterlist[a].masters.gender_text = false
              }
              res.data.data.qiangda.masters.gender_text =false
              // console.log( res.data.data.masterlist[a].masters.gender_text)
              sessionStorage.setItem("MasterList",qs.stringify(res.data.data))
              sessionStorage.setItem("GoodsName",this.messsage)
              this.$router.push({path:"/simple-main/nowpay"})
            })
        }
      },
      created(){
          this.cat_id =this.$route.query.cat_id
      }
      //获取数据，切割数据，得到长度。等一些列操作
    }
</script>

<style scoped>

</style>
