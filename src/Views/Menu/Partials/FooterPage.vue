
<template>
    <v-footer class="flex-column">
        <div class="bg-color d-flex w-100 align-center px-16 pa-2" col>
            <strong>Mantenha-se conectado com nossas redes sociais!</strong>

            <v-spacer />

            <v-btn 
                v-for="icon in icons" 
                :key="icon" 
                class="mx-4 icon" 
                :icon="icon" 
                variant="plain" 
                size="small" 
            />
        </div>

        <div class="pa-4 bg-black w-100">
            <v-row class="pa-4 ml-16">
                <v-col offset="2" cols="2">
                    <h4 class="curso">Food Chain Magnate</h4>
                    <p class=" curso">O Chef</p>
                    <p class="curso">Arquitetura</p>
                </v-col>
                <v-col cols="2">
                    <h4 class="curso">Cardápio</h4>
                    <p class=" curso">Tabela de Alergênicos</p>
                    <p class="curso">Tabela Nutricional</p>
                    <h4 class="mt-2 curso">Restaurantes</h4>
                    <p class="curso">Restaurantes Próximos</p>
                </v-col>
                <v-col cols="2">
                    <h4 class="curso">Delivery</h4>
                    <h4 class="curso">Quem somos nós</h4>
                </v-col>
                <v-col cols="2">
                    <h4 class="curso">Fale Conosco</h4>
                    <h4 class="curso">Promoções</h4>
                </v-col>
            </v-row>
            <v-col cols="12 ml-6 px-16">
                <v-divider />
            </v-col>
            <h4 class="pa-1 px-16 ml-6" style="color:#da7b08;">Copyright © 2022 Food Chain Magnate - Todos os direitos reservados</h4>
        </div>
    </v-footer>
</template>


<script setup>
const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
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