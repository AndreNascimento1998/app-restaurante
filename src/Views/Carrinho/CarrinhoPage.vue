<template>
    <v-container v-if="itensCarrinho.length > 0">
        <v-list v-for="item in itensCarrinho" :key="item.nome">
            <v-card class="pa-2">
                <v-row>
                    <v-col cols="1">
                        <v-avatar size="80">
                            <img :src="item.src" width="100">
                        </v-avatar>
                    </v-col>
                    <v-col cols="4" class="mt-4">
                        Item:  {{ item.nome }}
                    </v-col>
                    <v-col cols="2" class="mt-4">
                        Valor:  R$ {{ item.valor * item.qnt }}
                    </v-col>
                    <v-col cols="2" class="mt-4">
                        Quantidade:  {{ item.qnt }}
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

const carrinhoStore = useCarrinhoCompras()

const itensCarrinho = computed(() => carrinhoStore.carrinhoDeCompras)

onMounted(() => {
    window.scrollTo(0, 0)
})

</script>