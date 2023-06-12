<template>
    <v-app-bar elevation="1" class="pa-1" height="52">
        <v-col cols="1" class="ml-10">
            <v-toolbar-title class="justify-left">
                <v-img src="https://w7.pngwing.com/pngs/598/246/png-transparent-catering-logo-catering-logo-logo-food.png" height="50" width="140" />
            </v-toolbar-title>
        </v-col>
        <h2>Restaurante <strong>Genérico</strong></h2>
        <v-spacer />
        
        <v-menu left bottom>
            <template #activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-icon size="35px">mdi-account-circle</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(option, i) in options" :key="i" @click="option.action">
                    <v-list-item-title>{{ option.text }}</v-list-item-title>
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