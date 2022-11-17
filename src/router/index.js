import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    //{
    //  path: '/about',
    //  name: 'about',
    //  // route level code-splitting
    //  // this generates a separate chunk (about.[hash].js) for this route
    //  // which is lazy-loaded when the route is visited.
    //  component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    //},
    {
        path: '/information',
        name: 'information',
        component: () => import('../components/Information.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/reservation',
        name: 'reservation',
        component: () => import('../components/Reservations.vue')
    },
    {
        path: '/',
        name: 'root',
        component: () => import('../components/Home.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
