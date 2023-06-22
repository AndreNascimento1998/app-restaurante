<template>
    <v-row class="text-center mt-10">
        <v-col cols="6">
            <v-card density="compact" class="mx-auto" max-width="650">
                <v-img class="align-end text-white" height="300"
                    src="https://images.pexels.com/photos/6127316/pexels-photo-6127316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    cover>
                </v-img>
                <v-card-text>
                    <div>Realizando a reserva online você garante seu lugar já</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn block variant="outlined" class="letra">
                        Faça sua reserva
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="6">
            <v-card density="compact" class="mx-auto" max-width="650">
                <v-img class="align-end text-white" height="300"
                    src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    cover>
                </v-img>
                <v-card-text>
                    <div>Faça seu pedido, confira as promoções diárias</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn @click="(() => router.push('/cardapio'))" block variant="outlined" class="letra">
                        Faça seu pedido
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>

    <v-divider class="mt-2" />

    <v-row class="mt-6 pa-4">
        <v-col cols="12">
            <h2 style="font-style: italic;" class="letra">Lançamentos</h2>
        </v-col>
        <v-col v-for="(prato, index) in pratos" :key="index" cols="3">

            <v-hover v-slot="{ isHovering, props }">
                <v-card class="mx-auto rounded-pill" v-bind="props">

                    <v-img class="" :width="300" aspect-ratio="16/9" cover :src="prato.src">

                        <v-expand-transition>
                            <div v-if="isHovering"
                                class="d-flex transition-fast-in-fast-out bg-orange-darken-3 v-card--reveal text-h5"
                                style="height:100%;">
                                <v-row>
                                    <v-col offset="4" cols="12">
                                        <p>Ver mais</p>

                                    </v-col>
                                    <v-col cols="6" offset="5">
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

    <v-row class="mt-6 pa-4">
        <v-col cols="12">
            <h2 style="font-style: italic;" class="letra">Depoimentos</h2>
        </v-col>

        <v-col v-for="(item, index) in depoimentos" :key="index"  cols="3">
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
                    <p>
                      {{ item.descricao }}
                    </p>
                </v-card-text>
            </v-card>
        </v-col>

    </v-row>
</template>

<script setup>
import router from '@/router';
import { useHomeStore } from '@/stores/HomeStore';
import { computed } from 'vue';


const homeStore = useHomeStore()
const pratos = computed(() => homeStore.pratos)
const depoimentos = computed(() => homeStore.depoimentos)

function paginaCardapio(item) {
    router.push(`/cardapio/${item.nome}`)
}

</script>

<style scoped>
.letra {
    color: #da7b08;
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
    opacity: .8;
    position: absolute;
    width: 100%;
}

</style>