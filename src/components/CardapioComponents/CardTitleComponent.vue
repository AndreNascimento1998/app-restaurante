<template>
    <v-sheet v-show="comboFilter?.length == 0 ? false : true" class="mx-auto" elevation="8" max-width="1200">
        <h2 style="font-style: italic;" class="letra pa-2">COMBOS</h2>
        <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="item in comboFilter" :key="item" v-slot="{ isSelected, selectedClass }">
                <v-card :class="['ma-4', selectedClass]" height="350" width="350">
                    <v-img class="promocao text-white" width="350"  :src="item.url" cover />
                    <v-scale-transition>
                        <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                    </v-scale-transition>
                    <v-card-title class="mb-5">
                        {{ item.nome }}
                    </v-card-title>
                    <v-card-text>
                        <span>{{ item.descricao.slice(0, 91) }} </span> <span v-if="item.descricao.length > 91">...</span>
                    </v-card-text> 
                    <v-card-actions>
                        <dialog-component 
                            :nome="item.nome" 
                            :src="item.url" 
                            :descricao="item.descricao" 
                            :id="item._id"
                            :valor="item.valor" />
                    </v-card-actions>
                </v-card>

            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script setup>
import DialogComponent from "@/components/CardapioComponents/DialogComponent.vue";
import { useCardapioStore } from "@/stores/CardapioStore";
import { computed, defineProps } from "vue";

const carteState = useCardapioStore()

const props = defineProps({
    searchItem: String,
    combos: Array,
})

const comboFilter = computed(() => carteState.filtraTipo(props.combos, props.searchItem))
</script>

<style scoped>
.letra {
    color: #da7b08;
}
.promocao{
    width: 50%;
    height: 50%;
}
</style>