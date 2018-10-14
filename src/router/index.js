import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index",
      component: require('../App').default,//进入首页渲染视图index.vue
    },
    {
      path: '/index',
      component: require('../views/index').default,//进入首页渲染视图index.vue
      children:[
        {
          path: '/index',
          redirect:"/index/nav-index",
          component: require('../components/nav-index').default,//第一次进入首页默认显示！！！！导航栏的“首页”项路由
        },
        {
          path: 'nav-index',
          component: require('../components/nav-index').default,//导航栏的“首页”项路由
          children:[
            {
              path: '/index',
              component: require('../components/nav-index').default,
            }
          ]
        },
        {
          path: 'nav-detailed',
          component: require('../components/nav-detailed').default,//导航栏的“详测”项路由
        },
        {
          path: 'nav-simple',
          component: require('../components/nav-simple').default,//导航栏的“轻测”项路由
        },
        {
          path: 'nav-my',
            component: require('../components/nav-my').default,//导航栏的“我的”项路由
          },
        {
          path: 'nav-my_dashi',
          component: require('../components/nav-my_dashi').default,//导航栏的“我的”路由里面  ==如果我是大师==跳转到我是大师界面路由
        },
      ]
    },
    {
      path: '/simple-main',
      component: require('../views/simpleMain').default,//热点轻测跳转到详细的内容页面
      children:[
        {
          path: '/simple-main',
          component: require('../components/simpleMain-theme').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: '/simple-main2',
          component: require('../components/simple-main-2').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'dashiuserchat',
          component: require('../components/dashi_user_chat').default,//大师订单--详测订单--与客户聊天界面
        },
        {
          path: 'leavingmessage',
          component: require('../components/common/LeavingMessage').default,///用戶未讀消息
        },
        {
          path: 'userSeting',
          component: require('../components/UserSetting').default,///用戶未讀消息
        },
        {
          path: 'dashiuserchatdatale',
          component: require('../components/_dashiuser_chat_detale').default,//大师订单--详测订单--与客户聊天界面
        },
        {
          path: 'immediately',
          component: require('../components/immediately-ansonen').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'payorderorderdetale',
          component: require('../components/pay_order_detale').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'dashitouser',
          component: require('../components/dashi-to-user').default,//大师--轻测--去回复---聊天界面---路游
        },
        {
          path: 'submitOrder',
          component: require('../components/submit-order').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'payorder',
          component: require('../components/pay-order').default,//订单支付---确认信息---界面
        },
        {
          path: 'alldashiorderqiangda',
          component: require('../components/all_dashi_order_qiangda').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'dashiorder',
          redirect:"/simple-main/dashiorder/alldashiorder",
          component: require('../components/all-dashi-order').default,//大师的全部订单页面路游
          children:[
            {
              path: 'alldashiorder',
              component: require('../components/all_dashi_order_allorder').default,//大师的全部订单页面路游
            },

            {
              path: 'allansonewn',
              component: require('../components/all_dashi_order_ansern').default,//大师的全部订单页面路游
            },
            {
              path: 'allqingce',
              component: require('../components/all_dashi_order_qingce').default,//大师的全部订单页面路游
            },
            {
              path: 'allxiangce',
              component: require('../components/all_dashi_order_xiangce').default,//大师的全部订单页面路游
            }
          ]
        },
        {
          path: 'ansower',
          component: require('../components/simpleMain-theme').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'qiangda',
          component: require('../components/all_dashi_order_qiangda').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'allcommit',
          component: require('../components/all-commit').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'nowpay',
          component: require('../components/now-pay').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'infoproblem',
          component: require('../components/info-problem').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'problemlist',
          component: require('../components/problem-list').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'dashilist',
          component: require('../components/dashi_list').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'dashidetailed',
          component: require('../components/dashi-detailed').default,//热点轻测跳转到详细的内容页面
        },
        {
          path: 'dashiqianbao',
          component: require('../components/all_dashi_qianbao').default,//-----大师钱包-------内容页面
          redirect:"/simple-main/dashiqianbao/dashiqianbaoAll",
          children:[
            {
              path: 'dashiqianbaoAll',
              component: require('../components/all_dashi_qianbao_all').default,//-----大师钱包----全部收入支出-------内容页面
            },
            {
              path: 'dashiqianbaoExpenditure',
              component: require('../components/all_dashi_qianbao_expenditure').default,//-----大师钱包----支出-------内容页面
            },
            {
              path: 'dashiqianbaoIncome',
              component: require('../components/all_dashi_qianbao_income').default,//-----大师钱包----收入-------内容页面
            }
          ]
        },
        {
          path: 'allorder',
          component: require('../components/all-order').default,//热点轻测跳转到全部订单的内容页面
          children:[
            {
              path: '/simple-main/allorder',
              component: require('../components/all-order_all').default,//热全部页面
            },
            {
              path: 'all',
              component: require('../components/all-order_all').default,//全部页面
            },
            {
              path: 'waitpay',
              component: require('../components/all-order_waitpay').default,//待支付
            },
            {
              path: 'waitcommit',
              component: require('../components/all-order_commit').default,//待评价
            },
            {
              path: 'starting',
              component: require('../components/all-order_starting').default,//进行中
            },
          ]
        },
      ]
    }
  ]
})
