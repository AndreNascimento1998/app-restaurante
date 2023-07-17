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
            },
            {
                path: '/combo-editar',
                name: 'editorCombo',
                component: () => import('@/Views/CarteEdit/ComboPage.vue')
            },
            {
                path: '/lanche-editar',
                name: 'editorLanche',
                component: () => import('@/Views/CarteEdit/LanchePage.vue')
            },
            {
                path: '/promocao-editar',
                name: 'editorPromocao',
                component: () => import('@/Views/CarteEdit/PromocaoPage.vue')
            },
            {
                path: '/prato-principal-editar',
                name: 'editorPratoPrincipal',
                component: () => import('@/Views/CarteEdit/PratoPrincipalPage.vue')
            },
            {
                path: '/prato-frio-editar',
                name: 'editorFrioPrincipal',
                component: () => import('@/Views/CarteEdit/PratoFrioPage.vue')
            },
            {
                path: '/bebida-editar',
                name: 'editorBebida',
                component: () => import('@/Views/CarteEdit/BebidaPage.vue')
            }
            
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;