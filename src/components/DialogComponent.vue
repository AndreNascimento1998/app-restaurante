<template>
    <v-dialog v-model="dialog" persistent width="auto">
        <template v-slot:activator="{ props }">
            <v-btn block variant="outlined" class="letra" v-bind="props">
                Adicionar
            </v-btn>
        </template>
        <v-card>
            <v-row>
                <v-col cols="6">
                    <v-img :src="props.src" style="object-fit: cover; width: 100%; height: 100%;" />
                </v-col>
                <v-col cols="6">
                    <v-card-title class="text-h5">
                        {{ props.nome }}
                    </v-card-title>
                    <v-card-text>
                        {{ props.descricao }}
                    </v-card-text>
                    <p class="text-center py-10 texto-carrinho">Valor dos itens: {{ valorModal.toFixed(2) }}</p>
                    <v-card-actions class="footer-text">
                        <v-spacer />
                        <v-card class="pa-0 mr-5">
                            <v-btn @click="() => contadorMenos()">
                                <v-icon>mdi-minus</v-icon>
                            </v-btn>
                            {{ contadorPorcao }}
                            <v-btn @click="() => contadorPorcao += 1">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card>
                        <v-btn class="letra" variant="text" @click="cancel">
                            Cancelar
                        </v-btn>
                        <v-btn class="letra" variant="text" @click="dialog = false">
                            Adicionar
                        </v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { computed, ref } from "vue";
import { defineProps } from 'vue';

let dialog = ref(false)
let contadorPorcao = ref(1)

const props = defineProps({
    nome: String,
    src: String,
    descricao: String,
    id: Number,
    valor: Number
})

const valorModal = computed(() => props.valor * contadorPorcao.value)

function cancel() {
    contadorPorcao.value = 1
    dialog.value = false
}

function contadorMenos() {
    if(contadorPorcao.value > 0){
        contadorPorcao.value -= 1
    }
}
</script>

<style scoped>
.letra {
    color: #da7b08;
}

.v-dialog>.v-overlay__content>.v-card,
.v-dialog>.v-overlay__content>.v-sheet {
    overflow-y: hidden;
    max-width: 1000px;
    max-height: 500px;
}

.texto-carrinho{
    font-weight: bold;
}
.footer-text {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 90%;
    padding: 20px;
    text-align: center;
}
</style>