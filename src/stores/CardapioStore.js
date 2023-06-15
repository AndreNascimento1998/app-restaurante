import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCardapioStore = defineStore('cardapio', () => {
    const lanche = reactive([
        { 
            id: 1, 
            name: 'Misto-quente',
            url: 'https://food-images.files.bbci.co.uk/food/recipes/tiktok_breakfast_42301_16x9.jpg',
            descricao: 'é um sanduíche quente, preparado à base de queijo e presunto (ou fiambre). Pode ser preparado em frigideira, forno convencional, forno de micro-ondas ou prensa térmica ("misteira" ou sanduicheira).'
        },
        { 
            id: 2, 
            name: 'Pizza de calabresa',
            url: 'https://www.sabornamesa.com.br/media/k2/items/cache/9189082f4804c1ab16e77d2cfe8d09d4_XL.jpg',
            descricao: 'É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano. A linguiça calabresa agrega um sabor único e levemente picante à pizza.'
        },
        { 
            id: 3, 
            name: 'X-tudo',
            url: 'https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1.jpg',
            descricao: 'Pão, Carne, Maionese, Queijo, Bacon, Ovo, Presunto, Salada e Batata Palha.'
        },
        
    ]) 

    const bebidas = reactive([
        { 
            id: 1, 
            name: 'Coca-cola',
            url: 'https://food-images.files.bbci.co.uk/food/recipes/tiktok_breakfast_42301_16x9.jpg',
        },
        { 
            id: 2, 
            name: 'Pepsi',
            url: 'https://www.sabornamesa.com.br/media/k2/items/cache/9189082f4804c1ab16e77d2cfe8d09d4_XL.jpg',
        },
        { 
            id: 3, 
            name: 'Suco',
            url: 'https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1.jpg',
        },
        
    ]) 
    
    function filtraTipo(itens, searchItem) {
        if(!searchItem){
            return itens
        }
    
        const searchLowCase = searchItem.toLowerCase()
        return itens.filter(item => item.name.toLowerCase().includes(searchLowCase))
    }

    return {
        lanche,
        bebidas,
        filtraTipo,
    }
})