<template>
  <div class="submit-order">
    <div class="submit-order-top">
      <van-steps :active="abc" active-color="#fdaebd">
        <van-step>选择问题</van-step>
        <van-step>确认订单</van-step>
        <van-step>完成支付</van-step>
        <van-step>填写信息</van-step>
        <van-step>等待回复</van-step>
      </van-steps>
    </div>
    <div class="submit-order-bom">
      <p class="submit-order-bomPA">基本信息</p>
      <van-cell-group>
        <div class="a">
          <van-field
            v-model="username"
            icon="success"
            placeholder="请填写姓名"
            @click-icon="username = ''"
          >
          </van-field>
          <img class="A" src="../../static/images/ORDER/姓名.png"/>
        </div>
        <div class="a b">
          <van-field
            v-model="passwordA"
            :placeholder="sexy"
          >
          </van-field>
          <img class="A" src="../../static/images/ORDER/性别.png"/>
          <van-switch @change="sexyChange" v-model="checked"/>
        </div>
        <div class="a c">
          <van-field
            v-model="passwordB"
            :disabled="shoeopen"
            @focus="ShowChoiceBBB"
            placeholder="1992-03-06"
          ></van-field>

          <img class="A" src="../../static/images/ORDER/出生年月.png"/>
          <van-datetime-picker
            v-model="currentDatea"
            v-if="shoeopen"
            type="date"
            @confirm="getValuesa"
          />
          <van-button @click="change" :class="{'sdf':isTrue,'active':isA}" text="阳历" type="default"></van-button>
          <van-button @click="change" :class="{'sdf':isTrue,'sdfw':isTrue,'active':!isA}" text="阴历" type="default"></van-button>
        </div>
        <div class="a">
          <van-field
            v-model="passwordC"
            placeholder="请选择生辰..."
            :disabled="show3"
            @focus="ShowChoice3"
          ></van-field>
          <img class="A" src="../../static/images/ORDER/时间 钟表.png" />
          <van-datetime-picker
            v-model="currentDate"
            type="time"
            :min-hour="minHour"
            :max-hour="maxHour"
            v-if="show3"
            @confirm="getValues"
          />
        </div>
        <div class="a">
          <van-field
            v-model="passwordD"
            placeholder="请选择出生地..."
            @focus="ShowChoice"
            :disabled="showC"
          ></van-field>
          <img class="A" src="../../static/images/ORDER/定位.png"/>
          <van-area @confirm="GetInfo" v-if="showC" :area-list="areaList" />
        </div>
        <div class="a">
          <van-field
            v-model="passwordE"
            placeholder="请选择现居地...."
            @focus="ShowChoiceE"
            :disabled="showE"
          ></van-field>
          <img class="A" src="../../static/images/ORDER/定位.png"/>
          <van-area @confirm="GetInfoE" v-if="showE" :area-list="areaList" />
        </div>
        <div class="a">
          <van-field
            v-model="passwordF"
            placeholder="请输入三个数字数字"
            :disabled="showDown"
            @focus="ShowChoiceF"
          ></van-field>
          <img class="A" src="../../static/images/ORDER/数字.png"/>
        </div>
        <div class="a">
          <van-field
            v-model="passwordG"
            placeholder="特殊情况请注明（10字以内）"
          ></van-field>
          <img class="A" src="../../static/images/ORDER/待评价.png"/>
        </div>
      </van-cell-group>
    </div>
    <div class="submit-order-bomP">
      <p><a @click="submitUser" href="javascript:;">提交信息</a></p>
    </div>
    <div v-if="showalert" class="alert">
      <p class="alertPa">请输入三个数字</p>
      <p class="alertPb">
        <span>
          <div class="icon">
              <img v-on:mouseenter="ChanggeUrl" v-if="showa" src="../../static/images/shang.png" />
              <img v-if="showa" src="../../static/images/xia.png" />
          </div>
          <input v-model="pA" @focus="goa()" type="text">
        </span>
        <span>
           <div class="icon">
              <img v-on:mousedown="ChanggeUrl" v-on:mouseup="ChanggeUrl" v-if="showb" :src="url" />
              <img v-if="showb" src="../../static/images/xia.png" />
          </div>
          <input v-model="pB" @focus="gob()" type="text">
        </span>
        <span>
           <div class="icon">
              <img v-if="showc" src="../../static/images/shang.png" />
              <img v-if="showc" src="../../static/images/xia.png" />
          </div>
          <input v-model="pC" @focus="goc()" type="text">
        </span>
      </p>
      <p class="alertPc"><span @click="showalertDown" class="span">取消</span><span @click="showalertUP">确定</span></p>
    </div>
  </div>
</template>
<script>
  import area from "../assets/acsssess/area"
  import apiSetting from "../AXIOS/api"
  export default {
    name:"submit-order",
    data(){
      return {
        showBBB:false,
        showDown:false,
        currentDatea: new Date(),
        a:0,
        shoeopen:false,
        sexyNum:1,
        p:"",
        url:"../../static/images/shang.png",
        pA:"",
        pB:"",
        pC:"",
        showalert:false,
        showa:false,
        showb:false,
        showc:false,
        areaList:area,//地区选择的文件
        isA:true,//控制点击后添加active类名，从而添加删除样式
        isTrue:true,
        abc:2,
        showC:false,//控制地区选项表的显示和隐藏
        showE:false,
        searchResult: [],
        username:"",
        passwordA:"",
        passwordB:"",
        passwordC:"",
        passwordD:"",
        passwordE:"",
        passwordF:"",
        passwordG:"",
        checked:true,//表示男女选项默认状态时选中的状态
        sexy:"男",
        A:"",//表示地址选项结果的数据
        currentDate: '12:00',//表示默认的时间。生辰选择项
        minHour:0,//时间起点
        maxHour:23,//最大时间
        show3:false,//控制时间列表的显示影藏
      }
    },
    methods: {
      onSave() {
        Toast('save');
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      },
      change(){
        this.isA = !this.isA
        if(this.a == 0){
          this.a=1
        }else {
          this.a=0
        }
      },
      ShowChoice(){
        this.showC = true
      },
      ShowChoiceE(){
        this.showE = true
      },
      ShowChoiceF(){
        this.showalert = true
        this.showDown = true
      },
      showalertDown(){
        this.showalert = false
      },
      showalertUP(){
        this.showalert = false
        this.passwordF = this.pA+"-"+this.pB+"-"+this.pC
        this.p = this.pA+","+this.pB+","+this.pC
        this.showDown = false
      },
      ShowChoice3(){
        this.show3 = true
      },
      GetInfo(datas){
        this.passwordD= datas[0].name+"-"+datas[1].name+"-"+datas[2].name
        this.showC = false
      },
      GetInfoE(datas){
        this.passwordE= datas[0].name+"-"+datas[1].name+"-"+datas[2].name
        this.showE = false
      },
      getValues(datas){
        this.passwordC = datas
        this.show3 = false
      },
      ShowChoiceBBB(){
        this.shoeopen = true
        this.showBBB = true
      },
      goa(){
        this.showa = true;
        this.showb = false;
        this.showc = false;
      },
      gob(){
        this.showb = true;
        this.showa = false;
        this.showc = false;
      },
      goc(){
        this.showc = true;
        this.showa = false;
        this.showb = false;
        this.showDown = true
      },
      ChanggeUrl(){
        // if(this.url == "../../static/images/shang.png"){
        //   console.log(this.url)
        //   this.url="../../static/images/active_shang.png"
        // }else {
        //   console.log(this.url)
        //   this.url = "../../static/images/shang.png"
        // }
      },
      submitUser(){
        var order_id = sessionStorage.getItem("OrderDetaileID")
        var basecatid = sessionStorage.getItem("basecatid")
        var name = this.username//用户名字
        var gender = this.sexyNum//用户性别
        var birthdate = this.passwordB//用户生辰年月日
        var date_type = this.a//阴历阳历
        var birthtime = this.passwordC//生辰分钟
        var birthplace = this.passwordD//出生地
        var home_addr =this.passwordE//生活地
        var choose_nums = this.passwordF//选择的数字
        var special_note =  this.passwordG//特殊说明
        if(!name){
          // alert("请输入名字")
          this.$toast('请输入名字');

          return
        }else if(!birthdate){
          this.$toast('请输入生日');
          return
        }else if(!birthtime){
          this.$toast('请输入出生的具体时间点');
          return
        }else if(!birthplace){
          this.$toast('请输入出生地');
          return
        }else if(!home_addr){
          this.$toast('请输入现居地');
          return
        }else if(!this.pA||!this.pB||!this.pC){
          this.$toast('请补全三位数字');
          return
        }
        var that = this

        this.$axios(apiSetting.submitBaseInfo,{
          order_id:order_id,
          basecatid:basecatid,
          name:name,
          gender:gender,
          birthdate:birthdate,
          date_type:date_type,
          birthtime:birthtime,
          birthplace:birthplace,
          home_addr:home_addr,
          choose_nums:choose_nums,
          special_note:special_note
        }).then(res=>{
          var id = sessionStorage.getItem("ID")
          this.$axios(apiSetting.chatIndex,{
            order_goods_id:id
          }).then(res=>{
            var ordergoodsid
            sessionStorage.setItem("ordergoodsid",233)
            var id = sessionStorage.getItem("ordergoodsid")
            var basecatid = sessionStorage.getItem("basecatid")
            this.$axios(apiSetting.chatIndex,{
              basecatid:basecatid,
              order_goods_id:id
            }).then(res=>{
              that.$router.push({
                path:"/simple-main/allorder"
              })
            })
          })
        })
      },
      getValuesa(value){
        console.log(value)
        function formatTen(num) {
          return num > 9 ? (num + "") : ("0" + num);
        }
        function formatDate(date) {
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var hour = date.getHours();
          var minute = date.getMinutes();
          var second = date.getSeconds();
          return year + "-" + formatTen(month) + "-" + formatTen(day);
        }
      this.passwordB =  formatDate(value)
        this.shoeopen = false
        console.log(  this.passwordB)
      },
      sexyChange(){
        if(this.checked){
          this.passwordA = "男"
          console.log(this.passwordA)
        }else {
          this.passwordA = "女"
        }
        if(this.passwordA=="男"){
          this.sexyNum = 1
        }else {
          this.sexyNum = 2
        }
      }
      // onInput(checked) {
      //   Dialog.confirm({
      //     title: '提醒',
      //     message: '是否切换开关？'
      //   }).then(() => {
      //     this.checked = checked;
      //   });
      // }
    }
  }
</script>

<style scoped>

</style>
