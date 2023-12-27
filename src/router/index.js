// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Index.vue')
      },
      {
        path: 'component-communication',
        name: 'ComponentCommunication',
        component: () => import('@/views/ComponentCommunication.vue')
      },
      {
        path: 'form-template',
        name: 'FormTemplate',
        component: () => import('@/views/FormTemplate.vue')
      },
      {
        path: 'dynamic-form',
        name: 'DynamicForm',
        component: () => import('@/views/DynamicForm.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
