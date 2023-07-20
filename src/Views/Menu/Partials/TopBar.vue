<template>
    <v-app-bar elevation="1" class="pa-1" height="52">
        <v-col v-show="smAndUp" sm="1" >
            <v-toolbar-title  class="justify-left">
                <v-img  src="https://static.vecteezy.com/system/resources/previews/014/971/638/non_2x/food-logo-design-template-restaurant-free-png.png" height="90"/>
            </v-toolbar-title>
        </v-col>
        <h2>Food </h2><h2 class="color-secondary mr-1 ml-1">Chain</h2><h2>Magnate</h2>
        <v-spacer />

        <span v-show="smAndUp">
            <v-icon class="color-principal" size="35px" @click="(() => router.push('/carrinho'))">mdi-shopping</v-icon> 
        </span>
            <span v-show="smAndUp" class="cartShop-letter  mr-7">R$ {{ Math.abs(priceCart).toFixed(2) }} <p>itens: {{ itemsQuantity }}</p></span>
            <v-menu left bottom>
                <template #activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-icon class="color-principal" size="35px">mdi-account-circle</v-icon>
                    </v-btn>
                </template>
                
            <v-list>
                <v-list-item v-for="(option, i) in globalStore.isLog ? options : optionNoLog" :key="i" @click="option.action">
                    <v-list-item-title class="color-principal" ><v-icon > {{ option.icon }} </v-icon>  {{ option.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        
    </v-app-bar>
</template>

<script setup>
import router from "@/router";
import { useCarrinhoCompras } from "@/stores/CarrinhoCompras";
import { useGlobalStore } from "@/stores/GlobalStore";
import {  computed, ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const cartShopStore = useCarrinhoCompras()
const globalStore = useGlobalStore()
const kartShopStore = useCarrinhoCompras()
const { smAndUp } = useDisplay()
const priceCart = computed(() => kartShopStore.precoStore)
const itemsQuantity = computed(() => kartShopStore.itensQnt)

const optionNoLog = ref([
    {
        text: 'Entrar',
        icon: 'mdi-login',
        action: () => router.push('/login')
    }
])

const options = ref([
    { 
        text: 'Perfil', 
        icon: 'mdi-account',
        action: () => alert('Oi') },
    {
        text: 'Editar Perfil', 
        icon: 'mdi-pencil',
        action: () => alert('Oi')},
    {
        text: 'Sair', 
        icon: 'mdi-logout',
        action: () => loggout()
    },
])

function loggout() {
    globalStore.isLog = false
    globalStore.isAdm = false
    cartShopStore.itensQnt = 0
    cartShopStore.precoStore = 0
    cartShopStore.carrinhoDeCompras.slice(0)
    router.push('/login')
}

</script>

<style scoped>

.color-principal {
    color: #da7b08;
}


.color-principal:hover{
    color: #2eae17;
}

.color-secondary{
 color: #2eae17;
}

.cartShop-letter {
    font-size: 12px;
}
</style>