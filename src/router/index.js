import { createRouter, createWebHistory } from 'vue-router'
import RepoList from '../components/RepoList.vue'
import Details from '../components/Details.vue'
import ErrorPage from '../components/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'repolist',
      component: RepoList
    },
    {
      path: '/repository/:id',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Details
    },
    {
      path: '/:catchAll(.*)', 
      name: 'NotFound', 
      component: ErrorPage
    }
  ]
})

export default router
