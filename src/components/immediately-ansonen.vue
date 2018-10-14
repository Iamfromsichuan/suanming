<!--大师主页。大师个人信息详细介绍-->
<template>
  <div class="immediately">
    <div class="dashi-detailed">
      <div class="dashi-detailedZindex">
        <p class="dashi-detailedZindexPB">
          <span
            class="spanA"
            v-for="(a,b) in mastertags_ids_text"
            :key="b"
          >
            <img class="dashi-detailedZiImgA"  src="../../static/images/simpleMain/home-tips.png" />{{a}}
          </span>
        </p>
        <p class="dashi-detailedZindexPC">
          擅长数学
        </p>
        <p class="dashi-detailedZindexPD">
          <span
            class="dashi-detaile-span"
            v-for="(c,d) in divination_ids_text"
            :key="d"
          >
            {{c}}
          </span>
        </p>
      </div>
      <div class="center-intro">
        <img class="center-intro-img" :src="'http://xingybc.com'+masterL.intro_image"/>
        <p class="dashi-detailed-flexp">
          {{masterL.nickname}}
          <span class="dashi-detailed-flexSpanA"><img src="../../static/images/dashi/完成勾选.png" />平台认证</span>
          <span class="dashi-detailed-flexSpanA"><img src="../../static/images/dashi/完成勾选.png"/>交易担保</span>
          <span class="dashi-detailed-flexSpanA-span"><a @click="toDshiIndex" href="javascript:;">主页 ></a></span>
        </p>
      </div>
      <div class="intro-dashi">
        <p>{{masterL.intro_content}}</p>
        <p class="intro-dashi-p">
          <span class="intro-dashi-A">
            <img src="../../static/images/simpleMain/订单.png"/>{{masterL.sales_sum}}解答
          </span>
          <span class="intro-dashi-B">
            <img src="../../static/images/simpleMain/待评价.png"/>{{masterL.comment_count}}评价
          </span>
          <span class="intro-dashi-C">
            <img src="../../static/images/simpleMain/时效.png"/>{{masterL.response_avg}}分钟
          </span>
        </p>
      </div>
      <div class="intro-dashi-detaile">
        <p class="intro-dashi-detaileP">服务详情</p>
        <p>
          {{masterL.service_intro}}
        </p>
      </div>
      <div class="dashi-detailed-commit">
        <p class="dashi-detailed-commitPA">
          评论反馈 （{{masterL.comment_count}}）
        </p>
        <p class="dashi-detailed-commitPB">
          咨询质量：
          <van-rate v-model="value" color="#fe7467" />
          <span>5.00</span>
        </p>
        <p class="dashi-detailed-commitPB">
          服务态度：
          <van-rate v-model="value" color="#fe7467" />
          <span>5.00</span>
        </p>
        <p class="dashi-detailed-commitPB">
          回复速度：
          <van-rate v-model="value" color="#fe7467" />
          <span>5.00</span>
        </p>
        <div
          class="dashi-commit-detaled"
          v-show="masterL.commnts.length>0"
          v-for="(index,key) in masterL.commnts"
          :key="key"
        >
          <p class="dashi-commit-detaledPA">{{index.nickname}}</p>
          <p class="dashi-commit-detaledPB">{{index.createtime}}</p>
          <p class="dashi-commit-detaledPC">{{index.content}}</p>
          <img class="dashi-commit-detaledImg"  :src="'http://xingybc.com'+index.avatar" alt="">
        </div>
        <p class="dashi-commit-detaledPD">
          <a href="javascript:;" @click="getCommmit">查看全部{{masterL.comment_count}}条评价 ></a>
        </p>
      </div>
      <div class="dashi-detailed-bottom">
        <p>
          <a @click="toPay" href="javascript:;">立即购买</a>
          <span>￥{{masterL.master_price}}</span>
          <span class="dashi-detailed-bottomSpan"><img src="../../static/images/ORDER/时间 钟表.png"/>{{masterL.xiangce_timelimt}}分钟内响应</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import formData from "../Unitl/data"
  import apiSetting from "../AXIOS/api"
  export default {
    name: "dashi-detailed",
    data(){
      return{
        number:"2000",
        show:true,
        masterL:"",
        mastertags_ids_text:"",
        divination_ids_text:"",
        users:[
          {
            username:"林雨",
            time:"2018-05-06",
            commit:"用户默认好评",
            srcImg:"../../static/images/dashi/用户头像.jpeg"
          },
          {
            username:"林雨",
            time:"2018-05-06",
            commit:"用户默认好评",
            srcImg:"../../static/images/dashi/用户头像.jpeg"
          }
        ],
        value:5
      }
    },
    methods:{
      toPay(){
        var cat_id = this.masterL.cat_id
        var master_id = this.masterL.master_id
        var basecatid = sessionStorage.getItem("basecatid")
        var _that = this
        this.$axios(apiSetting.submitOrder,{
          cat_id:cat_id,
          master_id:master_id,
          basecatid:basecatid
        }).then(res=>{
          var order_id = res.data.data.order_id
          _that.$axios(apiSetting.orderpayIndex,{
            order_id:order_id
          }).then(res=>{
            sessionStorage.setItem("orderpayIndex",JSON.stringify(res.data.data))
            _that.$router.push({
              path:"/simple-main/payorder"
            })
          })
        })
      },
      //跳转到大师的主页
      toDshiIndex(){
        var master_id = this.masterL.master_id
        this.$axios(apiSetting.masterIndex,{
          master_id:master_id
        }).then(res=>{
          sessionStorage.setItem("masterIndex",JSON.stringify(res.data.data))
          this.$router.push({
            path:"/simple-main/dashidetailed"
          })
        })
      },
      getCommmit(){
        var master_id = this.masterL.master_id
        var basecatid = sessionStorage.getItem("basecatid")
        this.$axios(apiSetting.getXiangceCommentList,{
          master_id:master_id,
          basecatid:basecatid
        }).then(res=>{
          sessionStorage.setItem("getXiangceCommentList",JSON.stringify(res.data.data))
          this.$router.push({
            path:"/simple-main/allcommit",
            query:{
              master_id:master_id,
            }
          })
        })
      }
    },
    created(){
      this.masterL = JSON.parse(sessionStorage.getItem("masterCatIndex"))
      var _that = this
      this.mastertags_ids_text = this.masterL.mastertags_ids_text.split(",")
      this.divination_ids_text = this.masterL.divination_ids_text.split(",")
      for(let i=0;i<this.masterL.commnts.length;i++){
        this.masterL.commnts[i].createtime = formData(_that.masterL.commnts[i].createtime)
      }
    }
  }
</script>

<style scoped>

</style>
