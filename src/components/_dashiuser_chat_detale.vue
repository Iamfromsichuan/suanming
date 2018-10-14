<template>
  <div class="lala">
    <div class="dashitouser">
      <div class="dashiuserchat-top">
        <!--遍历消息历史记录-->
        <div
          class="dashiuserchat-top-item"
          v-for="(index,key) in ChatHistory"
        >
          <!--根据每个userId来确定是客户还是客服还是大师，分别选哪然各自的聊天样式-->
          <!--如果是用户，-->
          <div
            class="dashiuserchat-top-chatUser"
            v-if="index.userId == 'user'"
          >
            <img class="chatUser" :src="index.userImg" alt="">
            <p class="userId">{{index.userName}}</p>
            <div
              class="dashiuserchat-top-chatUserContent"
              v-html="index.content"
            >

            </div>
          </div>
          <!--如果是客服-->
          <div
            class="dashiuserchat-top-chatKefu"
            v-if="index.userId == 'kefu'"
          >
            <img class="chatUser" :src="index.userImg" alt="">
            <p class="userId">{{index.userName}}</p>
            <div
              class="dashiuserchat-top-chatUserContent"
              v-html="index.content"
            >

            </div>
          </div>
          <!--如果是大师-->
          <div
            class="dashiuserchat-top-chatDashi dashiuserchat-top-chatKefu"
            v-if="index.userId == 'dashi'"
          >
            <img class="chatUser" :src="index.userImg" alt="">
            <p class="userId">{{index.userName}}</p>
            <div
              class="dashiuserchat-top-chatUserContent"
              v-html="index.content"
            >
            </div>
          </div>
        </div>
      </div>
      <div class="dashitouser-bom">
        <input type="text" placeholder="请输入消息内容">
        <button>提交</button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "dashitouser",
    data(){
      return{
        show:false,
        showIF:false,
        ChatHistory:[
          {
            userId:"kefu",
            userName:"客服",
            content:`<p>订单已经提交，系统将再20分钟内为您自动派单，请耐心等待！</p>`,
            userImg:"../../static/images/hot/客服头像-FDAEBD.png"
          },
          {
            userId:"user",
            userName:"林雨",
            content:`<p>内容消息...............</p><p></p>`,
            userImg:"../../static/images/dashi/用户头像.jpeg"
          },
          {
            userId:"dashi",
            userName:"大师1",
            content:`<p>内容消息</p><p></p>`,
            userImg:"../../static/images/dashi/1.png"
          },
          {
            userId:"user",
            userName:"林雨",
            content:`<p>内容消息.............</p><p></p>`,
            userImg:"../../static/images/dashi/用户头像.jpeg"
          },
          {
            userId:"dashi",
            userName:"大师1",
            content:`<p>内容消息...........</p><p></p>`,
            userImg:"../../static/images/dashi/1.png"
          },
          {
            userId:"user",
            userName:"林雨",
            content:`<p>内容消息..........</p><p></p>`,
            userImg:"../../static/images/dashi/用户头像.jpeg"
          },
          {
            userId:"dashi",
            userName:"大师1",
            content:`<p>内容消息...........</p><p></p>`,
            userImg:"../../static/images/dashi/1.png"
          },
        ]
      }
    },
    methods:{
      showIt(){
        this.show = !this.show
      },
      showALL(){
        this.show = !this.show;
        this.showIF = !this.showIF
      }
    }
  }
</script>

<style scoped>

</style>
