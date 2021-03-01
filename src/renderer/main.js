import "assets/css/app.scss";
import "assets/iconfont/iconfont.css";
import Vuex from "vuex";
import Vue from 'vue';
import App from './App.vue';
import LogApp from './LogApp.vue';
import store from "./store";

Vue.config.productionTip = false
Vue.use(Vuex);

const storeInst = new Vuex.Store(store)

new Vue({
  store: storeInst,
  render: h => h(App),
}).$mount('.rto_header');

new Vue({
  store: storeInst,
  render: h => h(LogApp),
}).$mount('.rto_log');
