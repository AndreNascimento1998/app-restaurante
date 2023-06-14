import { defineStore } from "pinia";

export const useHomeStore = defineStore('home', () => {

    const pratos = [
        {
            nome: 'Yakisoba',
            src: "https://s2.glbimg.com/sbY-7k1GbROb56FDTqj9XAEzIDQ=/e.glbimg.com/og/ed/f/original/2021/07/22/yakisoba.jpeg"
        },
        {
            nome: 'Lamén',
            src: "https://segredosdomundo.r7.com/wp-content/uploads/2020/02/lamen-tudo-sobre-essa-maravilha-gastronomica.jpg"
        },
        {
            nome: 'Strogonoffe',
            src: "https://receitinhas.com.br/wp-content/uploads/2016/06/istock-1313903223.webp"
        },
        {
            nome: 'Carne ao Molho Madeira',
            src: "https://blog.cybercook.com.br/wp-content/uploads/2022/07/molho-madeira-legitimo-para-harmonizar-com-o-vinho-certo-scaled.jpeg"
        }
    ]

    const depoimentos = [
        {
            nome: 'Phantom Assassin',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vitae officiis omnis aspernatur harum? At voluptates omnis quibusdam accusamus id, magni aperiam et voluptatum, voluptate doloribus tempore autem similique',
            url: 'https://i.ytimg.com/vi/POop06uXlPI/hqdefault.jpg'
        },
        {
            nome: 'Darth Vader',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam officiis dolore accusamus sapiente recusandae velit eligendi corporis hic necessitatibus animi, expedita alias quasi sunt officia. Cupiditate porro ut fugiat',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Star_Wars_-_Darth_Vader.jpg'
        },
        {
            nome: 'Gandalf',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore suscipit expedita nesciunt at non, maiores cum tempora voluptates perspiciatis asperiores, ab sapiente consectetur tempore nisi aperiam consequatur! Quidem, ad unde',
            url: 'https://cdn.pensador.com/img/authors/ga/nd/gandalf-l.jpg'
        },
        {
            nome: 'McLovin',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore suscipit expedita nesciunt at non, maiores cum tempora voluptates perspiciatis asperiores, ab sapiente consectetur tempore nisi aperiam consequatur! Quidem, ad unde',
            url: 'https://conteudo.imguol.com.br/c/entretenimento/48/2019/06/03/mclovin-tenta-comprar-bebida-em-superbad---e-hoje-1559598691949_v2_1x1.png'
        },
    ]

    return {
        pratos,
        depoimentos
    }
})