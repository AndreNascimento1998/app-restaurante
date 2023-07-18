<template>
    <v-row class="mt-10">
        <v-col cols="12" sm="6">
            <card-img-component 
                :src="cardLogin.src"
                :desc="cardLogin.desc"
                :textButton="cardLogin.textButton"
                :nextRoute="cardLogin.nextRoute"
            />
        </v-col>
        <v-col cols="12" sm="6">
            <card-img-component
                :src="cardCardapio.src"
                :desc="cardCardapio.desc"
                :textButton="cardCardapio.textButton"
                :nextRoute="cardCardapio.nextRoute"
            />
        </v-col>
    </v-row>

    <v-divider class="mt-4" />

    <v-row class="mt-4 pa-4">
        <v-col cols="12">
            <h2 style="font-style: italic;">Lançamentos</h2>
        </v-col>
        <v-col v-for="(prato, index) in plates" :key="index" cols="6" sm="3">

            <v-hover v-slot="{ isHovering, props }">
                <v-card class="mx-auto rounded-pill" v-bind="props">

                    <v-img width="100%" aspect-ratio="16/9" cover :src="prato.src">

                        <v-expand-transition>
                            <div v-if="isHovering"
                                class="d-flex transition-fast-in-fast-out bg-color v-card--reveal"
                                style="height:100%;">
                                <v-row>
                                    <v-col v-show="smAndUp" offset="2" cols="12" offset-md="4">
                                        <p class="letter">Ver mais</p>

                                    </v-col>
                                    <v-col cols="6" offset="3" offset-sm="4" offset-md="5">
                                        <v-icon class="pointer" @click="paginaCardapio(prato)" size="40px">mdi-plus-circle-outline</v-icon>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>

    <v-row v-show="smAndUp" class="mt-6 pa-4">
        <v-col cols="12">
            <h2 style="font-style: italic;">Depoimentos</h2>
        </v-col>

        <v-col v-show="smAndUp" v-for="(item, index) in testimony" :key="index"  cols="3">
        <v-card class="d-flex flex-column align-center justify-center">
                <v-avatar class="pa-1" size="100">
                    <img :src="item.url"
                        alt="Foto da pessoa" 
                        class=""
                        style="object-fit: cover; width: 100%; height: 100%;"
                    />
                </v-avatar>
                <v-card-title class="text-center">
                    {{ item.nome }}
                </v-card-title>
                <v-card-text>
                    <p v-if="item.descricao.length > 80">
                      {{ item.descricao.slice(0,75) }}...
                    </p>
                    <p v-else>
                        {{ item.descricao }}
                    </p>
                </v-card-text>
            </v-card>
        </v-col>

    </v-row>
</template>

<script setup>
import router from '@/router';
import { useGlobalStore } from '@/stores/GlobalStore';
import { useHomeStore } from '@/stores/HomeStore';
import { computed, reactive } from 'vue';
import CardImgComponent from '@/components/card/CardImgComponent.vue'
import { useDisplay } from 'vuetify/lib/framework.mjs';

const globalStore = useGlobalStore()
const homeStore = useHomeStore()
const testimony = computed(() => homeStore.depoimentos)
const { smAndUp } = useDisplay()

const plates = [
    {
        nome: 'Yakisoba',
        src: "https://s2.glbimg.com/sbY-7k1GbROb56FDTqj9XAEzIDQ=/e.glbimg.com/og/ed/f/original/2021/07/22/yakisoba.jpeg"
    },
    {
        nome: 'Lámen',
        src: "https://static.wixstatic.com/media/9e3cd8_f6fa68d1d2084fa99b54936c033b78e1~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9e3cd8_f6fa68d1d2084fa99b54936c033b78e1~mv2.jpg"
    },
    {
        nome: 'Strogonofe',
        src: "https://receitinhas.com.br/wp-content/uploads/2016/06/istock-1313903223.webp"
    },
    {
        nome: 'Carne ao Molho Madeira',
        src: "https://blog.cybercook.com.br/wp-content/uploads/2022/07/molho-madeira-legitimo-para-harmonizar-com-o-vinho-certo-scaled.jpeg"
    }
]

const cardLogin = reactive({
    src:"https://images.pexels.com/photos/6127316/pexels-photo-6127316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:"Entre e comece a comprar os melhores pratos da cidade!",
    textButton:"Cadastre-se agora!",
    nextRoute:"/login"
})

const cardCardapio = reactive({
    src:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:"Faça seu pedido, confira o cardápio e combos diários!",
    textButton:"Acesse agora!",
    nextRoute:"/cardapio"
})

function paginaCardapio(item) {
    globalStore.refeicaoPagePrincipal = item.nome
    router.push(`/cardapio`)
}

</script>

<style scoped>

.bg-color {
    background-color: rgb(218, 123, 8, 0.8);
    color: white;
}

.letter {
    color: white;
    font-size: 26px !important;
    font-weight: 600;
    font-style: oblique;
}

.letra-texto {
    color: #000000;
}

.pointer {
    cursor: pointer;
}

.v-card--reveal {
    align-items: center;
    bottom: 8;
    justify-content: center;
    position: absolute;
    width: 100%;
}

</style>