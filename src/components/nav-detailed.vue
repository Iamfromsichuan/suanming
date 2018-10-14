<template>
  <div class="nav-detailed">
    <div class="nav-detailed-header">
      <!--可翻页的选项卡-->
      <van-swipe >
        <!--lists表示有几个页面 index表示遍历lists中的某一个页面-->
        <van-swipe-item v-for="(index,tit) in lists" :key="tit" v-bind:show-indicators="false">
          <!--tent表示遍历某一个index的数据并渲染到页面上-->
          <ul>
            <li v-for="(tent,key) in index" :key="key" @click="GetDahiList(tent,key)">
              <!--点击都跳转到大师列表页面-->

                <img v-bind:src="'http://xingybc.com'+tent.image"  alt="">
                <p><a href="javascript:;">{{tent.name}}</a></p>
            </li>
          </ul>
        </van-swipe-item>
      </van-swipe>
      <!--单独做的一个分页提示器，因为不知道怎么修改自带分页器的样式-->
      <p class="nav-detailed-p">
        <!--遍历lists，根据lists的个数，生成相应数量的span，控制span的样式，模拟分页器-->
        <span
          class="nav-detailed-span"
          v-for="(index,tit) in lists" :key="tit"
        >
        </span>
      </p>
    </div>
    <div class="nav-detailed-hotDashi">
      <p class="nav-hotDashi-p">热门大师</p>
      <ul>
        <li v-for="(length,key) in hotMasters" :key="key">
          <a href="javascript:;" @click="GoDetaile(length,key)">
            <img class="radius" v-bind:src="'http://xingybc.com' + hotMasters[key].avatar"  alt="">
            <p>{{hotMasters[key].nickname}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="nav-detailed-usercommit">
      <p class="nav-usercommit-p">用户评价</p>

      <!--遍历请求回来的用户评价数据，依次渲染-->
      <div
        class="user-commit"
        v-for="(commit,key) in commits"
        v-bind:key="key"
      >
        <!--通过p标签将请求数据中的&#45;&#45;电话&#45;&#45;评论时间&#45;&#45;购买的项目&#45;&#45;用户评论，分别打印出来-->
        <p class="spcial">{{commit.tele}}</p>
        <p class="spcial">{{commit.date}}</p>
        <p class="user-commit-p">{{commit.comit}}</p>
        <img class="user-commit-userImg" v-bind:src="commit.userimgSrc" alt="">
        <p class="user-commit-paied">已购买：{{commit.paied}}</p>
        <div class="user-commit-Consultation">
          <p class="consultation-p1">{{commit.dashi}}</p>
          <p class="consultation-p2">{{commit.intro}}</p>
          <p class="consultation-p3">￥{{commit.money}}</p>
          <img class="user-commit-dashiImg" :src="commit.dashiimgSrc" alt="">
          <router-link class="user-commit-a" to="/simple-main/immediately">立即咨询</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<img src="" height="89" width="89"/>
<script>
  import apiSetting from "../AXIOS/api"
  import qs from "qs"
    export default {
      name: "nav-detailed",
      data(){
          return {
            //为了方便将每一个lists的子元素单独的渲染在一个单独的页面
            am:"",
            lists:[],
            Dashi:[
              {
                srcimg:"../../static/images/dashi/1.png",
                txt:"大师1"
              },
              {
                srcimg:"../../static/images/dashi/2.png",
                txt:"大师2"
              },
              {
                srcimg:"../../static/images/dashi/3.png",
                txt:"大师3"
              },
              {
                srcimg:"../../static/images/dashi/4.png",
                txt:"大师4"
              },
              {
                srcimg:"../../static/images/dashi/5.jpg",
                txt:"大师5"
              },
              {
                srcimg:"../../static/images/dashi/6.jpg",
                txt:"大师6"
              },
              {
                srcimg:"../../static/images/dashi/7.jpg",
                txt:"大师47"
              },
              {
                srcimg:"../../static/images/dashi/8.jpg",
                txt:"大师8"
              },
            ],
            commits:[
              {
                tele:"182****1234",
                date:"2018-03-01",
                comit:"去年三月找大师算了一下自己的婚恋感情，说自己要到冬天才能遇到结婚的人，真的，等到了冬天，遇到了",
                userimgSrc:"../../static/images/dashi/用户头像.jpeg",
                dashiimgSrc:"../../static/images/dashi/1.png",
                paied:"结婚吉日",
                dashi:"大师一",
                intro:"八字领域从业已有20余年，广...",
                money:"998.00",
              },
              {
                tele:"182****1234",
                date:"2018-03-01",
                comit:"去年三月找大师算了一下自己的婚恋感情，说自己要到冬天才能遇到结婚的人，真的，等到了冬天，遇到了",
                userimgSrc:"../../static/images/dashi/用户头像.jpeg",
                dashiimgSrc:"../../static/images/dashi/1.png",
                paied:"结婚吉日",
                dashi:"大师一",
                intro:"八字领域从业已有20余年，广...",
                money:"998.00"
              }
            ],
            nublist:[],
            hotMasters:"",
            weighs:[],
            nublist1:[],
            xiangce_cat_list:"",
            weighs1:[],
          }
      },
      methods:{
        GetDahiList(tent,key){
          var basecatid = sessionStorage.getItem("basecatid")
          var cat_id = tent.id
          this.$axios(apiSetting.catMasterList,{
            basecatid:basecatid,
            cat_id:cat_id
          }).then(res=>{
            sessionStorage.setItem("listL",JSON.stringify(res.data.data.masterlist))
            console.log(res.data.data.masterlist)
            this.$router.push({
              path:"/simple-main/dashilist",
              query:{
                a:cat_id
              }
            })
          })
        },
        GoDetaile(length,key){
          var basecatid = sessionStorage.getItem("basecatid")
          this.$axios(apiSetting.masterIndex,{
            master_id:length.master_id,
            basecatid:basecatid
          }).then(res=>{
            sessionStorage.setItem("masterIndex",JSON.stringify(res.data.data))
            sessionStorage.setItem("mIndex",JSON.stringify(res.data.data))
            this.$router.push({
              path:"/simple-main/dashidetailed"
            })
          })
        }
      },
      created(){
        var res = qs.parse(sessionStorage.getItem("detaileResponse"))
        var senf = res.data.data.hotMasters
        for(var a in senf){
          this.nublist.push(a)
          this.weighs.push(senf[a].weigh)
        }
          function solo(a,b) {
          return a-b
        }
        this.weighs =  this.weighs.sort(solo).reverse();
        this.hotMasters =[]
        for(var i=0;i<this.weighs.length;i++){
          for(var j=0;j<this.nublist.length;j++){
            if( senf[this.nublist[j]].weigh==this.weighs[i]){
              this.hotMasters.push(senf[this.nublist[j]])
            }
          }
        }
        //---------------------------------------------------------------
        var senf1 = res.data.data.xiangce_cat_list
        for(var a in senf1){
          this.nublist1.push(a)
          this.weighs1.push(senf1[a].weigh)
        }
        function solo(a,b) {
          return a-b
        }
        this.weighs1 =  this.weighs1.sort(solo).reverse();
        this.xiangce_cat_list =[]
        for(var i=0;i<this.weighs1.length;i++) {
          for (var j = 0; j < this.nublist1.length; j++) {
            if (senf1[this.nublist1[j]].weigh == this.weighs1[i]) {
              this.xiangce_cat_list.push(senf1[this.nublist1[j]])
            }
          }
        }
        var alist = this.xiangce_cat_list.splice(0,8)
        this.lists = [
          alist,
          this.xiangce_cat_list,
        ]
        sessionStorage.setItem("hotMasters",qs.stringify(this.hotMasters))
      }
    }
 </script>

<style scoped>

</style>
