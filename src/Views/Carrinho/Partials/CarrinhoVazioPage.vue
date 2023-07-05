<template>
    <v-parallax class="borda"
        src="https://img.freepik.com/fotos-premium/uma-variedade-de-pratos-estao-em-exibicao-no-restaurante_900775-11515.jpg?w=2000"
        >
        <v-row v-if="globalStore.isLog" class="cor-fundo cor pa-2">
            <v-col cols="5">
                <span class="letra">Ver reservas! </span>
                <span class="mt-4">
                    <v-btn block variant="outlined">
                        Ir à reservas
                    </v-btn>
                </span>
            </v-col>
            <v-col cols="2" class="text-center">
                <v-icon size="70px">mdi-cart-off</v-icon>
                <p class="letra">Carrinho Vazio!</p>
            </v-col>
            <v-col cols="5">
                <span class="mt-4">
                    <p class="letra">Carrinho Vazio!</p>
                    <v-btn block variant="outlined">
                        Ir à loja
                    </v-btn>
                </span>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col>
                dsdas
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script setup>
import { useGlobalStore } from "@/stores/GlobalStore";

const globalStore = useGlobalStore()

</script>

<style scoped>
.cor {
    color: #da7b08;
}

.letra {
    font-size: 20px !important;
}

.borda{
    border-radius: 5px;
}
.cor-fundo {
    background-color: rgba(7, 7, 7, 0.7);
    border-style: inset;
}
</style>