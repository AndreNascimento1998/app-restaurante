import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'menu',
        component: () => import('@/Views/Menu/MenuPage.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: '/inicial',
                name: 'home',
                component: () => import('@/Views/Home/HomePage.vue'),
                meta: { requireAuth: true },
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;