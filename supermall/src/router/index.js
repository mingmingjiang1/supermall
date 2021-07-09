/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 11:20:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 18:32:54
 */


import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const categories = ()=> import("views/categories/Categories");
const home = ()=> import("views/home/Home");
const profile = ()=> import("views/profile/Profile");
const shop = ()=> import("views/shop/Shop");
const Detail = ()=>import("views/detail/Detail")

const routes = [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/categories",
        component: categories
    },
    {
        path: "/home",
        component: home
    },
    {
        path: "/profile",
        component: profile
    },
    {
        path: "/shop",
        component: shop
    },
    {
        path: "/detail/:id",
        component: Detail
    },
]


const router = new VueRouter({
    routes
})

export default router