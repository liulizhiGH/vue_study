import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import Concat from "@/pages/Concat.vue";
import Concatson from "@/pages/Concatson.vue";
import About from "@/pages/About.vue";
import TodoList from "@/pages/TodoList";
import Page404 from "@/pages/Page404.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "home", path: "/", component: Home },
    {
      name: "concat",
      path: "/concat",
      component: Concat,
      // 嵌套子路由，不使用/，直接写路径名称即可
      children: [
        { name: "concatson", path: "son", component: Concatson },
      ],
    },
    { name: "about", path: "/about/", component: About },
    { name: "todolist", path: "/todolist", component: TodoList },
    { name: "404page", path: "*", component: Page404 },
  ],
});
