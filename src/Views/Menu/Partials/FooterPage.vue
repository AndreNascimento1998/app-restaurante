
<template>
    <v-footer class=" flex-column">
        <div class="bg-color d-flex w-100 align-center px-16 pa-2">
            <strong>Mantenha-se conectado com nossas redes sociais!</strong>

            <v-spacer />

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
        </div>

        <div class="pa-4 bg-black w-100 cor-texto">
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
                    <h4>Delivery</h4>
                    <h4>Quem somos nós</h4>
                </v-col>
                <v-col cols="2">
                    <h4>Fale Conosco</h4>
                    <h4>Promoções</h4>
                </v-col>
            </v-row>
            <v-col cols="12 ml-6 px-16">
                <v-divider />
            </v-col>
            <h4 class="pa-1 px-16 ml-6">Copyright © 2022 Food Chain Magnate - Todos os direitos reservados</h4>
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
.margem-segundo{
    margin-left: 166px;
}

.margem-primeiro{
    margin-left: 253px;
}
.bg-color {
    background-color: #b96600;
    color: black;
}

.cor-texto {
    color: #da7b08 !important;
}

.v-footer {
    padding: 0 !important;
    height: 100%;
    overflow-y: hidden;
}

.curso {
    cursor: pointer !important;
}

.v-footer[data-v-5b0e8fde] {
    overflow: hidden !important;
}
</style>