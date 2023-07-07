<template>
    <v-container>
        <v-row class="pa-0">
            <v-col cols="6">
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
            
            <v-col class="mt-1" cols="6">
                <v-btn @click="trocaRota()" block class="letra" variant="outlined" >
                    {{ tituloRota }}
                </v-btn>
            </v-col>
        </v-row>
        
            <span v-if="route.params.nome != 'promocao'">
             <card-title-component 
                class="mt-9"
                :combos="cardapioState.combo"
                :searchItem="searchItem"
                />
             
                <card-filter-component 
                titulo="Pratos Principais"
                :searchItem="searchItem"
                :itemProcurado="cardapioState.pratoPrincipal"
                />

            <card-filter-component 
                titulo="Pratos Frios"
                :searchItem="searchItem"
                :itemProcurado="cardapioState.pratoFrio"
            />

         <card-filter-component 
                titulo="Lanches"
                :searchItem="searchItem"
                :itemProcurado="cardapioState.lanche"
            />
                
           <card-filter-component 
                titulo="Bebidas"
                :searchItem="searchItem"
                :itemProcurado="cardapioState.bebida"
            />
        </span>
        
        <span v-if="route.params.nome == 'promocao'">
            <card-filter-component 
            titulo="PROMOÇÕES"
            :searchItem="searchItem"
            :itemProcurado="cardapioState.promocao"
            />
    
        </span> 
    </v-container> 
</template>

<script setup>
import { useCardapioStore } from "@/stores/CardapioStore";
import {  onMounted, onUnmounted, ref } from "vue";
import CardFilterComponent from "@/components/CardapioComponents/CardFilterComponent.vue";
import CardTitleComponent from "@/components/CardapioComponents/CardTitleComponent.vue";
import { useRoute } from "vue-router";
import router from "@/router";
import { useGlobalStore } from "@/stores/GlobalStore";

let tituloRota = ref('')
let searchItem = ref('')
const route = useRoute()
const globalStore = useGlobalStore()
const cardapioState = useCardapioStore()

onMounted(async () => {

    if(!cardapioState.lanche.length){
        cardapioState.lanche = await cardapioState.fetchAlimentoCategoria('/lanches')
        cardapioState.bebida = await cardapioState.fetchAlimentoCategoria('/bebidas')
        cardapioState.combo = await cardapioState.fetchAlimentoCategoria('/combos')
        cardapioState.pratoPrincipal = await cardapioState.fetchAlimentoCategoria('/prato-principal')
        cardapioState.pratoFrio = await cardapioState.fetchAlimentoCategoria('/prato-frio')
        cardapioState.promocao = await cardapioState.fetchAlimentoCategoria('/promocao')
    }

    window.scrollTo(0, 0)

    if(route.params.nome != 'promocao') {
        tituloRota.value = 'Promoção'
        searchItem.value = globalStore.refeicaoPagePrincipal
    }else{
        tituloRota.value = 'Cardápio'
    }
})

function trocaRota() {
    if(route.params.nome != 'promocao'){
        tituloRota.value = 'Cardápio'
        router.push('cardapio/promocao')
    }else {
        tituloRota.value = 'Promoção'
        router.push('/cardapio')
    }
}

onUnmounted(() => {
    globalStore.refeicaoPagePrincipal = ''
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
