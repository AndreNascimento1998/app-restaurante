<template>
    <v-container v-if="itensCarrinho.length > 0">
        <v-list v-for="(item, index) in itensCarrinho" :key="item.nome">
            <v-card class="pa-0">
                <v-row class="vertical-centro pa-2">
                    <v-col cols="1">
                        <v-avatar size="80">
                            <img :src="item.src" width="100">
                        </v-avatar>
                    </v-col>
                    <v-col cols="2">
                        Item:  {{ item.nome }}
                    </v-col>
                    <v-col cols="2">
                        Valor:  R$ {{ (item.valor * item.qnt).toFixed(2) }}
                    </v-col>
                    <v-col cols="2">
                        text-qualquer
                    </v-col>
                    <v-col cols="3" class="text-center">
                        <v-btn 
                            density="comfortable" @click="(retira(index, item))" 
                            :disabled="item.qnt === 0"
                        >
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>

                            Quantidade:  {{ item.qnt }}


                        <v-btn density="comfortable" @click="(adiciona(index))">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>


                    </v-col>


                    <v-col cols="2" class="text-center">
                        <v-btn 
                        @click="remover(item)" block variant="outlined" class="letra"
                    >
                            Remover todos itens
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-list>
        <section class="text-end">
            Valor total: <span class="letra">{{ carrinhoStore.precoStore.toFixed(2) }}</span>
        </section>
    </v-container>
    <v-container v-else>
        <carrinho-vazio-page/>
    </v-container>
</template>

<script setup>
import { useCarrinhoCompras } from '@/stores/CarrinhoCompras'
import { computed, onMounted } from 'vue'
import CarrinhoVazioPage from './Partials/CarrinhoVazioPage.vue'

const carrinhoStore = useCarrinhoCompras()
const itensCarrinho = computed(() => carrinhoStore.carrinhoDeCompras)


function remover(item){
    const indexItemExcluir = itensCarrinho.value.findIndex( (carrinho) => carrinho.id === item.id)

    if(indexItemExcluir !== -1){
        carrinhoStore.precoStore -= (item.valor * item.qnt)
        carrinhoStore.itensQnt -= item.qnt
        carrinhoStore.carrinhoDeCompras.splice(indexItemExcluir, 1)
    }
}

function retira(index, item){
    
    carrinhoStore.carrinhoDeCompras[index].qnt -= 1
    carrinhoStore.precoStore -= carrinhoStore.carrinhoDeCompras[index].valor
    carrinhoStore.itensQnt -= 1
    
    if(item.qnt === 0){
        remover(item)
    }
}

function adiciona(index) {
    carrinhoStore.carrinhoDeCompras[index].qnt += 1
    carrinhoStore.precoStore += carrinhoStore.carrinhoDeCompras[index].valor
    carrinhoStore.itensQnt += 1
}

onMounted(() => {
    window.scrollTo(0, 0)
})

</script>

<style scoped>
.letra {
    color: #da7b08;
}

.vertical-centro {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>