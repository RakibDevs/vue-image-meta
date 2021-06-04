import { createRouter, createWebHistory } from 'vue-router'
//import axios from "axios";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/images',
        name: 'Images',
        component: () => import('../views/Images.vue')
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router