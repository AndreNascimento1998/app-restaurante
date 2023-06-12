<template>
    <top-bar />
    <side-bar />

    <v-main>
        <router-view />
    </v-main>
</template>

<script setup>
import TopBar from "./Partials/TopBar.vue";
import SideBar from "./Partials/SideBar.vue";
</script>