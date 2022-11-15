import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../views/HomePage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        /* Static Pages*/
        {
            path: "/",
            name: "Home",
            component: HomePage,
      
        },

        {
            path: "/projects",
            name: "Projects Page",
            component: () => import("../views/ProjectsPage.vue"),
        },
      
    ],
    scrollBehavior(to){
        if (to.hash){
            return{
                el: to.hash,

            }
        }
        // always scroll to top
        return {
            top: 0
        }
    },
})

export default router