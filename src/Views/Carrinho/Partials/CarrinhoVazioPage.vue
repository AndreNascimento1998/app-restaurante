<template>
    <v-hover v-if="globalStore.isLog" v-slot="{ props }">
        <v-card class="" v-bind="props">
            <v-img
                src="https://img.freepik.com/fotos-premium/uma-variedade-de-pratos-estao-em-exibicao-no-restaurante_900775-11515.jpg?w=2000">
                <v-expand-transition>
                    <div class="d-flex transition-fast-in-fast-out color-fund v-card--reveal" style="height:100%;">
                        <v-row class="mt-4">
                            <v-col cols="12" class="color">
                                <card-img-component 
                                    :src="cardImg.src" 
                                    :desc="cardImg.desc" 
                                    :textButton="cardImg.textButton"
                                    :nextRoute="cardImg.nextRoute" 
                                />
                            </v-col>
                        </v-row>
                    </div>
                </v-expand-transition>
            </v-img>
        </v-card>
    </v-hover>
</template>

<script setup>
import { useGlobalStore } from "@/stores/GlobalStore";
import CardImgComponent from "@/components/card/CardImgComponent.vue"
import { reactive } from "vue";

const globalStore = useGlobalStore()
const cardImg = reactive({
    src: 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1',
    desc: 'Não perca tempo compre já ou reserve!',
    textButton: 'Visitar o cardápio',
    nextRoute: '/cardapio'
})


</script>

<style scoped>
.letter-img2 {
    font-size: 15px;
    color: rgb(39, 39, 39);
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
}

.letter-img {
    font-size: 15px;
    font-style: italic;
}

.color {
    color: #0f0f0f;
}

.line {
    display: flex;
    align-items: center;

}


.borda {
    border-radius: 5px;
}

.color-fund {
    background-color: rgba(153, 158, 153, 0.8);
    border-style: inset;
}
</style>