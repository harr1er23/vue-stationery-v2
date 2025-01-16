import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/pages/Auth.vue'
import Products from '@/pages/Products.vue'
import Profile from '@/pages/Profile.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import Favorites from '@/pages/Favorites.vue'
import Category from '@/pages/Category.vue'

const routes = [
  {
    name: 'App',
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'Products',
        component: Products
      },
      { 
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/favorites',
        name: 'Favorites',
        component: Favorites
      },
      {
        path: '/category/:id',
        name: 'Category',
        component: Category
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
