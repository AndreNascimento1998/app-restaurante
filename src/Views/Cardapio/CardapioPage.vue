<template>
    <v-container>
        <v-row class="pa-1 mb-6">
            <v-col cols="3">
                <v-text-field 
                    v-model="searchItem" 
                    hide-details="auto" 
                    label="Buscar" 
                    variant="underlined"
                    prepend-icon="mdi-magnify" 
                    density="compact" 
                />
            </v-col>
        </v-row>

        <card-title-component 
            :combos="combos"
            :searchItem="searchItem"
        />

        <card-filter-component 
            titulo="Pratos Principais"
            :searchItem="searchItem"
            :itemProcurado="pratoPrincipal"
        />

        <card-filter-component 
            titulo="Pratos Frios"
            :searchItem="searchItem"
            :itemProcurado="pratoFrio"
        />

        <card-filter-component 
            titulo="Lanches"
            :searchItem="searchItem"
            :itemProcurado="lanche"
        />

        <card-filter-component 
            titulo="Bebidas"
            :searchItem="searchItem"
            :itemProcurado="bebidas"
        />
    </v-container> 
</template>

<script setup>
import { useCardapioStore } from "@/stores/CardapioStore";
import { ref } from "vue";
import CardFilterComponent from "@/components/CardapioComponents/CardFilterComponent.vue";
import CardTitleComponent from "@/components/CardapioComponents/CardTitleComponent.vue";

const searchItem = ref('')
const cardapioState = useCardapioStore()
const lanche = cardapioState.lanche
const bebidas = cardapioState.bebidas
const combos = cardapioState.combos
const pratoPrincipal = cardapioState.pratoPrincipal
const pratoFrio = cardapioState.pratoFrio
</script>

<style scoped></style>

  