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
                    <p class="text-center py-10 texto-carrinho">Valor dos itens: {{ valueModal.toFixed(2) }}</p>
                    <v-card-actions class="footer-text">
                        <v-spacer />
                        <v-card class="pa-0 mr-5">
                            <v-btn @click="() => countMinus()" :disabled="countPortion === 1">
                                <v-icon>mdi-minus</v-icon>
                            </v-btn>
                            {{ countPortion }}
                            <v-btn @click="() => countPortion += 1">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card>
                        <v-btn class="letra" variant="text" @click="cancel">
                            Cancelar
                        </v-btn>
                        <v-btn class="letra" variant="text" @click="addItems">
                            Adicionar
                        </v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { useCarrinhoCompras } from "@/stores/CarrinhoCompras";
import { computed, ref } from "vue";
import { defineProps } from 'vue';

const shopCartStore = useCarrinhoCompras()
let dialog = ref(false)
let countPortion = ref(1)

const props = defineProps({
    nome: String,
    src: String,
    descricao: String,
    id: String,
    valor: Number,
})

const valueModal = computed(() => props.valor * countPortion.value)

function addItems() {
    const itemAtual = shopCartStore.carrinhoDeCompras.find( item => item.id === props.id)
    
   verifyItem(itemAtual)
    
    const {total, totalItems} = addValuesForPrecoStore()

    shopCartStore.precoStore = total
    shopCartStore.itensQnt = totalItems
    countPortion.value = 1
    dialog.value = false
}

function addValuesForPrecoStore() {
    let total = 0
    let totalItems = 0

    shopCartStore.carrinhoDeCompras.forEach(item => {
        total += item.valor * item.qnt
        totalItems += item.qnt
    })

    return {
        total, 
        totalItems
    }
}

function verifyItem(itemAtual) {
    if(itemAtual === undefined){
        shopCartStore.carrinhoDeCompras.push({
            id: props.id,
            nome: props.nome,
            descricao: props.descricao,
            src: props.src,
            valor: props.valor,
            qnt: countPortion.value
    })} else{
        const index = shopCartStore.carrinhoDeCompras.findIndex ( item => item.id === props.id)
        shopCartStore.carrinhoDeCompras[index].qnt += countPortion.value
    }
}

function cancel() {
    countPortion.value = 1
    dialog.value = false
}

function countMinus() {
    countPortion.value -= 1
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