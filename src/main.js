import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css';
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    small: 1024,
    screen: Infinity,
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
