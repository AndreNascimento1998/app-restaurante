import CardapioHttp from "@/Services/Http/CardapioHttp";
import { defineStore } from "pinia";
import {  ref } from "vue";

export const useCardapioStore = defineStore('cardapio', () => {

    const cardapioHttp = new CardapioHttp()
    const lanche = ref([])
    const bebida = ref([])
    const combo = ref([])
    const pratoPrincipal = ref([])
    const pratoFrio = ref([])
    const promocao = ref([])

    function filtraTipo(itens, searchItem) {
        if(!searchItem){
            return itens
        }
    
        const searchLowCase = searchItem.toLowerCase()
        return itens.filter(item => item.nome.toLowerCase().includes(searchLowCase))
    }

    async function fetchAlimentoCategoria(rota) {
        return await cardapioHttp.getAlimentoCategoria(`${rota}`)
    }    

    return {
        lanche,
        bebida,
        combo,
        promocao,
        pratoFrio,
        pratoPrincipal,
        filtraTipo,
        fetchAlimentoCategoria
    }
})