<template>
  <div class="all-order_all">
    <div
      class="all-order_all__item"
      v-for="(index,key) in orders"
      :key="key"
    >
      <p class="all-order_all__itemP">
        订购号：<span class="all_all-spanB">{{index.id}}</span>
        <span class="all_all-spanA">{{index.tip}}</span>
      </p>
      <div class="all-order_all__dashi">
        <img class="all-order_all__IMG" :src="index.srcImg" alt="">
        <p class="all-order_all__dasPA">{{index.itme}}</p>
        <p class="all-order_all__dasPB">{{index.money}}</p>
        <p class="all-order_all__dasPC">{{index.time}}</p>
      </div>
      <p class="all-order_all__dasPD">
        <span class="spanA" v-bind:style="index.color3"><router-link to="">{{index.tent3}}</router-link></span>
        <span class="spanB" v-bind:style="index.color1"><router-link to="">{{index.tent1}}</router-link></span>
        <span class="spanC" v-bind:style="index.color2"><router-link to="">{{index.tent2}}</router-link></span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "order_nuber",
    data(){
      return{
        orders:[
          {
            id:"Q2018050612020000001",
            tip:"已取消",
            srcImg:"../../static/images/dashi/1.png",
            itme:"大师1-事业财运",
            money:"￥300.00",
            time:"2018-05-06 12:02:02",
            tent1:"重新下单",
            tent2:"删除订单",
            tent3:"",
            color1:"background-color:pink;",
            color2:"background-color:gray;",
            color3:""
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
