import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCardapioStore = defineStore('cardapio', () => {
    const promocao = reactive([
        {
            id: 1, 
            name: 'Yakisoba',
            url: 'https://s2.glbimg.com/sbY-7k1GbROb56FDTqj9XAEzIDQ=/e.glbimg.com/og/ed/f/original/2021/07/22/yakisoba.jpeg',
            descricao: 'Comodia joaponesaaaa'       
        },
        {
            id: 1, 
            name: 'Yakisoba',
            url: 'https://s2.glbimg.com/sbY-7k1GbROb56FDTqj9XAEzIDQ=/e.glbimg.com/og/ed/f/original/2021/07/22/yakisoba.jpeg',
            descricao: 'Comodia joaponesaaaa'       
        },
        {
            id: 1, 
            name: 'Yakisoba',
            url: 'https://s2.glbimg.com/sbY-7k1GbROb56FDTqj9XAEzIDQ=/e.glbimg.com/og/ed/f/original/2021/07/22/yakisoba.jpeg',
            descricao: 'Comodia joaponesaaaa'       
        },
        {
            id: 1, 
            name: 'Yakisoba',
            url: 'https://s2.glbimg.com/sbY-7k1GbROb56FDTqj9XAEzIDQ=/e.glbimg.com/og/ed/f/original/2021/07/22/yakisoba.jpeg',
            descricao: 'Comodia joaponesaaaa'       
        },
        {
            id: 1, 
            name: 'Yakisoba',
            url: 'https://s2.glbimg.com/sbY-7k1GbROb56FDTqj9XAEzIDQ=/e.glbimg.com/og/ed/f/original/2021/07/22/yakisoba.jpeg',
            descricao: 'Comodia joaponesaaaa'       
        },
        {
            id: 1, 
            name: 'Yakisoba',
            url: 'https://s2.glbimg.com/sbY-7k1GbROb56FDTqj9XAEzIDQ=/e.glbimg.com/og/ed/f/original/2021/07/22/yakisoba.jpeg',
            descricao: 'Comodia joaponesaaaa'     
        },
    ])

    const lanche = reactive([
        { 
            id: 1, 
            name: 'Misto-quente',
            url: 'https://food-images.files.bbci.co.uk/food/recipes/tiktok_breakfast_42301_16x9.jpg',
            descricao: 'é um sanduíche quente, preparado à base de queijo e presunto (ou fiambre). Pode ser preparado em frigideira, forno convencional, forno de micro-ondas ou prensa térmica ("misteira" ou sanduicheira).',
            valor: 14.90
        },
        { 
            id: 2, 
            name: 'Pizza de calabresa',
            url: 'https://www.sabornamesa.com.br/media/k2/items/cache/9189082f4804c1ab16e77d2cfe8d09d4_XL.jpg',
            descricao: 'É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano. A linguiça calabresa agrega um sabor único e levemente picante à pizza.',
            valor: 35.00
        },
        { 
            id: 3, 
            name: 'Pizza Portuguesa',
            url: 'https://res.cloudinary.com/mrancho/cardapio/2016/06/pizza-portuguesa_min.jpg',
            descricao:'Mussarela, presunto, tomate, cebola, alho, azeite, orégano, ervilha, ovos cozidos e azeitonas',
            valor: 32.90
        },
        { 
            id: 4, 
            name: 'X-tudo',
            url: 'https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1.jpg',
            descricao: 'Pão, Carne, Maionese, Queijo, Bacon, Ovo, Presunto, Salada e Batata Palha.',
            valor: 22.00
        },
        { 
            id: 5, 
            name: 'X-salada',
            url: 'https://assets.unileversolutions.com/recipes-v2/106684.jpg',
            descricao: 'Pão, Carne, Maionese, Queijo, Presunto, Salada e Batata Palha.',
            valor: 18.00
        },
        
    ]) 

    const bebidas = reactive([
        { 
            id: 6, 
            name: 'Pepsi',
            url: 'https://hiperideal.vteximg.com.br/arquivos/ids/199465-1000-1000/84d520f22b8cf43ffbd13d0cd8594db4_refrigerante-pepsi-cola-lata-269ml_lett_1.jpg?v=637908033551300000',
            descricao: 'Refrigerante de 350 ml',
            valor: 6.00
        },
        { 
            id: 7, 
            name: 'Coca-cola',
            url: 'https://www.banca43.com.br/cdn/imagens/produtos/det/117939.jpg',
            descricao: 'Refrigerante de 350 ml',
            valor: 6.50
        },
        { 
            id: 8, 
            name: 'Suco',
            url: 'https://www.supermercadoriodaspedras.com.br/wp-content/uploads/2022/09/7896520029095.png',
            descricao: 'Suco de 1 L',
            valor: 5.90
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
        promocao,
        filtraTipo,
    }
})