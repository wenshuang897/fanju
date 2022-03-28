import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "../public/rem.js"
import "../public/font/iconfont.css"
import "./style/index.css"

Vue.config.productionTip = false;
if(process.env.NODE_ENV =='development'){
  require("./mock")
}
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
