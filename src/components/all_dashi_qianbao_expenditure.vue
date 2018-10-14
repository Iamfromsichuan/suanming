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
    name: "alldashiianbaoexpenditure",
     data(){
      return{
        orders:[
          {
            type:"提现号",
            ordernmb:"T20180506120200001",
            time:"2018-05-06 12:02:02",
            money:"-3000.00",
            color:"color:black"
          },
          {
            type:"提现号",
            ordernmb:"T20180506120200001",
            time:"2018-05-06 12:02:02",
            money:"-3000.00",
            color:"color:black"
          }
        ]
      }
     }
    }
</script>

<style scoped>

</style>
