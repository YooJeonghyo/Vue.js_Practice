import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Introduce from '../components/Introduce.vue'
import Page from '../components/Page.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:  '/',
            name: Home,
            component: Home
        },
        {
            path:  '/introduce',
            name: Introduce,
            component: Introduce
        },
        {
            path:  '/page',
            name: Page,
            component: Page
        },
    ]
});