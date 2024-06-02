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
