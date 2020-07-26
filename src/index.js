import Vue from 'vue'
Vue.config.productionTip = false
import './componentIndex'
import Index from './Index.vue'

new Vue({
  render: h => h(Index)
}).$mount('#app')
