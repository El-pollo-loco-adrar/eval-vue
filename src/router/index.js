import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/exercice',
            name: 'exercice',
            component: () => import('../views/Exercice.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue')
        }
    ]
})

export default router;