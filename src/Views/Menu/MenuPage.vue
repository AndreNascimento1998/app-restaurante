<template>
    <top-bar />
    <side-bar />
    <v-main>
        <router-view />
    </v-main>
    <footer-page class="mt-16"/>
</template>

<script setup>
    import TopBar from "./Partials/TopBar.vue";
    import SideBar from "./Partials/SideBar.vue";
    import FooterPage from "./Partials/FooterPage.vue";
</script>