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

        <v-sheet v-show="filtraPromocao.length == 0 ? false : true" class="mx-auto" elevation="8" max-width="1100">
            <h2 style="font-style: italic;" class="letra pa-2" >PROMOÇÃO
            </h2>
            <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="item in filtraPromocao" :key="item" v-slot="{ isSelected, selectedClass }">
                    <v-card :class="['ma-4', selectedClass]" height="350"  width="350"
                        @click="(er(item))">
                        <v-img class="promocao text-white" width="300 " :src="item.url" cover />
                        <v-scale-transition>
                            <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                        </v-scale-transition>
                        <v-card-title>
                            {{ item.name }}
                        </v-card-title>
                        <v-card-text>
                            <span>{{ item.descricao.slice(0, 91) }} </span> <span
                                v-if="item.descricao.length > 91">...</span>
                        </v-card-text>
                        <v-card-actions>
                            <dialog-component 
                            :nome="item.name" 
                            :src="item.url" 
                            :descricao="item.descricao"
                            :id="item.id"
                            :valor="item.valor"
                        />
                    </v-card-actions>
                    </v-card>
                    
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>

        <h2 style="font-style: italic;" class="letra pa-2 mt-10" v-show="filtraLanche.length == 0 ? false : true">Lanche
        </h2>
        <v-row>
            <v-col v-for="item in filtraLanche" :key="item.id" cols="4">
                <v-card density="compact" class="mx-auto" max-width="550">
                    <v-img class="align-end text-white " height="150" :src="item.url" cover />
                    <v-card-title>
                        {{ item.name }}
                    </v-card-title>
                    <v-card-text>
                        <span>{{ item.descricao.slice(0, 99) }} </span> <span v-if="item.descricao.length > 99">...</span>
                    </v-card-text>

                    <v-card-actions>
                        <dialog-component 
                            :nome="item.name" 
                            :src="item.url" 
                            :descricao="item.descricao"
                            :id="item.id"
                            :valor="item.valor"
                        />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <h2 style="font-style: italic;" class="letra pa-2 mt-10" v-show="filtraBebida.length == 0 ? false : true">Bebidas
        </h2>
        <v-row>
            <v-col v-for="item in filtraBebida" :key="item.id" cols="4">
                <v-card density="compact" class="mx-auto" max-width="550">
                    <v-img class="align-end promocao text-white " :src="item.url" cover />
                    <v-card-title>
                        {{ item.name }}
                    </v-card-title>
                    <v-card-text>
                         <span>{{ item.descricao.slice(0, 99) }} </span> <span v-if="item.descricao.length > 99">...</span>
                    </v-card-text>

                    <v-card-actions>
                        <dialog-component 
                            :nome="item.name" 
                            :src="item.url" 
                            :descricao="item.descricao"
                            :id="item.id"
                            :valor="item.valor"
                        />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script setup>
import { useCardapioStore } from "@/stores/CardapioStore";
import { computed, ref } from "vue";
import DialogComponent from "@/components/DialogComponent.vue";

const searchItem = ref('')
const cardapioState = useCardapioStore()
const lanche = cardapioState.lanche
const bebidas = cardapioState.bebidas
const promocao = cardapioState.promocao

const filtraLanche = computed(() => cardapioState.filtraTipo(lanche, searchItem.value))
const filtraBebida = computed(() => cardapioState.filtraTipo(bebidas, searchItem.value))
const filtraPromocao = computed(() => cardapioState.filtraTipo(promocao, searchItem.value))

function er(item) {
    console.log(item)
    alert('das')
}

</script>

<style scoped>
.letra {
    color: #da7b08;
}

.promocao {
    width: 50%;
    height: 50%;
    
}
</style>

  