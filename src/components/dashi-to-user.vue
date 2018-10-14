<template>
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
      <button v-on:click="showIt">提交</button>
    </div>
    <div v-if="show" class="chapian">
      <p class="chapiaBBB">您确定提交答案并完成订单吗</p>
      <p class="chapianaa">
        <span class="chapianspan"><a v-on:click="showIt" href="javascript:;">继续编辑</a></span>
        <span><a v-on:click="showALL" href="javascript:;">确认提交</a></span>
      </p>
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
            userId:"user",
            userName:"林雨",
            content:`<p>轻测问题：我今年能发财吗</p><p>姓名：林雨</p><p>性别：男</p><p>出身年月：1988-08-08，阳历生辰：80：00-8：50</p><p>选择数字8，8，8</p><p>特殊注明：目前无业</p>`,
            userImg:"../../static/images/dashi/用户头像.jpeg"
          },
          {
            userId:"kefu",
            userName:"客服",
            content:`<p>订单已经提交，系统将再20分钟内为您自动派单，请耐心等待！</p>`,
            userImg:"../../static/images/hot/客服头像-FDAEBD.png"
          },
          {
            userId:"kefu",
            userName:"客服",
            content:`<p>订单已经提交，系统将再20分钟内为您自动派单，请耐心等待！</p>`,
            userImg:"../../static/images/hot/客服头像-FDAEBD.png"
          },
          {
            userId:"dashi",
            userName:"大师1",
            content:`<p>您好我是星星易测的大师1，很高兴为您服务。命主性格：直爽，花钱较为大方不小气，诚实厚重，有社交力，喜打扮，命主问买房适合什么楼层，东户还是西户？命局戊土日元。用神为金和木，祭神为火。木旺代表命主的工作和事业。辛金为伤官弱，而且被克泄。命主选东户为好</p>`,
            userImg:"../../static/images/dashi/1.png"
          }
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
