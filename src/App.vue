<template>
  <div id="app">
    <!--<van-loading v-if="showLoading=='ture'" type="spinner" color="white" size="100px"></van-loading>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      showLoading:this.$showLoading,
    }
  },
  update(){
    this.showLoading = this.$showloading
  }
}
</script>

<style>
  @import 'assets/css/vant-css/index.css';
</style>
