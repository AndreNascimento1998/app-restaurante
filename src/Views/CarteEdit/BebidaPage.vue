<template>
    <v-container>
        <data-table 
            :desserts="carteStore.bebida"
            title="Bebidas"
        />
    </v-container>
</template>

<script setup>
import DataTable from '@/components/CarteEdit/DataTableComponent.vue'
import { useCardapioStore } from '@/stores/CardapioStore'
import { onMounted } from 'vue'

const carteStore = useCardapioStore()

onMounted(async () => {
    carteStore.bebida = await carteStore.fetchAlimentoCategoria('/bebidas')
})
</script>