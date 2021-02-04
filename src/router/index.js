import Router from 'vue-router'
import Vue from 'vue'
import login from "@/components/pages/login";
import register from "@/components/pages/register";
import profile from "@/components/pages/userMe";
import listAllwinners from "@/components/pages/listAllwinners"

Vue.use(Router)

var router = new Router({
    routes:[
        {
            path:'/',
            name:'rootpage',
            redirect:'/login'
        },
        {
            path:'/login',
            name:'login',
            component:login
            
        },
        {
            path:'/register',
            name:'register',
            component:register
        },
        {
            path:'/me',
            name:'profile',
            component:profile
        },
        {
            path:'listAllwinners',
            name:'listAllwinners',
            component:listAllwinners
        }
    
    ],
    mode:'history'
})

export default router