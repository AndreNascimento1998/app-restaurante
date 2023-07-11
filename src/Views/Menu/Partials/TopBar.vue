<template>
    <v-app-bar elevation="1" class="pa-1" height="52">
        <v-col cols="1" class="ml-10">
            <v-toolbar-title class="justify-left">
                <v-img src="https://static.vecteezy.com/system/resources/previews/014/971/638/non_2x/food-logo-design-template-restaurant-free-png.png" height="90"/>
            </v-toolbar-title>
        </v-col>
        <h2>Food </h2><h2 class="collor-secondary mr-1 ml-1">Chain</h2><h2>Magnate</h2>
        
        <v-spacer />
        <span>
            <v-icon class="collor-principal" style="cursor: pointer;" size="35px" @click="(() => router.push('/carrinho'))">mdi-shopping</v-icon>
        </span>
        <span class="cartShop-letter margin-right">R$ {{ Math.abs(priceCart).toFixed(2) }} <p>itens: {{ itemsQuantity }}</p></span>
        <v-menu left bottom>
            <template #activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-icon class="collor-principal" size="35px">mdi-account-circle</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(option, i) in options" :key="i" @click="option.action">
                    <v-list-item-title class="collor-principal" ><v-icon > {{ option.icon }} </v-icon>  {{ option.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script setup>
import router from "@/router";
import { useCarrinhoCompras } from "@/stores/CarrinhoCompras";
import {  computed, ref } from "vue";

const kartShopStore = useCarrinhoCompras()

const priceCart = computed(() => kartShopStore.precoStore)
const itemsQuantity = computed(() => kartShopStore.itensQnt)

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
        action: () => alert('Oi') 
    },
])

</script>

<style scoped>
.margin-right {
    margin-right: 50px;
}

.collor-principal {
    color: #da7b08;
}


.collor-principal:hover{
    color: #2eae17;
}

.collor-secondary{
 color: #2eae17;
}

.cartShop-letter {
    font-size: 12px;
}
</style>