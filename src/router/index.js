import vue from "vue"
import Router from "vue-router"
import Helloworld from '@/components/HelloWorld.vue'
import Link from "@/components/link.vue";
import Login from "@/components/login.vue";
import Registrasi from "@/components/register.vue";
import Navbar from "@/components/navbar.vue";

vue.use(Router)

function configRoutes() {
    return [
        {
            path:'/',
            name:'HelloWorld',
            component: Helloworld

        },
        {
            path:'/login',
            name:'Login',
            component: Login

        },
        {
            path:'/register',
            name:'Registrasi',
            component: Registrasi

        },
        {
            path:'/link',
            name:'Link',
            component: Link

        },
        {
            path:'/Navbar',
            name:'navbar',
            component: Navbar

        }

    ]

    }

    const link = new Router ({
  mode: "history",
  routes: configRoutes(),  
});
export default link;