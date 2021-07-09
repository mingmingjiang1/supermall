/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-26 17:05:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-03 20:35:14
 */
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import less from 'less'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'


Vue.use(less)
Vue.use(toast)

Vue.config.productionTip = false
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
