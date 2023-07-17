<template>
    <v-container>
        <data-table 
            :desserts="carteStore.lanche"
            title="Lanches"
        />
    </v-container>
</template>

<script setup>
import DataTable from '@/components/data-table/DataTableComponent.vue'
import { useCardapioStore } from '@/stores/CardapioStore'
import { onMounted } from 'vue'

const carteStore = useCardapioStore()

onMounted(async () => {
    carteStore.lanche = await carteStore.fetchAlimentoCategoria('/lanches')
})
</script>