<template>
    <v-container>
        <v-row class="pa-0">
            <v-col cols="6">
                <v-text-field 
                    v-model="searchItem" 
                    hide-details="auto" 
                    label="Buscar" 
                    variant="filled"
                    prepend-icon="mdi-magnify" 
                    density="compact"
                    clearable
                />
            </v-col>
            
            <v-col class="mt-1" cols="6">
                <v-btn @click="trocaRota()" block class="letra"  variant="outlined" >
                    {{ wichRoute }}
                </v-btn>
            </v-col>
        </v-row>
        
            <span v-if="route.params.nome != 'promocao'">
             <card-title-component 
                    class="mt-9"
                    :combos="carteState.combo"
                    :searchItem="searchItem"
                />
             
            <card-filter-component 
                title="Pratos Principais"
                :searchItem="searchItem"
                :wantedItem="carteState.pratoPrincipal"
            />

            <card-filter-component 
                title="Pratos Frios"
                :searchItem="searchItem"
                :wantedItem="carteState.pratoFrio"
            />

         <card-filter-component 
                title="Lanches"
                :searchItem="searchItem"
                :wantedItem="carteState.lanche"
            />
                
           <card-filter-component 
                title="Bebidas"
                :searchItem="searchItem"
                :wantedItem="carteState.bebida"
            />
        </span>
        
        <span v-if="route.params.nome == 'promocao'">
            <card-filter-component 
            title="Promoções"
            :searchItem="searchItem"
            :wantedItem="carteState.promocao"
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

let wichRoute = ref('')
let searchItem = ref('')
const route = useRoute()
const globalStore = useGlobalStore()
const carteState = useCardapioStore()

onMounted(async () => {

    if(!carteState.lanche.length){
        carteState.lanche = await carteState.fetchAlimentoCategoria('/lanches')
        carteState.bebida = await carteState.fetchAlimentoCategoria('/bebidas')
        carteState.combo = await carteState.fetchAlimentoCategoria('/combos')
        carteState.pratoPrincipal = await carteState.fetchAlimentoCategoria('/prato-principal')
        carteState.pratoFrio = await carteState.fetchAlimentoCategoria('/prato-frio')
        carteState.promocao = await carteState.fetchAlimentoCategoria('/promocao')
    }

    window.scrollTo(0, 0)

    if(route.params.nome != 'promocao') {
        wichRoute.value = 'Promoção'
        searchItem.value = globalStore.refeicaoPagePrincipal
    }else{
        wichRoute.value = 'Cardápio'
    }
})

function trocaRota() {
    if(route.params.nome != 'promocao'){
        wichRoute.value = 'Cardápio'
        router.push('cardapio/promocao')
    }else {
        wichRoute.value = 'Promoção'
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
