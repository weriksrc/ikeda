import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from "./store";
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification";
import VueSweetalert2 from "vue-sweetalert2";
import vueVimeoPlayer from 'vue-vimeo-player'

Vue.use(Toast);
Vue.use(VueSweetalert2);
Vue.use(vueVimeoPlayer);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
