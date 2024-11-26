import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue' 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
      //component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView // Use the imported ProductsView component
      //component: () => import('@/views/ProductsView.vue')
    },
    {
      path: '/products/:id',
      name: 'productDetails',
      component: ProductDetailsView
      //component: () => import('@/views/ProductDetailsView.vue')
    }
  ]
})

export default router
