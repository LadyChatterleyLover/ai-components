// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './global'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './directive'
if (process.env.NODE_ENV !== 'production' ) require('./mock')
import api from './http/api'
import dayjs from 'dayjs'
// Vue.use(ElementUI)

Vue.prototype.$dayjs = dayjs
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
