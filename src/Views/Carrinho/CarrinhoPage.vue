<template>
    <v-container v-if="itensCart.length > 0">
        <v-list v-for="(item, index) in itensCart" :key="item.nome">
            <v-card class="pa-0">
                <v-row class="vertical-centro pa-2">
                    <v-col cols="1">
                        <v-avatar size="80">
                            <img :src="item.src" width="100">
                        </v-avatar>
                    </v-col>
                    <v-col cols="2">
                        Item: {{ item.nome }}
                    </v-col>
                    <v-col cols="2">
                        Valor: R$ {{ (item.valor * item.qnt).toFixed(2) }}
                    </v-col>
                    <v-col cols="2">
                        text-qualquer
                    </v-col>
                    <v-col cols="3" class="text-center">
                        <v-btn density="comfortable" @click="(removeOneItem(index, item))" :disabled="item.qnt === 0">
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>

                        Quantidade: {{ item.qnt }}


                        <v-btn density="comfortable" @click="(addOneItem(index))">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>


                    </v-col>


                    <v-col cols="2" class="text-center">
                        <v-btn @click="removeAllItems(item)" block variant="outlined" class="letra">
                            Remover todos itens
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-list>
        <v-row class="mt-1">
            <v-col cols="3" offset="9">
                <v-card>
                    <v-btn block variant="outlined">
                        Confirmar: R$ {{ shoppCartStore.precoStore.toFixed(2) }}
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-container v-else>
        <carrinho-vazio-page />
    </v-container>
</template>

<script setup>
import { useCarrinhoCompras } from '@/stores/CarrinhoCompras'
import { computed, onMounted } from 'vue'
import CarrinhoVazioPage from './Partials/CarrinhoVazioPage.vue'

const shoppCartStore = useCarrinhoCompras()
const itensCart = computed(() => shoppCartStore.carrinhoDeCompras)


function removeAllItems(item) {
    const indexItemDeleted = itensCart.value.findIndex((carrinho) => carrinho.id === item.id)

    if (indexItemDeleted !== -1) {
        shoppCartStore.precoStore -= (item.valor * item.qnt)
        shoppCartStore.itensQnt -= item.qnt
        shoppCartStore.carrinhoDeCompras.splice(indexItemDeleted, 1)
    }
}

function removeOneItem(index, item) {
    shoppCartStore.carrinhoDeCompras[index].qnt -= 1
    shoppCartStore.precoStore -= shoppCartStore.carrinhoDeCompras[index].valor
    shoppCartStore.itensQnt -= 1

    if (item.qnt === 0) {
        removeAllItems(item)
    }
}

function addOneItem(index) {
    shoppCartStore.carrinhoDeCompras[index].qnt += 1
    shoppCartStore.precoStore += shoppCartStore.carrinhoDeCompras[index].valor
    shoppCartStore.itensQnt += 1
}

onMounted(() => {
    window.scrollTo(0, 0)
})

</script>

<style scoped>
.description-letter {
    font-size: 18px;
}

.value-letter {
    color: #da7b08;
    font-size: 18px;
    text-decoration: underline;
}
.letra {
    color: #da7b08;
}

.vertical-centro {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>