import { createRouter, createWebHistory } from 'vue-router'
import NProgress    from 'nprogress';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/images',
        name: 'Images',
        component: () => import('../views/Images.vue')
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

export default router