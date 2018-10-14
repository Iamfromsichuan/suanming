<template>
  <div class="alldashiqianbaoall">
    <div
      class="alldashiqianbaoall-item"
      v-for="(index,key) in orders"
      :key="key"
    >
      <p class="alldashiqianbaoall-item-PA">{{index.type}}： {{index.ordernmb}}</p>
      <p class="alldashiqianbaoall-item-PB">{{index.time}}  <span class="lala" :style="index.color">{{index.money}}</span></p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "alldashiianbaoincome",
    data(){
      return{
        orders:[
          {
            type:"订单号",
            ordernmb:"Q20180506120200001",
            time:"2018-05-06 12:02:02",
            money:"+30.00",
            color:"color:deeppink"
          },
          {
            type:"订单号",
            ordernmb:"Q20180506120200001",
            time:"2018-05-06 12:02:02",
            money:"+30.00",
            color:"color:deeppink"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>

