import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes = [{
    path: '/',
    name: 'home',
    meta: { title: 'Курсы валют на сегодня' },
    component: HomePage
}, {
    path: '/currency',
    name: 'about',
    meta: { title: 'Конвертер валюты' },
    component: () => import('../pages/CurrencyPage.vue')
}]

const router = createRouter({
    history: createWebHistory(), routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string
    next()
})

export default router
