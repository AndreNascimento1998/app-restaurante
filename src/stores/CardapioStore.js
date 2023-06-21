import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCardapioStore = defineStore('cardapio', () => {
    const combos = reactive([
        {
            id: 100, 
            name: '3 LANCHES + 3 FRITAS 90G + 1 guaraná litro',
            url: 'https://casaeconstrucao.org/wp-content/uploads/2021/03/0-inspiracoes-para-combos-de-lanches.jpg',
            descricao: 'Comodia joaponesaaaa',
            valor: 99.00,
            qnt: 0  
        },
        {
            id: 101, 
            name: '1 HAMBURGUER + 1 FRITAS 120G',
            url: 'https://liveseo-app.s3.sa-east-1.amazonaws.com/P11226/UR/465_5.jpg',
            descricao: 'Comodia joaponesaaaa',
            valor: 48.50,
            qnt: 0       
        },
        {
            id: 102, 
            name: '2 HAMBURGUER + 1 FRITAS 100G + REFRIGERANTE 500 ML',
            url: 'https://aaronturatv.ig.com.br/wp-content/uploads/2023/04/combo-burger-king-bk.jpg',
            descricao: 'Comodia joaponesaaaa',
            valor: 73.00,
            qnt: 0       
        },
        {
            id: 103, 
            name: '2 HAMBURGUER',
            url: 'https://liveseo-app.s3.sa-east-1.amazonaws.com/P11226/UR/860_3.jpg',
            descricao: 'Comodia joaponesaaaa',
            valor: 55.00,
            qnt: 0  
        },
    ])

    const lanche = reactive([
        { 
            id: 1, 
            name: 'Misto-quente',
            url: 'https://food-images.files.bbci.co.uk/food/recipes/tiktok_breakfast_42301_16x9.jpg',
            descricao: 'é um sanduíche quente, preparado à base de queijo e presunto (ou fiambre). Pode ser preparado em frigideira, forno convencional, forno de micro-ondas ou prensa térmica ("misteira" ou sanduicheira).',
            valor: 14.90,
            qnt: 0
        },
        { 
            id: 2, 
            name: 'Pizza de calabresa',
            url: 'https://www.sabornamesa.com.br/media/k2/items/cache/9189082f4804c1ab16e77d2cfe8d09d4_XL.jpg',
            descricao: 'É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano. A linguiça calabresa agrega um sabor único e levemente picante à pizza.',
            valor: 35.00,
            qnt: 0
        },
        { 
            id: 3, 
            name: 'Pizza Portuguesa',
            url: 'https://res.cloudinary.com/mrancho/cardapio/2016/06/pizza-portuguesa_min.jpg',
            descricao:'Mussarela, presunto, tomate, cebola, alho, azeite, orégano, ervilha, ovos cozidos e azeitonas',
            valor: 32.90,
            qnt: 0
        },
        { 
            id: 4, 
            name: 'X-tudo',
            url: 'https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1.jpg',
            descricao: 'Pão, Carne, Maionese, Queijo, Bacon, Ovo, Presunto, Salada e Batata Palha.',
            valor: 22.00,
            qnt: 0
        },
        { 
            id: 5, 
            name: 'X-salada',
            url: 'https://assets.unileversolutions.com/recipes-v2/106684.jpg',
            descricao: 'Pão, Carne, Maionese, Queijo, Presunto, Salada e Batata Palha.',
            valor: 18.00,
            qnt: 0
        },
        { 
            id: 21, 
            name: 'Hamburguer',
            url: 'https://uploads.metropoles.com/wp-content/uploads/2022/05/03124339/hamburguer-8-1024x683.jpg',
            descricao: 'O hambúrguer (do inglês hamburger), também conhecido como hamburgo, hamburguesa ou sanduíche de carne, é um preparado de carne temperada (principalmente de carne bovina, ocasionalmente de frango moído, carne suína moída ou com misturas de carnes) e moldada em formato circular.',
            valor: 23.50,
            qnt: 0
        },
        { 
            id: 22, 
            name: 'Coxinha',
            url: 'https://static.itdg.com.br/images/1200-630/12d6edf758753748df23c3b69a2258fc/279010-original.jpg',
            descricao: 'PA coxinha é um salgado brasileiro, de origem paulista, feito com massa de farinha de trigo e caldo de galinha, que envolve um recheio elaborado com carne temperada de frango, queijo, calabresa ou vários outros tipos de sabores.',
            valor: 12.00,
            qnt: 0
        },
        { 
            id: 23, 
            name: 'Pastel de Carne',
            url: 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-pastel-de-carne-moida-e-repolho.jpg',
            descricao: 'Recheado com carne moída nobre e refogada ao vinho com temperos fresquinhos. Um pouquinho de ervas frescas, ovo cozido e um toque de azeitonas e gotinhas de azeite extra virgem. Ingredientes: Carne bovina moída, massa para pastel, tomate, molho de tomate, salsa cebola, alho e cebolinha.',
            valor: 12.00,
            qnt: 0
        },
        { 
            id: 24, 
            name: 'Pastelão Frito',
            url: 'https://receitasbaratas.com.br/wp-content/uploads/2023/01/Pastelao-Portugues-Delicioso-e-Facil-de-Preparar.jpg',
            descricao: 'Pastelão é um alimento composto por uma massa à base de farinha a que se dá a forma de um envelope, se recheia e depois se frita por imersão em óleo fervente.',
            valor: 11.50,
            qnt: 0
        },
        { 
            id: 25, 
            name: 'Torta de Frango',
            url: 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-torta-frango-catupiry.jpg?quality=85&strip=info',
            descricao: 'Os primeiros registros dão conta da sua origem no Grécia Antiga, como oferenda para a Deusa Artemis, a divindade da natureza. Os recheios eram frutas e cereais, em um formato redondo, em referência a Lua.',
            valor: 14.50,
            qnt: 0
        },
        { 
            id: 26, 
            name: 'Sandwich de Presunto',
            url: 'https://acarnequeomundoprefere.com.br/uploads/media/image/3b22b9b26bbcf21c9dc1408efd6db120.jpg',
            descricao: 'O melhor incontestável, pão recheado com presunto, muito saboroso!',
            valor: 8.00,
            qnt: 0
        },
        
    ]) 

    const bebidas = reactive([
        { 
            id: 6, 
            name: 'Pepsi',
            url: 'https://hiperideal.vteximg.com.br/arquivos/ids/199465-1000-1000/84d520f22b8cf43ffbd13d0cd8594db4_refrigerante-pepsi-cola-lata-269ml_lett_1.jpg?v=637908033551300000',
            descricao: 'Refrigerante de 350 ml',
            valor: 6.00,
            qnt: 0
        },
        { 
            id: 7, 
            name: 'Coca-cola',
            url: 'https://www.banca43.com.br/cdn/imagens/produtos/det/117939.jpg',
            descricao: 'Refrigerante de 350 ml',
            valor: 6.50,
            qnt: 0
        },
        { 
            id: 8, 
            name: 'Suco',
            url: 'https://www.supermercadoriodaspedras.com.br/wp-content/uploads/2022/09/7896520029095.png',
            descricao: 'Suco de 1 L',
            valor: 5.90,
            qnt: 0
        },
        
    ]) 

    const pratoPrincipal = reactive([
        { 
            id: 9, 
            name: 'Yakisoba',
            url: 'https://s2.glbimg.com/sbY-7k1GbROb56FDTqj9XAEzIDQ=/e.glbimg.com/og/ed/f/original/2021/07/22/yakisoba.jpeg',
            descricao: 'Yakisoba significa “macarrão frito em molho”. Sem dúvida, uma definição bastante precisa de como é esse prato, que é um dos mais famosos do mundo. Assim, de forma resumida, este carboidrato é refogado junto com diversos ingredientes, como legumes e carnes.',
            valor: 36.00,
            qnt: 0
        },
        { 
            id: 10, 
            name: 'Strogonofe',
            url: 'https://receitinhas.com.br/wp-content/uploads/2016/06/istock-1313903223.webp',
            descricao: 'Prato confeccionado com tiras de carne, molho de natas e cogumelos. Origem etimológica:francês strogonoff, do russo stroganov.',
            valor: 32.50,
            qnt: 0
        },
        { 
            id: 11, 
            name: 'Lámen',
            url: 'https://segredosdomundo.r7.com/wp-content/uploads/2020/02/lamen-tudo-sobre-essa-maravilha-gastronomica.jpg',
            descricao: 'O lámen (em japonês, pronuncia-se “raamen”) é basicamente o macarrão servido com um caldo quente de sabor variado, acompanhado dos mais diversos ingredientes: legumes, carne de porco, algas, etc.',
            valor: 31.90,
            qnt: 0
        },
        { 
            id: 12, 
            name: 'Feijoada',
            url: 'https://www.portalacesse.com.br/wp-content/uploads/2018/11/feijoada-e1542930654160.jpg',
            descricao: 'A feijoada é um dos pratos típicos mais conhecidos e populares da culinária brasileira. Composta basicamente por feijão preto, diversas partes do porco, linguiça, farinha e o acompanhamento de verduras e legumes, ela é comumente apontada como uma criação culinária dos africanos escravizados que vieram para o Brasil.',
            valor: 32.90,
            qnt: 0
        },
        { 
            id: 13, 
            name: 'Galinhada',
            url: 'https://dd7gu835n6agp.cloudfront.net/wp-content/uploads/2022/07/galinhada-1280x720.jpg',
            descricao: 'Galinhada é um prato culinário típico da culinária brasileira, mais especificamente dos estados de São Paulo, Minas Gerais (Triângulo Mineiro e Alto Paranaíba) e Goiás. De origem bandeirante, consiste em arroz cozido e frango em pedaços cozido.',
            valor: 31.00,
            qnt: 0
        },
        { 
            id: 14, 
            name: 'Arroz com Pequi',
            url: 'https://img.band.uol.com.br/image/2023/03/21/arroz-com-pequi-155928.jpg',
            descricao: 'O arroz com pequi é um prato tradicional da culinária goiana, reconhecido como símbolo cultural, ocupando papel de destaque nas práticas alimentares da Page 21 21 região.',
            valor: 30.90,
            qnt: 0
        },
        { 
            id: 15, 
            name: 'Macarrão ao Alho e Óleo',
            url: 'https://static.itdg.com.br/images/1200-675/b738131b402ba33d58befa56415ba106/324571-original.jpg',
            descricao: 'Spaghetti aglio e olio (do italiano: "espaguete [ao] alho e óleo") é um prato de massa italiana tradicional de Nápoles.',
            valor: 31.00,
            qnt: 0
        },
        { 
            id: 16, 
            name: 'Carne ao Molho Madeira',
            url: 'https://blog.cybercook.com.br/wp-content/uploads/2022/07/molho-madeira-legitimo-para-harmonizar-com-o-vinho-certo-scaled.jpeg',
            descricao: 'O molho madeira traz no nome os vestígios de sua origem: levando em sua receita o vinho madeira, original da Ilha da Madeira, arquipélago português, é normal se crer que essa é uma receita portuguesa. Porém a paternidade desse prato é reivindicada por ingleses e até mesmo franceses.',
            valor: 33.50,
            qnt: 0
        },
    ])
    
    const pratoFrio = reactive([
        { 
            id: 17, 
            name: 'Lanche de Pão Dormido',
            url: 'https://anamariabraga.globo.com/wp-content/uploads/2017/04/-11240.jpg',
            descricao: 'Um bom jeito de variar na forma de usar pão francês do dia anterior é essa receita. Vira uma torta saborosa, ótima para levar na marmita.',
            valor: 11.00,
            qnt: 0
        },
        { 
            id: 18, 
            name: 'Bolinho de Arroz e Jiló',
            url: 'https://anamariabraga.globo.com/wp-content/uploads/2017/04/-799.jpg',
            descricao: 'Para quem gosta de jiló, essa receita é ótima: funciona tanto como lanche da tarde, quanto como almoço. Leva queijo Canastra e rende 30 porções!',
            valor: 9.50,
            qnt: 0
        },
        { 
            id: 19, 
            name: 'Omelete Japonesa',
            url: 'https://cdn0.tudoreceitas.com/pt/posts/8/7/4/omelete_japonesa_original_8478_600.jpg',
            descricao: 'A tamagoyaki é como se fosse um “rocambole” de omelete. Os ingredientes não são tão diferentes da receita clássica, mas o preparo é que muda. Fora que comê-la fria é um hábito bastante comum entre os japoneses.',
            valor: 12.00,
            qnt: 0
        },
        { 
            id: 20, 
            name: 'Empada de Arroz e Cenoura',
            url: 'https://2.bp.blogspot.com/-rEHbyXepwSk/UTuVxILlS_I/AAAAAAAADc0/XTbj97e5x44/s1600/Empadas+de+Arroz.JPG',
            descricao: 'As vantagens dessa receita são: arroz e cenoura são ingredientes que todo mundo tem em casa, utiliza sobras de outros preparos (consumo consciente, alô!) e rende 9 porções. Ou seja, dá para levar para o trabalho por dois ou três dias, inclusive como lanche!',
            valor: 11.90,
            qnt: 0
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
        combos,
        pratoPrincipal,
        pratoFrio,
        filtraTipo,
    }
})