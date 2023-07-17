<template>
    <v-card density="compact" class="mx-auto" max-width="650">
        <v-img class="align-end text-white" height="300"
            :src="src"
            cover>
        </v-img>
        <v-card-text>
            <div>{{ props.desc }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn @click="(() => router.push(`${nextRoute}`))" block variant="outlined">
                {{ props.textButton }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import router from "@/router";
import { defineProps } from 'vue'

const props = defineProps({
    src: String,
    desc: String,
    textButton: String,
    nextRoute: String
})

</script>