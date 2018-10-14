<!--大师主页。大师个人信息详细介绍-->
<template>
    <div class="dashi-detailed">
      <div class="dashi-detailed-header">
        <img class="dashi-detailed-headerimg" :src="'http://xingybc.com'+masterIndex.avatar"/>
        <h3>{{masterIndex.nickname}}</h3>
        <p class="dashi-detailed-flexp">
          <span class="dashi-detailed-flexSpanA">平台认证</span>
          <span class="dashi-detailed-flexSpanA">交易担保</span>
        </p>
        <p class="dashi-detailed-flexp">
          <span class="dashi-detailed-flexSpanB">{{masterIndex.sales_sum}}</span>
          <span class="dashi-detailed-flexSpanB">{{masterIndex.comment_count}}</span>
          <span class="dashi-detailed-flexSpanB">{{masterIndex.response_avg}}</span>
          <span class="dashi-detailed-flexSpanB">解答数</span>
          <span class="dashi-detailed-flexSpanB">评价数</span>
          <span class="dashi-detailed-flexSpanB">平均回复</span>
        </p>
      </div>
      <div class="dashi-detailedZindex">
        <p class="dashi-detailedZindexPA">
          从业年限
          <span>12年</span>
        </p>
        <p class="dashi-detailedZindexPB">
          <span class="spanA" > <img class="dashi-detailedZiImgA"  src="../../static/images/simpleMain/home-tips.png" />佛道双修</span>
          <span class="spanA" > <img class="dashi-detailedZiImgA"  src="../../static/images/simpleMain/home-tips.png" />佛道双修</span>
        </p>
        <p class="dashi-detailedZindexPC">
          擅长数学
        </p>
        <p class="dashi-detailedZindexPD">
          <span class="dashi-detaile-span dashi">{{divination_ids_text[0]}}</span>
          <span class="dashi-detaile-span">{{divination_ids_text[1]?divination_ids_text[1]:""}}</span>
          <span v-show="divination_ids_text[2]" class="dashi-detaile-span">{{divination_ids_text[2]?divination_ids_text[2]:""}}</span>
        </p>
        <img class="dashi-detailed-bomImg" src="../../static/images/simpleMain/认证图标2-FDAEBD.png" />
      </div>
      <div class="center-intro">
        <p class="center-intro-pA">个人介绍</p>
        <img class="center-intro-img" src="../../static/images/simpleMain/大师个人介绍图片.jpg"/>
        <div class="center-intro-fangp">
          {{masterIndex.intro_content}}
        </div>
      </div>
      <div class="dashi-detailed-commit">
        <p class="dashi-detailed-commitPA">
          评论反馈 （{{masterIndex.comment_count}}）
        </p>
        <p class="dashi-detailed-commitPB">
          咨询质量：
          <van-rate v-model="value1" color="pink"/>
          <span>{{masterIndex.goods_rank}}</span>
        </p>
        <p class="dashi-detailed-commitPB">
          服务态度：
          <van-rate v-model="value2" color="pink"/>
          <span>{{masterIndex.service_rank}}</span>
        </p>
        <p class="dashi-detailed-commitPB">
          回复速度：
          <van-rate v-model="value3" color="pink" />
          <span>{{masterIndex.deliver_rank}}</span>
        </p>
        <div
          class="dashi-commit-detaled"
          v-for="(index,key) in masterIndex.commnts"
          :key="key"
        >
          <p v-show="masterIndex.commnts>0" class="dashi-commit-detaledPA">{{index.nickname}}</p>
          <p v-show="masterIndex.commnts>0" class="dashi-commit-detaledPB">{{index.createtime}}</p>
          <p v-show="masterIndex.commnts>0" class="dashi-commit-detaledPC">{{index.content}}</p>
          <img v-show="masterIndex.commnts>0" class="dashi-commit-detaledImg"  :src="'http://xingybc.com'+index.user.avatar" alt="">
        </div>
        <p class="dashi-commit-detaledPD">
          <a @click="ToNext" href="javascript:;">查看全部{{masterIndex.comment_count}}条评价 ></a>
        </p>
      </div>
      <div class="dashi-detailed-bottom">
        <p @click.stop="GetDshiD">
          <a href="javascript:;" @click.stop="GetDshiD($event)">{{bab}}</a>
        </p>
      </div>
      <div id="lalabom">
        <van-popup v-model="show" @click-overlay="change" position="bottom" :close-on-click-overlay="true" :overlay="true">
          <ul>
            <li @click="dala($event,a)" style="color: #000;" v-for="(a,b) in getMasterPrice.xiangcePriceList" :key="b">
              <span>{{a.cat_name}}</span>
              <span>{{a.master_price}}</span>
            </li>
          </ul>
        </van-popup>
      </div>
    </div>
</template>

<script>
  import apiSetting from "../AXIOS/api"
    export default {
        name: "dashi-detailed",
      data(){
          return{
            bab:"购买TA得服务",
            inShow:false,
            masterIndex:"",
            number:"2000",
            getMasterPrice:"",
            show:false,
            value1:5,
            value2:5,
            value3:5,
            B:false,
            color:"#ffffff",
            _that :'',
            showD:true,
            aObj:'',
            n:'',
            //大师特长是个字符串，切割开来遍历
            divination_ids_text:"",
            //大师印象是个字符串，切割开遍历
            mastertags_ids_text:"",
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
            ]
          }
      },
      methods:{
        change(){
          this.bab ="购买TA得服务"
          this.B = false
        },
        ToNext(){
          var master_id = this.masterIndex.master_id
          var basecatid = sessionStorage.getItem("basecatid")
          this.$axios(apiSetting.getXiangceCommentList,{
            master_id:master_id,
            basecatid:basecatid,
          }).then(res=>{
            sessionStorage.setItem("getXiangceCommentList",JSON.stringify(res.data.data))
            this.$router.push({
              path:'/simple-main/allcommit'
            })
            console.log(res)
            this.isLoading = false;
          })

        },
        dala($event,a){
          this.aObj = {
            goods_id: a.xiangceprice_id,
            goods_name: a.cat_name,
            master_ids: a.master_id,
            cat_id:a.cat_id
          }
          if(this._that){
            if($event.currentTarget!=this._that){
              this._that.style.color = '#000'
              $event.currentTarget.style.color = 'pink'
              this._that = $event.currentTarget
            }
          }else {
            this._that = $event.currentTarget
            $event.currentTarget.style.color = 'pink'
            this._that = $event.currentTarget
            console.log(this._that)
            this.inShow = true
            this.bab = "购买TA得服务"
            this.color = "#ffffff"
          }
        },
        lada(){
          this.inShow = false
        },
        GetDshiD($event){
          if(!this.B){//$event.target.innerHTML == "购买TA得服务"
            var basecatid = sessionStorage.getItem("basecatid")
            var master_id = this.masterIndex.master_id
            this.$axios(apiSetting.getMasterPrice,{
              basecatid:basecatid,
              master_id:master_id,
            }).then(res=>{
              this.getMasterPrice = res.data.data
              this.show = true
              this.B = true
              this.bab = "选择服务项目"
            })
          }else {
            var master_idl = this.masterIndex.master_id
            this.$axios(apiSetting.submitOrder,{
              master_id:master_idl,
              basecatid:basecatid,
              cat_id: this.aObj.cat_id
            }).then(res=>{
              sessionStorage.setItem("submitOrder",JSON.stringify(res.data.data))
              this.bab = "购买TA得服务"
              console.log(res.data.data.order_id)

              this.$axios(apiSetting.orderpayIndex,{
                order_id:res.data.data.order_id
              }).then(res=>{
                sessionStorage.setItem("orderpayIndex",JSON.stringify(res.data.data))
                sessionStorage.setItem("GoodsName",res.data.data.order_body)
                console.log(res.data.data.order_id)
                this.$router.push({
                path:"/simple-main/payorder"
              })
               /* this.$axios(apiSetting.notify_simulation,{
                  order_id:res.data.data.order_id
                }).then(res=>{
                  console.log(res)
                })*/
              })
            })

          }
        }
      },
      created(){
        this.masterIndex = JSON.parse(sessionStorage.getItem("masterIndex"))
        console.log(this.masterIndex)
        this.divination_ids_text = this.masterIndex.divination_ids_text.split(",")
        this.mastertags_ids_text = this.masterIndex.mastertags_ids_text.split(",")
      }
    }
</script>

<style scoped>
.active{
  color: pink;
}
</style>
