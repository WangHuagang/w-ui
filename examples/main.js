import Vue from 'vue'
import App from './App.vue'
import WUI from '../packages/index'

Vue.config.productionTip = false
Vue.use(WUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
