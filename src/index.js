import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import home from "@/pages/home"
import concat from "@/pages/concat"
import about from "@/pages/about"
import page404 from "@/pages/page404"

let router=new VueRouter({
  routes:[
    {path:"/",component:home},
    {path:"/concat",component:concat},
    {path:"/about",component:about},
    {path:"*",component:page404},
  ],
})