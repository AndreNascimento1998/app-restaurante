<template>
    <v-container>
        <data-table 
            :desserts="carteStore.promocao"
            title="Promoções"
        />
    </v-container>
</template>

<script setup>
import DataTable from '@/components/data-table/DataTableComponent.vue'
import { useCardapioStore } from '@/stores/CardapioStore'
import { onMounted } from 'vue'

const carteStore = useCardapioStore()

onMounted(async () => {
    carteStore.promocao = await carteStore.fetchAlimentoCategoria('/promocao')
})
</script>