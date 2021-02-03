import Router from 'vue-router'
import Vue from 'vue'
import login from "@/components/pages/login";
import register from "@/components/pages/register";
import profile from "@/components/pages/userMe";

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
        }
    
    ],
    mode:'history'
})

export default router