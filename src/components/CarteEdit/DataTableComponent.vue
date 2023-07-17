<template>
    <v-row class="pa-0">
        <v-col cols="6">
            <v-text-field 
                v-model="searchItem"
                prepend-icon="mdi-magnify"
                class=""
                variant="filled"
                density="compact"
                label="Buscar item"
                clearable
            />
        </v-col>
            <v-col cols="6 mt-2">
                <v-btn 
                    @click="trocaRota()" 
                    block
                    color="#da7b08"
                    variant="outlined" 
                >
                    Adicionar item ao cardápio
                </v-btn>
        </v-col>
    </v-row>
    <h2 color="#da7b08" > {{ props.title }} </h2>
    <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="desserts"
        density="compact"
        hover
        :search="searchItem"
        item-value="name"
        class="elevation-1"
        no-data-text="Nenhum item"
        return-object
    >
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.valor="{ item }">R$ {{item.raw.valor.toFixed(2) }}</template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.descricao="{ item }">{{item.raw.descricao.slice(0,180) }} <span v-if="item.raw.descricao.length > 180">...</span></template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.opcao="{ item }">
                <v-icon class="mr-1" color="#da7b08" @click="edit(item.raw)">mdi-file-edit</v-icon>
                <v-icon @click="delet(item.raw)" color="#da7b08" >mdi-delete</v-icon>
        </template>
    </v-data-table>
    
</template>

<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
import { computed, defineProps, ref } from "vue";

const itemsPerPage = ref(5);
const searchItem = ref('')
const headers = [
  { title: "Nome", align: "start",sortable: true, key: "nome" },
  { title: "Descrição", align: "start", key: "descricao" },
  { title: "Valor", align: "center", key: "valor" },
  { title: "Opções", align: "end", key: "opcao" },
];

const props = defineProps({
    desserts: Array,
    title: String
})

const desserts = computed(() => props.desserts)

function edit(item) {
    console.log(item)
}

function delet(item) {
    console.log(item)
}

</script>

<style scoped>
</style>