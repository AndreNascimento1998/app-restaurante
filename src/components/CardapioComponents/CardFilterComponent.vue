<template>
    <h2 style="font-style: italic;" class="letra pa-2 mt-10" v-show="itemFilter.length == 0 ? false : true">{{ props.title }}
        </h2>
        <v-row>
            <v-col v-for="item in itemFilter" :key="item.id" cols="4">
                <v-card density="compact" class="mx-auto" max-width="550">
                    <v-img class="align-end text-white " height="150" :src="item.url" cover />
                    <v-card-title>
                        {{ item.nome }}
                    </v-card-title>
                    <v-card-text>
                        <span>{{ item.descricao.slice(0, 89) }} </span> <span v-if="item.descricao.length > 89">...</span>
                    </v-card-text>

                    <v-card-actions>
                        <dialog-component 
                            :nome="item.nome" 
                            :src="item.url" 
                            :descricao="item.descricao"
                            :id="item._id"
                            :valor="item.valor"
                        />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
</template>

<script setup>
    import DialogComponent from "@/components/CardapioComponents/DialogComponent.vue";
    import { useCardapioStore } from "@/stores/CardapioStore";
    import { computed } from "vue";
    import { defineProps } from "vue";
    
    const cardapioState = useCardapioStore()

    const props = defineProps({
        title: String,
        searchItem: String,
        wantedItem: Array
    })

    const itemFilter = computed(() => cardapioState.filtraTipo(props.wantedItem, props.searchItem))
    
</script>

<style scoped>
.letra {
    color: #da7b08;
}

.promocao {
    width: 50%;
    height: 50%;
    
}
</style>