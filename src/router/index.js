import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/Views/Login/LoginPage.vue')
    },
    {
        path: '/',
        name: 'menu',
        component: () => import('@/Views/Menu/MenuPage.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: '/inicio',
                name: 'home',
                component: () => import('@/Views/Home/HomePage.vue'),
                meta: { requireAuth: true },
            },
            {
                path: '/cardapio',
                name: 'cardapio',
                component: () => import('@/Views/Cardapio/CardapioPage.vue')
            },
            {
                path: '/cardapio/:nome',
                name: 'cardapioComNome',
                component: () => import('@/Views/Cardapio/CardapioPage.vue')
            },
            {
                path: '/carrinho',
                name: 'carrinho',
                component: () => import('@/Views/Carrinho/CarrinhoPage.vue')
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;