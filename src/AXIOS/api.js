
const serviceModule = {
  LoginGetToken: {//用userID去登录，并拿到token
    url:"http://xingybc.com/api/user/direct_login",
    method: 'get',
    token:""
  },
  Disanfang: {//第三方登录，并拿到token
    url:"http://xingybc.com/third/api/connect/wechat",
    method: 'get',
    token:""
  },
  Update: {//此接口用于上传文件
    url: "http://xingybc.com/api/common/upload",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  UpdateNmaeSexy: {//此接口用于，上传个人头像和名字/性别
    url: "http://xingybc.com/api/user/profile",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  GetIndexPage: {//用于获取首页的信息
    url:"http://xingybc.com/api/user/index",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //会员
  Member:{//目前为空接口
    url:"http://xingybc.com/api/user/index",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //详测口子
  Detaile:{
    url:"http://xingybc.com/api/xiangce/index",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //轻测首页数据口子
  Qingce:{
    url:"http://xingybc.com/api/qa/index",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //轻测列表
  qingceList:{
    url:"http://xingybc.com/api/qa/qingceList",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //轻测问题详情
  qingceDeail:{
    url:"http://xingybc.com/api/qa/qingce",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //选取大师
  MasterList:{
    url:"http://xingybc.com/api/qa/chooseMasterList",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //提交问题
  submitAnswer: {
    url:"http://xingybc.com/api/qa/submitAnswer",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },

  //提交问题
  toCloseXiangceGroup: {
    url:"http://xingybc.com/api/chat/toCloseXiangceGroup",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },


  //提交详测服务订单，用于创建详测服务订单，该接口需要登录；接口请求成功后返回订单ID，前台跳转到订单确认支付页面
  submitOrder: {
    url:" http://xingybc.com/api/xiangce/submitOrder",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //大师个人中心
  masterCenter: {
    url:" http://xingybc.com/api/master/index",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //获取大师收支账单列表
  getAccountAllList: {
    url:" http://xingybc.com/api/master/getAccountAllList",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //获取大师支出账单列表
  getAccountOutList: {
    url:" http://xingybc.com/api/master/getAccountOutList",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //获取大师收入账单列表
  getAccountInList: {
    url:" http://xingybc.com/api/master/getAccountInList",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },

  //验证当前用户是否为大师，主要用于用户中心跳转大师个人中心前，验证，如果不为大师，将会弹出联系我们的提示信息，如果验证成功，直接跳转，再进一步加载大师中心信息
  checkIsMaster: {
    url:" http://xingybc.com/api/user/checkIsMaster",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },


  //订单确认支付页面，根据订单ID获取订单信息和支付信息
  orderpayIndex: {
    url:" http://xingybc.com/api/orderpay/index",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //确认支付，获取支付数据，检查订单是否确认，未确认修改为确认状态，然后生成jsapi支付数据，如果没有使用微信登录，将会提示登录（需要重新登陆的错误代码为{errorcode：401}）
  getPayData: {
    url:" http://xingybc.com/api/orderpay/getPayData",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },



  notify_simulation: {
    url:" http://xingybc.com/api/orderpay/notify_simulation",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //
  wenda: {
    url:" http://xingybc.com/api/qa/wenda",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //获取群组聊天记录
  getHis: {
    url:" http://xingybc.com/api/chat/getHis",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },

  //发送消息到群组
  sendToGroup: {
    url:" http://xingybc.com/api/chat/sendToGroup",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //获取用户中心未读消息列表
  getUnreadChats: {
    url:" http://xingybc.com/api/chat/getUnreadChats",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //获取评价
  getComment: {
    url:" http://xingybc.com/api/comment/getComment",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //获取评价
  center: {
    url:"http://xingybc.com/api/user/index",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },


  //获取详测大师评价列表（懒加载分页）
  getXiangceCommentList: {
    url:" http://xingybc.com/api/comment/getXiangceCommentList",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },


  //大师问答订单列表页面
  masterWendaOrder: {
    url:" http://xingybc.com/api/orderpay/masterWendaOrder",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //大师轻测订单列表页面
  masterQingceOrder: {
    url:" http://xingybc.com/api/orderpay/masterQingceOrder",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //大师详测订单列表页面
  masterXiangceOrder: {
    url:" http://xingybc.com/api/orderpay/masterXiangceOrder",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //大师所有订单列表页面
  masterAllOrder: {
    url:" http://xingybc.com/api/orderpay/masterAllOrder",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //大师抢单订单列表页面，用于展示所有当前大师可以接单的抢答订单
  masterGrabOrderList: {
    url:" http://xingybc.com/api/orderpay/masterGrabOrderList",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //大师提交抢单请求，大师请求抢单
  masterGrabOrder: {
    url:" http://xingybc.com/api/orderpay/masterGrabOrder",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },



  //大师主页接口，获取大师主页相关数据
  masterIndex: {
    url:" http://xingybc.com/api/xiangce/masterIndex",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //获取大师当前基础类目下，各类目价格列表，用于大师首页选择并下单
  getMasterPrice: {
    url:" http://xingybc.com/api/xiangce/getMasterPrice",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //类目大师列表，用于详测首页点击类目后显示对应类目下所有大师信息的接口
  catMasterList: {
    url:" http://xingybc.com/api/xiangce/catMasterList",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //大师服务类目页面数据接口，获取大师某个服务类目对应的数据
  masterCatIndex: {
    url:" http://xingybc.com/api/xiangce/masterCatIndex",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },

  //提交评价
  commitComment: {
    url:" http://xingybc.com/api/comment/commitComment",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },



  //提交轻测问答订单用户基本信息，用于提交订单对应的用户数据，提交完成后，请跳转到进行中订单列表，不直接跳转到聊天界面，因为，可能用户选择了几个大师
  submitBaseInfo: {
    url:" http://xingybc.com/api/qa/submitBaseInfo",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //-------------------------------------------下为全部的订单状态
  //用户待付款订单页面，获取用户所有未付款的订单信息
  userPendingPayOrder: {
    url:" http://xingybc.com/api/orderpay/userPendingPayOrder",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //用户进行中订单页面，获取用户所有正在进行中的订单信息
  userInServiceOrder: {
    url:" http://xingybc.com/api/orderpay/userInServiceOrder",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //用户待评价订单页面，获取用户所有待评价的订单信息
  userToCommentOrder: {
    url:" http://xingybc.com/api/orderpay/userToCommentOrder",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //用户所有订单页面，获取用户所有订单信息
  userAllOrder: {
    url:" http://xingybc.com/api/orderpay/userAllOrder",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //取消订单，未支付的订单可以取消
  cancelOrder: {
    url:" http://xingybc.com/api/orderpay/cancelOrder",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //删除已完成的订单
  delCompletedOrder: {
    url:" http://xingybc.com/api/orderpay/delCompletedOrder",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //删除已取消的订单
  delCancelledOrder:{
    url:" http://xingybc.com/api/orderpay/delCancelledOrder",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  //-------------------------------------------上为全部的订单状态



  //进入聊天界面前调用，验证相关信息
  chatIndex: {
    url:" http://xingybc.com/api/chat/index",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },

  CheckTokenLife: {//此接口用于检查Token是否过期
    url:"http://xingybc.com/api/token/check",
    method: 'get',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  },
  GetIndex: {//此接口用于检查Token是否过期
    url:"http://xingybc.com/api/index/index",
    method: 'post',
    token:"",
    ContentType:"application/x-www-form-urlencoded;charset=UTF-8"
  }
}
const apiSetting = {...serviceModule}

export default apiSetting

