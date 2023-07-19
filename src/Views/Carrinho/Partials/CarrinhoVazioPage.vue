<template>
    <v-hover v-slot="{ props }">
        <v-card class="" v-bind="props">
            <v-img
                src="https://img.freepik.com/fotos-premium/uma-variedade-de-pratos-estao-em-exibicao-no-restaurante_900775-11515.jpg?w=2000">
                <v-expand-transition>
                    <div class="d-flex transition-fast-in-fast-out color-fund v-card--reveal" style="height:100%;">
                        <v-row>
                           
                            <v-col 
                            offset="1"
                            cols="5" 
                            class="color mt-4"
                            >
                                <card-img-component 
                                :src="cardImg.src" 
                                :desc="cardImg.desc" 
                                :textButton="cardImg.textButton"
                                :nextRoute="cardImg.nextRoute" 
                                />
                            </v-col> 
                
                            
                            <v-col 
                            
                            cols="5" 
                            class="color mt-4"
                            >
                                <card-img-component 
                                :src="cardRestaurant.src" 
                                :desc="cardRestaurant.desc" 
                                :textButton="cardRestaurant.textButton"
                                :nextRoute="cardRestaurant.nextRoute" 
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
import CardImgComponent from "@/components/card/CardImgComponent.vue"
import { reactive } from "vue";

const cardImg = reactive(
    {
        src: 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1',
        desc: 'Seu carrinho está vazio! Não perca tempo compre já ou reserve!',
        textButton: 'Visitar o cardápio',
        nextRoute: '/cardapio'
    }, 
)

const cardRestaurant = reactive(
    {
        src: 'https://www.tudoconstrucao.com/wp-content/uploads/2021/09/Projetos-de-Cozinhas-Modernas-para-Restaurantes-2.jpeg',
        desc: 'Quer conhecer a estrutura do nosso restaurante ?',
        textButton: 'Visitar o restaurante',
        nextRoute: '/#'
    }, 
)


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
    background-color: rgba(0, 0, 0, 0.7);
    border-style: inset;
}
</style>