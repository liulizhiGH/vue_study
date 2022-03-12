import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import Concat from "@/pages/Concat.vue";
import About from "@/pages/About.vue";
import TodoList from "@/pages/TodoList";
import Page404 from "@/pages/Page404.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/concat/list", component: Concat },
    { path: "/about", component: About },
    { path: "/todolist", component: TodoList },
    { path: "*", component: Page404 },
  ],
});
