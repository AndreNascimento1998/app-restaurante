<template>
    <v-container fluid>
        <v-carousel interval="6000" cycle height="400px" show-arrows="hover">
            <v-carousel-item v-for="(item, key) in itens" :key="key" :src="item.src" cover />
        </v-carousel>
        <v-divider />
        <mid-page />
    </v-container>
</template>

<script setup>
import midPage from './Partials/MidPage.vue'

const itens = [
    {
        src: 'https://cocobambu.com/wp-content/uploads/2022/06/CB_BR_INSTI_224_22_BANNERS_SITE_COCO_BAMBU_PRINCIPAL_1500x600.png'
    },
    {
        src: 'https://cocobambu.com/wp-content/uploads/2022/09/CB-BR-INSTI-224-22-BANNERS-SITE-COCO-BAMBU-NPS-1500x600-1.png'
    },
    {
        src: 'https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg'
    },
    {
        src: 'https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg'
    },
    {
        src: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg'
    },
]
</script>