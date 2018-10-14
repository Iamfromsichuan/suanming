<!--聊天界面-->
<template>
  <div class="dashiuserchat">
    <button v-show="dalala" @click="toDown" class="end">已解决</button>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="dashiuserchat-top">
        <!--遍历消息历史记录-->

        <div
          class="dashiuserchat-top-item"
          v-for="(index,key) in ws"
          :key="key"
        >
          <!--根据每个userId来确定是客户还是客服还是大师，分别选哪然各自的聊天样式-->
          <!--如果是用户，-->
          <div
            class="dashiuserchat-top-chatUser"
            v-if="index.from_id==id"
          >
            <img class="chatUser" :src='index.user.avatar.indexOf("http")>=0?index.user.avatar:"http://xingybc.com"+index.user.avatar' alt="">
            <p class="userId">{{index.user.nickname}}</p>
            <div class="dashiuserchat-top-chatUserContent">
              {{index.msg_content}}
            </div>
          </div>
          <!--如果是客服-->
          <div
            class="dashiuserchat-top-chatUser"
            v-else
          >
            <img class="chatMe" :src="index.user.avatar.indexOf('http')>=0?index.user.avatar:'http://xingybc.com'+index.user.avatar" alt="">
            <p id="AAAAA" class="userMe" style="color: #000;">{{index.user.nickname?index.user.nickname:'客服'}}</p>
            <div class="dashiuserchat-top-Me">
              <p>{{index.msg_content}}
              </p>
            </div>
          </div>
        </div>
        <div v-if="showA" class="dashiuserchat-commit">
          <p class="dashiuserchat-commitP">*轻测和问答仅提供快速测算服务，如需了解更多，请评价后找大师详测！</p>
          <div class="dashiuserchat-commit-star">
            <p>咨询质量：
              <van-rate v-model="value1" color="pink"/>
            </p>
            <p>咨询质量：
              <van-rate v-model="value2" color="pink"/>
            </p>
            <p>咨询质量：
              <van-rate v-model="value3" color="pink"/>
            </p>
          </div>
        </div>
        <!--//评价内容-->
        <div v-show="showZ" class="dashiuserchat-commit">
          <p class="dashiuserchat-commitP">感谢您得宝贵意见</p>
          <div class="dashiuserchat-commit-star">
            <p>咨询质量：
              <van-rate v-model="value4" color="pink" />
            </p>
            <p>服务速度：
              <van-rate v-model="value5" color="pink" />
            </p>
            <p>回复速度：
              <van-rate v-model="value6" color="pink" />
            </p>
            <p>{{content}}</p>
          </div>
        </div>
        <div v-show="showB" class="bottom">
          <input v-model="contentext" type="text">
          <!--提交评论-->
          <button @click="commitComment">提交</button>
        </div>
      </div>
    </van-pull-refresh>
    <div class="dashiuserchat-submit-chat">
      <input :disabled="dis" v-model="Sokec" type="text" placeholder="请输入消息内容">
      <input class="button" :disabled="dis" type="button" value="发送" @click="submit">
    </div>
  </div>
</template>

<script>
  import apiSetting from "../AXIOS/api"
  import WS from "../websocket/ws_fnc"

  export default {
    name: "dashiuser1",
    data() {
      return {
        dalala:true,
        kefu:'../../static/images/hot/客服头像-FDAEBD.png',
        id:"",
        ws:{

        },
        //接受请求回来的评价内容
        content:"",
        //双向绑定聊天得数据
        Sokec: "",
        //控制输入框得禁用
        dis: false,
        showZ:false,
        //控制---待评价---框,同时控制输入框得禁止写入
        showA: true,
        //控制---已评价---框
        showB: true,
        //双向绑定输入框数据
        contentext: "",
        value1: 5,
        value2: 5,
        value3: 5,
        value4: 5,
        value5: 5,
        value6: 5,
        //res用来接收评价完成得评价数据
        res: "",
        act: "",
        count: 0,
        chatModule:{
          msg_content:'',
          group_id:'',
          from_id:'',
          user:{
            avatar:'',
            nickname:'',
          }
        },
        //all-order-all中拿到得数据，聊天记录
        getHis: "",
        //all-order-all中拿到得聊天得状态数据数据
        chatIndexRes: "",

        isLoading: false,
      }
    },
    methods: {
      toDown(){
        this.$dialog.confirm({
          title: '标题',
          message: '若大师已解决您问题，请点击确认结束聊天',
        }).then(() => {
          // on confirm
          var group_id = this.chatIndexRes.group_id
          var basecatid = sessionStorage.getItem("basecatid")
          this.$axios(apiSetting.toCloseXiangceGroup,{
            group_id:group_id
          }).then(res=>{
            console.log(res)
            this.$toast(res.data.msg)
            if(res.data.msg.indexOf("成功")>=0){
              this.dalala = false
            }
          }).catch(res=>{
            this.$toast(res.data.msg)
          })
        }).catch(() => {
          // on cancel
        });
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      },
      //聊天室发言
      submit() {
        if(this.chatIndexRes.group_status==1){//群组状态正常
          if(this.chatIndexRes.group_user_status==2){
            this.dis = true//发送一条消息之后，不可再发送
          }
        }
        var _that =this
        var center = sessionStorage.getItem("center")
        var nickname = sessionStorage.getItem("nickname")
        var avatar = sessionStorage.getItem("avatar")
        console.log(avatar)
        console.log(nickname)
       /* if(avatar.indexOf("http") == -1){
          avatar='http://xingybc.com'+avatar
        }*/
        var chatIndexRes = JSON.parse(sessionStorage.getItem("chatIndexRes"))
        var group_id = chatIndexRes.group_id
        var msg_content = this.Sokec
        var basecatid = sessionStorage.getItem("basecatid")
        _that.chatModule ={
          msg_content:this.Sokec,
          group_id:group_id,
          from_id:center,
          user:{
            avatar:avatar,
            nickname:nickname,
          }
        }
        this.$axios(apiSetting.sendToGroup, {
          group_id: group_id,
          msg_content: msg_content,
          basecatid: basecatid
        }).then(res => {
          var a = _that.ws.length
          _that.$set(_that.ws,a,_that.chatModule)
        })
      },
      //评论提交
      commitComment() {
        var order_goods_id = sessionStorage.getItem(("Checkend_order_goods_id"))
        var contentext = this.contentext
        var goods_rank = this.value1
        var service_rank = this.value2
        var deliver_rank = this.value3
        var basecatid = sessionStorage.getItem("basecatid")
        this.$axios(apiSetting.commitComment, {
          order_goods_id: order_goods_id,
          content: contentext,
          basecatid: basecatid,
          goods_rank: goods_rank,
          service_rank: service_rank,
          deliver_rank: deliver_rank
        }).then(res => {
          console.log(res)
          if (res.data.errorcode == 0) {
            this.$toast('发生不可预知错误，请稍后再试');
          } else if (res.data.errorcode == 1) {
            this.$toast('请订单完成后在评论');
          } else if (res.data.errorcode == 2) {
            this.$toast('已评论完成，请勿重复评论');
          }
        })
      }
    },
    created() {
      this.id = sessionStorage.getItem("center")
      console.log(this.id)
      this.chatIndexRes = JSON.parse(sessionStorage.getItem("chatIndexRes"))
      this.getHis = JSON.parse(sessionStorage.getItem("getHis"))
      //--------------------------------------------------------------------
      this.ws = JSON.parse(sessionStorage.getItem("getHis")).data.msglist.reverse()


      var basecatid = sessionStorage.getItem("basecatid")
      var Checkend_order_goods_id = sessionStorage.getItem("Checkend_order_goods_id")
      console.log(this.chatIndexRes)
      if(this.chatIndexRes.group_status == 0){//如果聊天群组关闭   评论不显示 输入框不显示
        // this.showB = false//输入框和提交按钮
        // this.showA = false//待評價的内容
        // this.showZ = false//已經評價的内容
        this.dis = true//发送消息按钮  输入消息框禁用
        if(this.chatIndexRes.is_send==0||this.chatIndexRes.is_send==1){//如果聊天未回复或者已回复   评论不显示 输入框不显示
          this.showB = false//输入框和提交按钮
          this.showA = false//待評價的内容
          this.showZ = false//已經評價的内容
        }else if(this.chatIndexRes.is_send==2){//如果聊天 未已解决 判断是否是大师和是否评论来显示  评论不显示 输入框不显示
          if(this.chatIndexRes.is_comment==0&&this.chatIndexRes.is_master==0){//没有评论，且不为大师。
            this.showB = true//输入框和提交按钮
            this.showA = true//待評價的内容
            this.showZ = false//已經評價的内容
          }else if(this.chatIndexRes.is_comment==1&&this.chatIndexRes.is_master==0){//已经评论，且不为大师，请求评论的结果，显示评论的界面
            this.showB = false;//输入框和提交按钮
            this.showA = false;//待評價的内容
            this.showZ = false;//已經評價的内容
            var Checkend_order_goods_id = sessionStorage.getItem("Checkend_order_goods_id")
            this.$axios(apiSetting.getComment,{
              order_goods_id:Checkend_order_goods_id,
              basecatid:basecatid
            }).then(res=>{
              this.value4 = parseInt(res.data.data.goods_rank)
              this.value5 = parseInt(res.data.data.service_rank)
              this.value6 = parseInt(res.data.data.deliver_rank)
              this.content = res.data.data.content
            })
          }else if(this.chatIndexRes.is_master>=0){//如果是大师，全部关闭
            this.showB = false;//输入框和提交按钮
            this.showA = false;//待評價的内容
            this.showZ = false;//已經評價的内容
          }
        }
      }else if(this.chatIndexRes.group_status==1){//群组状态正常
        if(this.chatIndexRes.group_user_status==0){
          this.showB = false//输入框和提交按钮
          this.showA = false//待評價的内容
          this.showZ = false//已經評價的内容
          this.dis = true//发送消息按钮--可以发送消息
        }else if(this.chatIndexRes.group_user_status==1){//客户随便发消息
          this.showB = false//输入框和提交按钮
          this.showA = false//待評價的内容
          this.showZ = false//已經評價的内容
          this.dis = false//发送消息按钮--可以发送消息
        }else if(this.chatIndexRes.group_user_status==2){//是轻测的大师
            this.showB = false//输入框和提交按钮
            this.showA = false//待評價的内容
            this.showZ = false//已經評價的内容
            this.dis = false//发送消息按钮--可以发送消息
        }
      }else if(this.chatIndexRes.is_master>0){
        this.showB = false//输入框和提交按钮
        this.showA = false//待評價的内容
        this.showZ = false//已經評價的内容
      }
      if(this.chatIndexRes.is_xiangce == 1){
        this.dalala = true
      }else {
        this.dalala = false
      }

      var a = sessionStorage.getItem("type")
      console.log(a)
      console.log(a!="查看记录"&&a!="去评价")
      var _that =this
      if(a!="查看记录"&&a!="去评价"){//||a!="去付款"||a!=="删除订"
        var token = sessionStorage.getItem("token")
        var group_id = JSON.parse(sessionStorage.getItem("getHis")).data.msglist[0].group_id
        var ws = WS.init("xingybc.com",
          {
            'link-ok': function (res) {
              ws.ws.send({
                "type": "join",
                "token": token,
                "group_id": group_id
              })
            },
            'link-on-msg':function (msg) {
              if(msg.type!="ping"){
                console.log('link-on-msg',msg)
              }else if(msg.type=='chstatus'){
                if(msg.group_status==0){
                  _that.showA == false
                  _that.showB == false
                  _that.showZ == false
                  _that.dis == true
                }else if(msg.is_comment==1){
                  _that.showA == false
                  _that.showB == false
                  _that.showZ == false
                  _that.dis == true
                  _that.$axios(apiSetting.getComment,{
                    order_goods_id:Checkend_order_goods_id,
                    basecatid:basecatid
                  }).then(res=>{
                    this.value4 = parseInt(res.data.data.goods_rank)
                    this.value5 = parseInt(res.data.data.service_rank)
                    this.value6 = parseInt(res.data.data.deliver_rank)
                    this.content = res.data.data.content
                    _that.showZ == true
                  })
                }
              }else if(msg.type=='talk'){
                ws.ws.send({
                  "type": "talk",
                  "token": token,
                  "group_msg_id": msg.group_msg_id
                })
               _that.chatModule = {
                 msg_content:msg.content,
                 group_id:msg.group_id,
                 from_id:msg.from_user_id,
                 user:{
                   avatar:msg.from_avatar,
                   nickname:msg.from_nickname,
                 }
               }
                var l = _that.ws.length
                _that.$set(_that.ws,l,_that.chatModule)
              }
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
