import Vue from "vue";
import ElementUI from "element-ui";
import App from "@/App.vue";
import { router } from "./router";
import  "./index.less";

Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  render(h) {
    return h(App);
  },
});
