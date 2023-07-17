<template>
    <v-container>
        <data-table 
            :desserts="carteStore.pratoPrincipal"
            title="Pratos Principais"
        />
    </v-container>
</template>

<script setup>
import DataTable from '@/components/data-table/DataTableComponent.vue'
import { useCardapioStore } from '@/stores/CardapioStore'
import { onMounted } from 'vue'

const carteStore = useCardapioStore()

onMounted(async () => {
    carteStore.pratoPrincipal = await carteStore.fetchAlimentoCategoria('/prato-principal')
})
</script>