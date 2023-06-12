import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore('global', () => {
    let tema = ref('light')

    function trocaTema() {
        if(tema.value === 'light') {
            tema.value = 'dark'
        }else {
            tema.value = 'light'
        }
    }

    return {
        tema,
        trocaTema
    }
})