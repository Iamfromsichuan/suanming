<template>
 <div class="now-pay">
    <P class="now-pay-P"> 建议您选择多位大师听取更多意见</p>
   <div
     class="now-pay-answer"
     v-for="(index,key) in answer.dashi"
     :key="key"
   >
      <div class="now-answer-dashi">
        <p><span class="now-answer-spanA">{{index.masters.nickname}}</span><span class="now-answer-spanB">￥{{index.master_price}}</span></p>
        <p class="now-answer-p2">{{index.masters.intro_content}}</p>
        <p class="now-answer-p3">
          <span class="now-answer-spanC">{{index.masters.comment_count}}个问答</span>
          <span class="now-answer-spanD">{{index.masters.sales_sum}}人查看</span >
          <span class="now-answer-spanE" v-on:click="fadein(index,key)">
            <!--点击后出现一个勾勾。表示勾选的状态，index.show=false时表示没选中-->
            <img v-if="index.masters.gender_text" src="../../static/images/选中-FDAEBD.png"/>
          </span>
        </p>
      </div>
     <img class="now-answer-dashimg" :src="'http://xingybc.com'+index.masters.avatar" alt="">
   </div>
   <div class="now-pay-submit">
     <a @click="submit" href="javascript:;">
       提问 （￥{{total}}）
     </a>
   </div>
   <!--<div class="waitImg" v-if="act">-->
     <!--<img src="../../static/images/dashi/1.png" height="89" width="89"/>-->
   <!--</div>-->
 </div>
</template>
<!--<img src="../../static/images/随机排序2-FDAEBD.png" height="100" width="100"/>-->

<script>
  import qs from "qs"
  import apiSetting from "../AXIOS/api"
    export default {
        name: "now-pay",
        data(){
          return{
            total:0,
            key:"",
            arr:[],
            keylist:[],
            answer:{
              dashi:[
                {
                  imgsrc:"../../static/images/随机排序2-FDAEBD.png",
                  name:"大师抢答",
                  content:"",
                  nub1:"",
                  nub2:"70434",
                  show:false,
                  meoney:"30.00"
                },
                {
                  imgsrc:"../../static/images/dashi/1.png",
                  name:"大师1",
                  content:"传统文化研究者及实战派。从事学问研究20载，遍访民间名人",
                  nub1:"3535",
                  nub2:"18738",
                  show:false,
                  meoney:"30.00"
                },
                {
                  imgsrc:"../../static/images/dashi/2.png",
                  name:"大师2",
                  content:"传统文化研究者及实战派。从事学问研究20载，遍访民间名人",
                  nub1:"3535",
                  nub2:"18738",
                  show:false,
                  meoney:"30.00"
                },
                {
                  imgsrc:"../../static/images/dashi/3.png",
                  name:"大师3",
                  content:"传统文化研究者及实战派。从事学问研究20载，遍访民间名人",
                  nub1:"3535",
                  nub2:"18738",
                  show:false,
                  meoney:"30.00"
                },
                {
                  imgsrc:"../../static/images/dashi/4.png",
                  name:"大师4",
                  content:"传统文化研究者及实战派。从事学问研究20载，遍访民间名人",
                  nub1:"3535",
                  nub2:"18738",
                  show:false,
                  meoney:"30.00"
                },
                {
                  imgsrc:"../../static/images/dashi/5.jpg",
                  name:"大师5",
                  content:"传统文化研究者及实战派。从事学问研究20载，遍访民间名人",
                  nub1:"3535",
                  nub2:"18738",
                  show:false,
                  meoney:"30.00"
                },
                {
                  imgsrc:"../../static/images/dashi/6.jpg",
                  name:"大师6",
                  content:"传统文化研究者及实战派。从事学问研究20载，遍访民间名人",
                  nub1:"3535",
                  nub2:"18738",
                  show:false,
                  meoney:"30.00"
                },
                {
                  imgsrc:"../../static/images/dashi/7.jpg",
                  name:"大师7",
                  content:"传统文化研究者及实战派。从事学问研究20载，遍访民间名人",
                  nub1:"3535",
                  nub2:"18738",
                  show:false,
                  meoney:"30.00"
                },
                {
                  imgsrc:"../../static/images/dashi/8.jpg",
                  name:"大师8",
                  content:"传统文化研究者及实战派。从事学问研究20载，遍访民间名人",
                  nub1:"3535",
                  nub2:"18738",
                  show:false,
                  meoney:"30.00"
                }
              ]
            }
          }
        },
      methods:{
        fadein(index,key){
         // 状态控制
         index.masters.gender_text = !index.masters.gender_text;
         // console.log(index)
         //拿到选中状态的序列号key
         //  console.log(index.masters.gender_text)
          //存放状态为选中的元素下标，方便在后面重新进入此页面时，能够读取上一次的状态
          if(sessionStorage.getItem("b")){
            this.arr = JSON.parse(sessionStorage.getItem("b"))
          } else {
            this.arr=[]
          }
         if(index.masters.gender_text){
            var  b = {
             key:key
           };
            //将所有选中状态下的项目key都放到数组arr中
           this.arr.push(b);
           //将arr放置到sessionStorage中
           sessionStorage.setItem("b",JSON.stringify(this.arr));
           this.total += parseInt(this.answer.dashi[key].master_price)
           console.log(this.arr)
         } else {
           //masters.gender_text 的值为true为选中，false为取消
           //如果点击后状态为取消，那么将这个数据从sessionStorage中删除
           //拿出sessionStorage的数据”b“
           var m= JSON.parse(sessionStorage.getItem("b"))
           //遍历数据，筛选出点击这个数据
           console.log(m)
           for(var o=0;o<m.length;o++){
            if(m[o].key==key){
              //mm是当前点击对象对应在b中的下标
              m.splice(o,1);
              // this.arr = m;
              //重新保存到sessionStorage中
              sessionStorage.setItem("b",JSON.stringify(m));
             this.total =  this.total - parseInt(this.answer.dashi[key].master_price)
            }
           }
         }
        },
        submit(){
          var goods_id = sessionStorage.getItem("ID")
          var basecatid = sessionStorage.getItem("basecatid")
          var goods_name = sessionStorage.getItem("GoodsName")
          var master_ids =""
          var b = JSON.parse(sessionStorage.getItem("b"))
          for(let i=0;i< b.length;i++){
            master_ids = master_ids +','+ this.answer.dashi[b[i].key].master_id
          }
          console.log(master_ids)
          this.$axios(apiSetting.submitAnswer,{
            basecatid:basecatid,
            goods_name:goods_name,
            master_ids:master_ids,
            goods_id:goods_id
          }).then(res=>{
            // console.log("-----------------------------------------------")
            // console.log(res.data)
            sessionStorage.setItem("OrderDetaile",JSON.stringify(res.data))
            sessionStorage.setItem("OrderDetaileID",res.data.data.order_id)
            var a= parseInt(JSON.parse(sessionStorage.getItem("OrderDetaile")).data.order_id)
            this.$axios(apiSetting.orderpayIndex,{
              basecatid:basecatid,
              order_id:a
            }).then(res=>{
              sessionStorage.setItem("orderpayIndex",JSON.stringify(res.data.data))
              this.$router.push({
                path:'/simple-main/payorder?',
                // path:'/simple-main/dashiuserchatdatale',
                query:{
                  nowPayTotal:this.total
                }
              })
            })
          })
        }
      },
      created(){
          //初始化this.answer.dashi
          this.answer.dashi=[]
        //取出sessionStorage中的请求数据
          var MasterList = qs.parse(sessionStorage.getItem("MasterList"))
        //赋值给 this.answer.dashi
        console.log(MasterList)
          MasterList.qiangda.masters.gender_text = false;
          this.answer.dashi.push(MasterList.qiangda)
        //初始化选中取消的状态
        for(var a=0;a<MasterList.masterlist.length;a++){
          MasterList.masterlist[a].masters.intro_content = MasterList.masterlist[a].masters.intro_content.slice(0,30)
          MasterList.masterlist[a].masters.gender_text= false
          this.answer.dashi.push(MasterList.masterlist[a])
        }
        console.log(this.answer.dashi)
        //将sessionStorage中的arr数据拿出来初始化，也就是保存的上次操作后的状态
        if(JSON.parse(sessionStorage.getItem("b"))){
          var nnn
          //取出存放的状态为选中的元素下标
          this.arr = JSON.parse(sessionStorage.getItem("b"))
           nnn = JSON.parse(sessionStorage.getItem("b"))
          //取出key值
          for(var nn in nnn){
            this.keylist.push( nnn[nn].key);
            console.log( this.keylist)
            console.log(0)
          }
          //更新状态
          for(var is=0;is<this.keylist.length;is++){
             console.log(this.answer.dashi)
            this.answer.dashi[this.keylist[is]].masters.gender_text=true;
            this.total += parseInt(this.answer.dashi[this.keylist[is]].master_price)
          }
        }else {
            //如果是首次进入，或者上次未有选中的元素，初始化状态全为false
          nnn=[]
          this.total = 0
          for(let i=0;i<this.answer.dashi.length;i++){
            this.answer.dashi[i].masters.gender_text =false
          }
        }
      }
    }
</script>
