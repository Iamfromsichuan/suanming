<template>
  <div class="usersetting">
    <div class="content">
      <input class="content-inputA" type="file" @change="UpdatFile($event)">
      <p class="usersettingP1">头像 <span><img class="usersettingImg1" :src="url" alt=""><img class="usersettingImg2" src="../../static/images/箭头.png"/></span></p>
      <p class="usersettingP2">昵称 <span>林雨</span><img class="usersettingImg2" src="../../static/images/箭头.png"/></p>
      <p class="usersettingP2 ">性别 <span class="usersettingSpan">男</span><img class="usersettingImg2" src="../../static/images/箭头.png"/></p>
    </div>
  </div>
</template>
<script>
  import axios from  "axios"
  import apiSetting from "../AXIOS/api"
  export default {
    name:"usersetting",
    data(){
      return{
        age:"",
        file:"",
        name:"",
        url:"../../static/images/dashi/用户头像.jpeg",
        nickname:""
      }
    },
    methods: {
      UpdatFile(event) {
        this.file = event.target.files[0];
        console.log(this.file);
        event.preventDefault();
        let formData = new FormData();
        formData.append('nickname', this.name);
        // formData.append('age', this.age);
        formData.append('file', this.file);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            "token":sessionStorage.getItem("token")
          }
        }
        axios.interceptors.request.use(config =>{
            // 发送请求之前做一些处理,loading...
            return config
          },
          error =>{
            // 当请求异常时做一些处理
            return Promise.reject(error)
          })
        axios.post("http://xingybc.com/api/common/upload",formData,config).then(res=>{
          console.log("========");
          console.log(res);
          console.log("========");
          this.url='http://xingybc.com' + res.data.data.url
        })
      },
      submitForm(){
        this.$axios(apiSetting.UpdateNmaeSexy,{nickname:"小红"}).then(()=>{
          this.nickname = sessionStorage.getItem("nickname")}
        );
      }
    }
  }
</script>
<style>

</style>
