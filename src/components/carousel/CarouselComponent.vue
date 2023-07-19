<template>
    <v-carousel interval="6000" cycle :height="smAndUp ? props.height : heightPhone" show-arrows="hover">
        <v-carousel-item 
        v-for="(item, key) in props.items" 
        :key="key" @click="urlItemCarousel(item)" 
        :src="item.src" 
        cover 
        class="click"
        />
    </v-carousel>
</template>

<script setup>
import { defineProps } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

const { smAndUp } = useDisplay()

function urlItemCarousel(item) {
    if(item.url){
        window.open(item.url)
    }
}

const props = defineProps({
    heightPhone: Number,
    height: Number,
    items: Array
})
</script>