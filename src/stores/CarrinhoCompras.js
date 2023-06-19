import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useCarrinhoCompras = defineStore('carrinhoCompras', () => {
    const carrinhoDeCompras = reactive([])
    const precoStore = ref(0)
    
    return {
        carrinhoDeCompras,
        precoStore
    }
})