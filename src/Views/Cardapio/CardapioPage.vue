<template>
    <v-container>
        <v-row class="pa-0 mb-6">
            <v-col cols="4">
                <v-text-field 
                    v-model="searchItem" 
                    hide-details="auto" 
                    label="Buscar" 
                    variant="underlined"
                    prepend-icon="mdi-magnify" 
                    density="compact"
                    clearable
                />
            </v-col>

            <v-col class="mt-1" cols="8">
               <v-btn block class="letra" variant="outlined" >
                    PROMOÇÕES
               </v-btn>
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
import { onMounted, ref } from "vue";
import CardFilterComponent from "@/components/CardapioComponents/CardFilterComponent.vue";
import CardTitleComponent from "@/components/CardapioComponents/CardTitleComponent.vue";
import { useRoute } from "vue-router";

let searchItem = ref('')
const route = useRoute()
const cardapioState = useCardapioStore()
const lanche = cardapioState.lanche
const bebidas = cardapioState.bebidas
const combos = cardapioState.combos
const pratoPrincipal = cardapioState.pratoPrincipal
const pratoFrio = cardapioState.pratoFrio

onMounted(async () => {
    window.scrollTo(0, 0)
    if(route.params.nome) {
        searchItem.value = await `${route.params.nome}`
    }
})
</script>

<style scoped>
.letra {
    color: #da7b08;
}

.titulo {
    font-style: italic;
    text-decoration: underline;
}
</style>

  