import { createRouter, createWebHistory } from 'vue-router'
import TerminalView from '@/views/TerminalView.vue'

const routes = [
    {
        path: '/',
        name: 'terminal',
        component: TerminalView
    },
    // Redirect all other paths to terminal
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { left: 0, top: 0 }
    }
})

export default router
