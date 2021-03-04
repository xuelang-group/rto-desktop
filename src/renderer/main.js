import "assets/css/app.scss";
import "assets/iconfont/iconfont.css";
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import Vuex from "vuex";
import Vue from 'vue';
import App from './App.vue';
import LogApp from './LogApp.vue';
import store from "./store";
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(Vuex);
Vue.use(Antd);

const storeInst = new Vuex.Store(store)

new Vue({
  store: storeInst,
  render: h => h(App),
}).$mount('.rto_header');

new Vue({
  store: storeInst,
  render: h => h(LogApp),
}).$mount('.rto_log');
