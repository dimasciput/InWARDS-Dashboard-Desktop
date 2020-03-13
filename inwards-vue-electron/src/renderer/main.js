/* eslint-disable no-unused-vars */
import Vue from 'vue';
import axios from 'axios';

import $ from 'jquery';
import 'ol/ol.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import '@/static/css/font-awesome.min.css';
import '@/static/css/custom.css';
import '@/utils/helpers.js';

import App from './App';
import router from './router';
import store from './store';
import db from './datastore';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$db = db;
Vue.prototype.$ = $;
Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app');
