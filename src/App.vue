<template>
    <v-app :theme="globalStore.tema">
        <router-view />
    </v-app>
</template>

<script setup>
import { useGlobalStore } from "./stores/GlobalStore";

const globalStore = useGlobalStore()
</script>

<style>
.v-application__wrap {
    flex: 0 0 auto;
}

.v-application{
    display: block !important;
}

.v-row{
    flex: 0 0 auto;
    margin: 0;
}
</style>
