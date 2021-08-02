import Vue from 'vue'
import VueRouter from 'vue-router'
import GridSystem from '@/views/GridSystem'
import Dashboard from '@/views/Dashboard'
import GridListPage from '@/views/GridListPage'
import Breakpoint from '@/views/Breakpoint'
import Typography from '@/views/Typography'
import Table from '@/views/Table'
import Form from '@/views/Form'
import Button from '@/views/Button'
import Icon from '@/views/Icon'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
    {
      path: '/grid-list-page',
      name: 'GridListPage',
      component: GridListPage
    },
    {
      path: '/break-point',
      name: 'Breakpoint',
      component: Breakpoint
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
