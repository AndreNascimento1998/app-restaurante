<template>
    <v-container>
        <data-table 
            :desserts="carteStore.pratoFrio"
            title="Pratos Frios"
        />
    </v-container>
</template>

<script setup>
import DataTable from '@/components/data-table/DataTableComponent.vue'
import { useCardapioStore } from '@/stores/CardapioStore'
import { onMounted } from 'vue'

const carteStore = useCardapioStore()

onMounted(async () => {
    carteStore.pratoFrio = await carteStore.fetchAlimentoCategoria('/prato-frio')
})
</script>