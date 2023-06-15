<template>
    <v-container>
        <v-row class="pa-1 mb-6">
            <v-col cols="4">
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

        <h2 style="font-style: italic;" class="letra pa-1" v-show="filtraLanche.length == 0 ? false : true">Lanche</h2>
        <v-row>
            <v-col v-for="item in filtraLanche" :key="item.id" cols="4">
                <v-card density="compact" class="mx-auto" max-width="550">
                    <v-img class="align-end text-white" height="100" :src="item.url" cover />
                    <v-card-title>
                        {{ item.name }}
                    </v-card-title>
                    <v-card-text>
                        <span>{{ item.descricao.slice(0, 99) }} </span> <span v-if="item.descricao.length > 99">...</span>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn block variant="outlined" class="letra">
                            Adicionar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useCardapioStore } from "@/stores/CardapioStore";
import { computed, ref } from "vue";

const searchItem = ref('')
const cardapioState = useCardapioStore()
const lanche = cardapioState.lanche
//const bebidas = cardapioState.bebidas
const filtraLanche = computed(() => cardapioState.filtraTipo(lanche, searchItem.value))
//const filtraBebida = computed(() => cardapioState.filtraTipo(bebidas, searchItem.value))


</script>

<style scoped>
.letra {
    color: #da7b08;
}
</style>

  