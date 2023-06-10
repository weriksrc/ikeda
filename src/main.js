import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from "./store";
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueSweetalert2 from "vue-sweetalert2";
import vueVimeoPlayer from 'vue-vimeo-player'
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import HighchartsNoData from "highcharts/modules/no-data-to-display";

Vue.use(Toast);
Vue.use(VueSweetalert2);
Vue.use(vueVimeoPlayer);


HighchartsNoData(Highcharts);
Vue.use(HighchartsVue, { Highcharts });

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
