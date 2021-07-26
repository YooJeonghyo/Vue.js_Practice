import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue' //메인 컴포넌트 호출
import List from '../components/board/List.vue' //게시판 리스트 컴포넌트 호출
import Write from '../components/board/Write.vue' //게시판 작성 컴포넌트 호출
import View from '../components/board/View.vue' //상세보기 컴포넌트 호출

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/board/list',
    name: 'List',
    component: List
  },
  {
    path: '/board/write',
    name: 'Write',
    component: Write
  },
  {
    path: '/board/view',
    name: 'View',
    component: View
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
