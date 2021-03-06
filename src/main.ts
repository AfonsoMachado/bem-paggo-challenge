import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/global.css";
import "@/assets/css/colors.css";
import "@/assets/css/modal.css";
import "sweetalert2/dist/sweetalert2.min.css";
import VueSweetalert2 from "vue-sweetalert2";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;

const sweetAlertOptions = {
  confirmButtonColor: "#2f3676",
  confirmButtonText: "OK",
};

Vue.use(VModal);
Vue.use(VueSweetalert2, sweetAlertOptions);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
