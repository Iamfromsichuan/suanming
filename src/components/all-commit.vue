<!--全部得评论页面-->
<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div
        class="simpleMain-commit"
        v-for="(index ,key) in getXiangceCommentList"
        :key="key"
      >
        <div class="simpleMain-commit-tent">
          <p class="simpleMain-tent-pa">{{index.nickname}}</p>
          <p >{{index.createtime}}</p>
          <p class="simpleMain-tent-p">{{index.content}}</p>
          <img :src="'http://xingybc.com'+index.user.avatar" alt="" class="simpleMain-tent-img">
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
    export default {
      name: "all-commit",
      data(){
          return {
            isLoading:false,
            page:1,
            getXiangceCommentList:"",
            zzz:{
              number1:2000,
              number2:1800,
              cont:2000,
              commits:[
                {
                  imgsrc:"../../static/images/dashi/用户头像.jpeg",
                  username:"林雨",
                  time:"2018-05-06",
                  conmitContent:"用户默认好评"
                },
                {
                  imgsrc:"../../static/images/dashi/用户头像.jpeg",
                  username:"林雨",
                  time:"2018-05-06",
                  conmitContent:"时辰是午时，可能选错了，老师，麻烦看一下，结果有变化吗"
                },
                {
                  imgsrc:"../../static/images/dashi/用户头像.jpeg",
                  username:"林雨",
                  time:"2018-05-06",
                  conmitContent:"可以，" +
                  "很好"
                },
                {
                  imgsrc:"../../static/images/dashi/用户头像.jpeg",
                  username:"林雨",
                  time:"2018-05-06",
                  conmitContent:"可以，" +
                  "很好"
                },
                {
                  imgsrc:"../../static/images/dashi/用户头像.jpeg",
                  username:"林雨",
                  time:"2018-05-06",
                  conmitContent:"可以，" +
                  "很好"
                },
                {
                  imgsrc:"../../static/images/dashi/用户头像.jpeg",
                  username:"林雨",
                  time:"2018-05-06",
                  conmitContent:"可以，" +
                  "很好"
                },
                {
                  imgsrc:"../../static/images/dashi/用户头像.jpeg",
                  username:"林雨",
                  time:"2018-05-06",
                  conmitContent:"可以，" + "很好"
                },
                {
                  imgsrc:"../../static/images/dashi/用户头像.jpeg",
                  username:"林雨",
                  time:"2018-05-06",
                  conmitContent:"可以，" +
                  "很好"
                },
                {
                  imgsrc:"../../static/images/dashi/用户头像.jpeg",
                  username:"林雨",
                  time:"2018-05-06",
                  conmitContent:"可以，" + "很好"
                }
              ]
            }
          }
      },
      created(){
        this.getXiangceCommentList = JSON.parse(sessionStorage.getItem("getXiangceCommentList")).commnts
      },
      methods:{
        onRefresh(){
          this.page++
          var page = this.page
          var master_id = this.masterL.master_id
          var basecatid = sessionStorage.getItem("basecatid")
          this.$axios(apiSetting.getXiangceCommentList,{
            master_id:master_id,
            basecatid:basecatid,
            page:page
          }).then(res=>{

            this.getXiangceCommentList = this.getXiangceCommentList.concat(res.data.data.commnts)
            this.isLoading = false;
          })
        }
      }
    }
</script>

<style scoped>

</style>
