import CardapioHttp from "@/Services/Http/CardapioHttp";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useCardapioStore = defineStore('cardapio', () => {

    const cardapioHttp = new CardapioHttp()
    const lanche = ref([])

    const promocao = reactive([
        {
            id: 200, 
            name: 'Panqueca',
            url: 'https://static.itdg.com.br/images/1200-630/fe99f60e599810d8f12b3d21edd2be6f/319710-original.jpg',
            descricao: 'As panquecas são um prato clássico e versátil que consiste em finas e macias massas feitas a partir de uma mistura de farinha, ovos, leite e outros ingredientes.',
            valor: 6.00,
            qnt: 0  
        },
        {
            id: 201, 
            name: 'Americano',
            url: 'https://amopaocaseiro.com.br/wp-content/uploads/2021/01/receita-joelho-ou-enroladinho.jpg',
            descricao: 'O americano salgadinho é um clássico petisco crocante e saboroso, popular em muitas partes do mundo. Esses salgadinhos são geralmente feitos de milho, temperados com uma combinação única de especiarias e assados ou fritos até atingirem uma textura leve e crocante.',
            valor: 5.00,
            qnt: 0  
        },
        {
            id: 202, 
            name: 'Esfiha',
            url: 'https://i.ytimg.com/vi/xEumVhfcYzU/maxresdefault.jpg',
            descricao: 'A esfiha é um delicioso quitute de origem árabe que consiste em uma massa macia e recheada com uma combinação de ingredientes saborosos. A massa da esfiha é geralmente feita com farinha de trigo, água, fermento e sal, resultando em uma textura leve e fofinha.',
            valor: 6.50,
            qnt: 0  
        },
        {
            id: 203, 
            name: 'Baião de Dois',
            url: 'https://static.itdg.com.br/images/1200-630/5c8065da807efe5372cd08403803c788/365866-original.jpg',
            descricao: 'É uma combinação de arroz e feijão de corda cozidos juntos, resultando em uma mistura saborosa e consistente. Além do arroz e feijão, o baião de dois leva outros ingredientes como carne seca, linguiça calabresa, queijo coalho, cebola, alho, pimentões e temperos como coentro e cominho.',
            valor: 21.50,
            qnt: 0  
        },
        {
            id: 204, 
            name: 'Vaca Atolada',
            url: 'https://receitasdeminuto.com/wp-content/uploads/2022/03/vaca_atolada1.jpg',
            descricao: 'É um prato rico e reconfortante, preparado com carne de boi, geralmente costela ou ossobuco, e mandioca (também conhecida como aipim ou macaxeira) como ingredientes principais.',
            valor: 20.00,
            qnt: 0  
        },
        {
            id: 205, 
            name: 'Macarronada',
            url: 'https://www.sabornamesa.com.br/media/k2/items/cache/b5b56b2ae93d3dc958cf0c21c9383b18_XL.jpg',
            descricao: 'A base da macarronada é o macarrão, que pode variar em formato, como espaguete, penne, fusilli, entre outros. O macarrão é cozido até ficar al dente, ou seja, com uma textura firme porém cozido.',
            valor: 21.90,
            qnt: 0  
        },
        {
            id: 206, 
            name: 'Lasanha',
            url: 'https://static.itdg.com.br/images/1200-630/5a4887ec15a6bc742554f04def00ed4d/325115-original.jpg',
            descricao: 'A lasanha é um prato clássico da culinária italiana, conhecido por suas camadas de massa intercaladas com molho de tomate, queijo e outros ingredientes saborosos.',
            valor: 11.00,
            qnt: 0  
        },
    ])

    const combos = reactive([
        {
            id: 100, 
            name: '3 LANCHES + 3 FRITAS 90G + 1 guaraná litro',
            url: 'https://casaeconstrucao.org/wp-content/uploads/2021/03/0-inspiracoes-para-combos-de-lanches.jpg',
            descricao: 'Desfrute de um combo irresistível composto por 3 lanches deliciosos, 3 porções de fritas crocantes de 90g e um refrescante guaraná de 1 litro. ',
            valor: 99.00,
            qnt: 0  
        },
        {
            id: 101, 
            name: '1 HAMBURGUER + 1 FRITAS 120G',
            url: 'https://liveseo-app.s3.sa-east-1.amazonaws.com/P11226/UR/465_5.jpg',
            descricao: 'Delicie-se com um combo delicioso que inclui um suculento hambúrguer acompanhado por uma porção generosa de fritas crocantes de 120g. ',
            valor: 48.50,
            qnt: 0       
        },
        {
            id: 102, 
            name: '2 HAMBURGUER + 1 FRITAS 100G + REFRIGERANTE 500 ML',
            url: 'https://aaronturatv.ig.com.br/wp-content/uploads/2023/04/combo-burger-king-bk.jpg',
            descricao: 'Aproveite um combo incrível composto por dois suculentos hambúrgueres, uma porção de fritas crocantes de 100g e um refrigerante refrescante de 500 ml.',
            valor: 73.00,
            qnt: 0       
        },
        {
            id: 103, 
            name: '2 HAMBURGUER',
            url: 'https://liveseo-app.s3.sa-east-1.amazonaws.com/P11226/UR/860_3.jpg',
            descricao: 'Desfrute de um combo suculento que inclui dois hambúrgueres deliciosos. Cada hambúrguer é cuidadosamente preparado, com ingredientes frescos e sabores irresistíveis. ',
            valor: 55.00,
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
        return itens.filter(item => item.nome.toLowerCase().includes(searchLowCase))
    }

    async function fetchLanche() {
        debugger
        lanche.value = await cardapioHttp.getLanche()
    }    

    return {
        lanche,
        bebidas,
        combos,
        pratoPrincipal,
        pratoFrio,
        promocao,
        filtraTipo,
        fetchLanche
    }
})