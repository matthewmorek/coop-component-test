import Vue from 'vue';
import App from './App.vue';

import Fetch from 'whatwg-fetch';
import './css/main.scss';

Vue.config.productionTip = false;
Vue.prototype.$fetch = Fetch;

new Vue({
  render: h => h(App)
}).$mount('#app');
