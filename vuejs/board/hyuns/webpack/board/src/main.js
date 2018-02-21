// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/store";
import BootstrapVue from 'bootstrap-vue'
Vue.config.productionTip = false
/* eslint-disable */
Vue.use(BootstrapVue)
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
