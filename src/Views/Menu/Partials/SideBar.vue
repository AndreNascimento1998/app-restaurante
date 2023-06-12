<template>
    <v-navigation-drawer v-model="sideMenu"  expand-on-hover elevation="1" rail permanent>
        <v-list class="mt-5" density="compact" nav>
            <v-list-item 
                v-for="(item, index) in menuItems" 
                :prepend-icon="item.icon" 
                :title="item.title"
                class="pa-1 mt-3 letra-cor " 
                :key="index" 
            />

        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue"

const sideMenu = ref(null)

const menuItems = [
    { title: 'Início', icon: 'mdi-home' },
    { title: 'Cardápio', icon: 'mdi-food' },
    { title: 'Promoções', icon: 'mdi-tag' },
    { title: 'Carrinho de Compras', icon: 'mdi-cart-check' },
    /* 
    { title: 'Quem somos nós?', icon: 'mdi-information' },
    {title: 'Contato', icon: 'mdi-whatsapp'},
    */
    { title: 'Configurações', icon: 'mdi-cog' },
]
</script>

<style>
.letra-cor {
    color: #da7b08;
}
</style>
