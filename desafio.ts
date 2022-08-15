// Como podemos melhorar o esse código usando TS? 

//Desafio n2


enum Profissao {
    Atriz,
    Padeiro,
    atriz,
    padeiro
}

interface Pessoa {

    nome:string, 
    idade: number;
    profissao: Profissao

}

const pessoa1: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz

}

const pessoa2: Pessoa = {
    nome:"roberto",
    idade: 19,
    profissao: Profissao.padeiro
    
}

const pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.atriz
}

const pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}


function listar(lista: string ) {

    for( const item of lista) {

        console.log('-', item);
    }

}


listar (pessoa1.nome);
