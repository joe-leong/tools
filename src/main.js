import Vue from 'vue'
import App from './App.vue'
import './icons'
// import '@/styles/index.scss'

import requestFunc from '@/utils/genApis'

import theme from '@/styles/variable.scss'

Vue.prototype.$theme = theme
Vue.prototype.$request = requestFunc


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
