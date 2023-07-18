
<template>
    <v-footer class="flex-column">
        <div class="bg-color d-flex w-100 align-center px-16 pa-2">
            <strong v-show="smAndUp">Mantenha-se conectado com nossas redes sociais!</strong>

            <v-spacer />

            <v-btn 
                v-for="icon in socials"
                @click="icon.action"
                :key="icon.icon"
                :class="{'mx-0': !smAndUp, 'mx-4': smAndUp}" 
                class="icon" 
                :icon="icon.icon" 
                variant="plain" 
                size="small" 
            />
        </div>

        <div class="pa-4 bg-black w-100">
            <v-row class="pa-4 ml-16">
                <v-col offset-sm="2" cols="12" sm="2">
                    <h4 class="curso">Food Chain Magnate</h4>
                    <p class=" curso">O Chef</p>
                    <p class="curso">Arquitetura</p>
                </v-col>
                <v-col cols="12" sm="2">
                    <h4 class="curso">Cardápio</h4>
                    <p class=" curso">Tabela de Alergênicos</p>
                    <p class="curso">Tabela Nutricional</p>
                    <h4 class="mt-2 curso">Restaurantes</h4>
                    <p class="curso">Restaurantes Próximos</p>
                </v-col>
                <v-col v-show="smAndUp" cols="2">
                    <h4 class="curso">Delivery</h4>
                    <h4 class="curso">Quem somos nós</h4>
                </v-col>
                <v-col v-show="smAndUp" cols="2">
                    <h4 class="curso">Fale Conosco</h4>
                    <h4 class="curso">Promoções</h4>
                </v-col>
            </v-row>
            <v-col cols="12 ml-6 px-16">
                <v-divider />
            </v-col>
            <span v-if="smAndUp" class="pa-1 px-16 ml-6" style="color:#da7b08;">Copyright © 2023 Food Chain Magnate - Todos os direitos reservados</span>
            <span v-else class="px-16 ml-5" style="color:#da7b08;">Food Chain Magnate</span>
        </div>
    </v-footer>
</template>


<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs"

const { smAndUp } = useDisplay()

const socials = [
    {icon: 'mdi-github', action: () => window.open('https://github.com/AndreNascimento1998')},
    {icon: 'mdi-linkedin', action: () => window.open('https://www.linkedin.com/in/andre-ncardoso/')},
    {icon: 'mdi-instagram', action: () => window.open('https://www.instagram.com/stef_and01/')},
]

</script>

<style scoped>

.bg-color {
    background-color: #b96600;
    color: black;
}

.icon {
    color: black;
}

.curso:hover {
    color: #2eae17 !important;
}

.v-footer {
    padding: 0 !important;
    height: 80%;
    overflow: hidden !important;
    flex: 0 0 auto;
}

.curso {
    cursor: pointer !important;
    color: #da7b08 !important;
}

</style>