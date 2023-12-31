import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// i18n
import i18n from './i18n';

// moment
import moment from 'moment';
Vue.prototype.$moment = moment;

// uuid
import { v4 as uuidv4 } from 'uuid';
Vue.prototype.$uuidv4 = uuidv4;

// jquery
// import $ from 'jquery';
// Vue.prototype.$ = $;

Vue.config.productionTip = false

new Vue({
  i18n,
  // $,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
