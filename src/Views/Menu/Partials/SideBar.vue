<template>
    <v-navigation-drawer v-model="sideMenu"  expand-on-hover elevation="1" rail permanent>
        <v-list class="mt-5" density="compact" nav>
            <v-list-item 
                v-for="(item, index) in menuItems" 
                @click="item.action"
                :prepend-icon="item.icon" 
                :title="item.title"
                class="pa-1 mt-3 letra-cor " 
                :key="index" 
            />

        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import router from "@/router"
import { ref } from "vue"

const sideMenu = ref(null)

const menuItems = [
    { title: 'Início', icon: 'mdi-home', action: () => router.push('/inicio') },
    { title: 'Cardápio', icon: 'mdi-food',  action: () => router.push('/cardapio')},
    { title: 'Promoções', icon: 'mdi-tag', action: ()   => router.push('/cardapio/promocao') },
    { title: 'Carrinho de Compras', icon: 'mdi-cart-check', action: () => router.push('/carrinho') },
    { title: 'Configurações', icon: 'mdi-cog' },
]
</script>

<style>
.letra-cor {
    color: #da7b08;
    cursor: pointer;
}
</style>
