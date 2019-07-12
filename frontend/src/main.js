import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

if(window.Cypress){
  window.app = app;
}