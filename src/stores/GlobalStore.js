import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore('global', () => {
    let tema = ref('light')
    const refeicaoPagePrincipal = ref('')
    //trocar depois
    const isLog = ref(true)

    function trocaTema() {
        if(tema.value === 'light') {
            tema.value = 'dark'
        }else {
            tema.value = 'light'
        }
    }

    return {
        refeicaoPagePrincipal,
        tema,
        isLog,
        trocaTema
    }
})