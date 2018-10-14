<template>
  <div class="leavemessage">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div
      class="leavemessage-item"
      v-for="(index,key) in usersChats.data.chats"
      :key="key"
      @click="GoChat(index,key)"
    >
      <p class="leavemessage-item-p1">
        {{index.title}}
        <span v-if="index.unread_count > 0">{{index.unread_count}}</span>
      </p>
      <p class="leavemessage-item-p2">{{index.last_msg}}</p>
      <p>{{index.last_msg_time}}</p>
      <img :src="'http://xingybc.com'+index.goods_logo_image" alt="">
    </div>
    </van-pull-refresh>
  </div>
</template>
<script>
  import apiSetting from "../../AXIOS/api"
export default {
  name:"leavemessage",
  data(){
    return{
      usersChats:"",
      count: 0,
      isLoading: false
    }
  },
  created(){
    this.usersChats = JSON.parse(sessionStorage.getItem("getUnreadChats"))
    console.log(this.usersChats)
  },
  methods:{
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    GoChat(index,key){
      this.$axios(apiSetting.chatIndex,{
        order_goods_id:index.order_goods_id
      }).then(res=>{
        sessionStorage.setItem("Checkend_order_goods_id",index.order_goods_id)
        sessionStorage.setItem("chatIndexRes",JSON.stringify(res.data.data))
        var chatIndexRes = JSON.parse(sessionStorage.getItem("chatIndexRes"))
        //拉取聊天记录
        this.$axios(apiSetting.getHis,{
          group_id:chatIndexRes.group_id
        }).then(res=>{
          sessionStorage.setItem("getHis",JSON.stringify(res.data))
          this.$router.push({
            path:"/simple-main/dashiuserchat"
          })
        })
      })
    }
  }
}
</script>
<style></style>
