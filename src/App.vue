<template>
    <v-app :theme="globalStore.tema">
        <router-view />
    </v-app>
</template>

<script setup>
import { useGlobalStore } from "./stores/GlobalStore";
import "@/assets/fonts.css";

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

h2 {
    color: #da7b08;
}

button.v-btn {
    color: #da7b08;
}

button.v-btn:hover {
    color: #2eae17;
}
</style>
