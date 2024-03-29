import Vue from "vue";
import ElementUI from "element-ui";
import App from "@/App.vue";
import { router } from "./router";
import { store } from "./store";
import "./index.less";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  store,
  render(h) {
    return h(App);
  },
});
