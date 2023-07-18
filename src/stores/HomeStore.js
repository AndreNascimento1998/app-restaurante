import { defineStore } from "pinia";

export const useHomeStore = defineStore('home', () => {

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
        depoimentos
    }
})