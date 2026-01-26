import { createRouter, createWebHistory } from 'vue-router'
import { useAccesoStore } from '@/stores/accesoStore';

const accesoStore = useAccesoStore()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/PresentacionView.vue') },
    { path: '/estudios', component: () => import('@/views/EstudiosView.vue') },
    { path: '/experiencia', component: () => import('@/views/ExperienciaView.vue') },
    { path: '/proyectos', component: () => import('@/views/ProyectosView.vue') },
    { path: '/acceso', component: () => import('@/views/AccesoView.vue') },
    {
      path: '/gestion',
      component: () => import('@/views/GestionView.vue'),
      meta: { requiresAdmin: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAdmin && !accesoStore.admin){
    next("/acceso")
  } else {
    next()
  }
});

export default router
