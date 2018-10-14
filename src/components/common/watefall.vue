<template>
  <div class="nav-index-waterfall">
    <p>热门轻测</p>
    <van-pull-refresh v-model="isLoading"  @refresh="onRefresh">
      <ul>
        <li v-for="(tent,key) in hotGoods" @click="ToDetaile(tent.id)" :key="key" >
          <a>
            <img  v-bind:src="'http://xingybc.com'+hotGoods[key].goods_logo_image"/>
            <h4>{{hotGoods[key].goods_name}}</h4>
            <h5>{{hotGoods[key].goods_content.slice(0,20)}}</h5>
            <p><span class="nav-index-span"><img src="../../../static/images/simpleMain/订单.png"/>{{hotGoods[key].sales_sum}}测试</span><span class="nav-index-span"><img src="../../../static/images/simpleMain/待评价.png"/>{{hotGoods[key].comment_count}}评价</span></p>
          </a>
        </li>
      </ul>
    </van-pull-refresh>
  </div>
</template>
<script>
  import qs from "qs"
  import apiSetting from "../../AXIOS/api"
    export default {
        name: "watefall",
      data(){
          return{
            count: 0,
            isLoading: false,
            list:[
              {
                a:"我是否已经错过了正缘",
                b:"生命中的富贵姻缘就像公交车，生命就像路线",
                c:"2000",
                d:"1800",
                imgsrc:"../../static/images/hot/ZxFHn5PpWxdn.jpg",
                i:"1"
              },
              {
                a:"我是否已经错过了正缘",
                b:"生命中的富贵姻缘就像公交车，生命就像路线",
                c:"2000",
                d:"1800",
                imgsrc:"../../static/images/hot/YwRxs5bYwher.jpg",
                i:"2"
              },
              {
                a:"我是否已经错过了正缘",
                b:"生命中的富贵姻缘就像公交车，生命就像路线",
                c:"2000",
                d:"1800",
                imgsrc:"../../static/images/hot/sG6cRW34zstt.jpg",
                i:"3"
              },
              {
                a:"我是否已经错过了正缘",
                b:"生命中的富贵姻缘就像公交车，生命就像路线",
                c:"2000",
                d:"1800",
                imgsrc:"../../static/images/hot/b3FdMnGs3C6c.jpg",
                i:"4"
              }
            ],
            nublist:[],
            hotGoods:"",
            weighs:[]
          }
      },
      created(){
        var res = qs.parse(sessionStorage.getItem("indexResponse"))
        // var i = res.data.data.hotGoods
        var senf = res.data.data.hotGoods
        // this.hotGoods = res.data.data.hotGoods;
        for(var a in senf){
          this.nublist.push(a)
          this.weighs.push(senf[a].weigh)
        }
        function lade(a,b) {
          return a-b
        }
       this.weighs =  this.weighs.sort(lade).reverse();
        this.hotGoods =[]
        for(var i=0;i<this.weighs.length;i++){
          for(var j=0;j<this.nublist.length;j++){
            if( senf[this.nublist[j]].weigh==this.weighs[i]){
              this.hotGoods.push(senf[this.nublist[j]])
            }
          }
        }
        console.log(this.hotGoods)
        console.log("11111111111")
      },
      methods:{
        ToDetaile(arg){
          //获取存在内存的basecatid
          var basecatid = sessionStorage.getItem("basecatid")
          //发送数据详情页内容请求

          this.$axios(apiSetting.qingceDeail,{
            basecatid:basecatid,
            //商品的id
            goods_id:arg
          }).then(res=>{
            //获取详情页数据成功，路由跳转
            console.log(res)
            sessionStorage.setItem("Goods",qs.stringify(res.data.data))
            sessionStorage.setItem("GoodsName",res.data.data.goods_name)
            this.$router.push({
              path:"/simple-main2"
            })
            //将获取的数据，存到内存
          })
        },
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
          }, 500);
        }
      },
    }
</script>
