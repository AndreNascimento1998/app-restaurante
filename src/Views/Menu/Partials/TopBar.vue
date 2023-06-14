<template>
    <v-app-bar elevation="1" class="pa-1" height="52">
        <v-col cols="1" class="ml-10">
            <v-toolbar-title class="justify-left">
                <v-img src="https://static.vecteezy.com/system/resources/previews/014/971/638/non_2x/food-logo-design-template-restaurant-free-png.png" height="90"/>
            </v-toolbar-title>
        </v-col>
        <section class="titulo-cor">Food Chain Magnate</section>
        <v-spacer />
        
        <v-menu left bottom>
            <template #activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-icon class="cor-texto" size="35px">mdi-account-circle</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(option, i) in options" :key="i" @click="option.action">
                    <v-list-item-title class="cor-texto">{{ option.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script setup>
import { useGlobalStore } from "@/stores/GlobalStore";
import { ref } from "vue";

const globalStore = useGlobalStore()

const options = ref([
    { text: 'Perfil', action: () => alert('Oi') },
    {text: 'Editar Perfil', action: () => alert('Oi')},
    { 
        text: 'Trocar Tema', 
        action: () => globalStore.trocaTema() 
    },
    { text: 'Sair', action: () => alert('Oi') },
])

</script>

<style scoped>
.titulo-cor{
    color: #e89837;
    font-size: 24px;
    font-weight: 700;
}

.cor-texto {
    color: #e89837;
}
</style>