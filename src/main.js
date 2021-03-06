import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { get } from './utils/http'

Vue.config.productionTip = false

import 'assets/reset.css'
import 'assets/common.css'
import 'swiper/css/swiper.min.css'
import 'assets/list.styl'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

;(async function(){
  let { appId,timestamp,nonceStr,signature } = await get({
    url:'/sign'
  })
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId, // 必填，公众号的唯一标识
    timestamp, // 必填，生成签名的时间戳
    nonceStr, // 必填，生成签名的随机串
    signature,// 必填，签名
    jsApiList: ["scanQRCode"] // 必填，需要使用的JS接口列表
  });
})()

