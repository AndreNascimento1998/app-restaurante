<template>
    <v-container fluid>

        <carousel-component 
            :items="items"
            :height="400"
            :heightPhone="150"
        />
        <v-divider />
        <mid-page />
    </v-container>
</template>

<script setup>
import midPage from './Partials/MidPage.vue'
import { onMounted, ref } from 'vue';
import CarouselComponent from '@/components/carousel/CarouselComponent.vue'

const items = ref([
    {
        src: 'https://cocobambu.com/wp-content/uploads/2022/06/CB_BR_INSTI_224_22_BANNERS_SITE_COCO_BAMBU_PRINCIPAL_1500x600.png',
        url: 'https://pictogrammers.com/library/mdi/'
    },
    {
        src: 'https://cocobambu.com/wp-content/uploads/2022/09/CB-BR-INSTI-224-22-BANNERS-SITE-COCO-BAMBU-NPS-1500x600-1.png',
        url: 'https://cocobambu.com/'
    },
    {
        src: 'https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg',
        url: 'https://pictogrammers.com/library/mdi/'
    },
    {
        src: 'https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg',
        url: 'https://pictogrammers.com/library/mdi/'
    },
    {
        src: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
        url: 'https://pictogrammers.com/library/mdi/'
    },
])

onMounted(() => {
    window.scrollTo(0, 0)
})

</script>

<style>

.heigth {
    height: 400px !important;
}

.heigthLess {
    height: 150px !important;
}

.click{
    cursor: pointer !important;
}

</style>