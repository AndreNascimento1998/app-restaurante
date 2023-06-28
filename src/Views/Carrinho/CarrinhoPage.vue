<template>
    <v-container v-if="itensCarrinho.length > 0">
        <v-list v-for="item in itensCarrinho" :key="item.nome">
            <v-card class="pa-0">
                <v-row class="vertical-centro pa-2">
                    <v-col cols="1">
                        <v-avatar size="80">
                            <img :src="item.src" width="100">
                        </v-avatar>
                    </v-col>
                    <v-col cols="3">
                        Item:  {{ item.nome }}
                    </v-col>
                    <v-col cols="2">
                        Valor:  R$ {{ (item.valor * item.qnt).toFixed(2) }}
                    </v-col>
                    <v-col cols="2">
                        Quantidade:  {{ item.qnt }}
                    </v-col>
                    <v-col cols="2" class="text-center">
                            <DialogComponent 
                                    :nome="item.nome" 
                                    :src="item.src" 
                                    :descricao="item.descricao"
                                    :id="item.id"
                                    :valor="item.valor"
                            />
                    </v-col>
                    <v-col cols="2" class="text-center">
                        <v-btn @click="remover(item)" block variant="outlined" class="letra">
                            Remover
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-list>
    </v-container>
    <v-container v-else>
        <h1>Carrinho vazio</h1>
    </v-container>
</template>

<script setup>
import { useCarrinhoCompras } from '@/stores/CarrinhoCompras'
import { computed, onMounted } from 'vue'
import DialogComponent from '@/components/CardapioComponents/DialogComponent.vue'

const carrinhoStore = useCarrinhoCompras()

const itensCarrinho = computed(() => carrinhoStore.carrinhoDeCompras)

function remover(item){
    console.log(item    )
    const indexItemExcluir = itensCarrinho.value.findIndex( (carrinho) => carrinho.id === item.id)

    if(indexItemExcluir !== -1){
        carrinhoStore.precoStore -= (item.valor * item.qnt)
        carrinhoStore.itensQnt -= item.qnt
        carrinhoStore.carrinhoDeCompras.splice(indexItemExcluir, 1)
    }
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