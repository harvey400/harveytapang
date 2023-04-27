import { createRouter, createWebHashHistory } from "vue-router";
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';

const routes = [
    {
        path:'',
        name:'about',
        component: About
    },{
        path:'/projects',
        name:'projects',
        component: Projects
    }
]

const router = new createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router