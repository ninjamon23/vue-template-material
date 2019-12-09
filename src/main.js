import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from 'material-components-vue/dist/button'
import Card from 'material-components-vue/dist/card'

Vue.use(Button)
Vue.use(Card)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
