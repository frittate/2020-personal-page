import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css';

import VueMq from 'vue-mq'
import PrismicVue from "prismic-vue";
import linkResolver from "../src/utils/prismic/linkResolver"

Vue.use(VueMq, {
  breakpoints: {
    small: 1024,
    screen: Infinity,
  }
})

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver: linkResolver
}
);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
