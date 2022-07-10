//Objeto postagem de blog

/*let postagem = {
    titulo: 'Seila',
    mensagem: 'Fazendo live de seila',
    autor: 'Alanzoka',
    visualizacoes: 99999,
    comentarios : [
      { autor: 'a', mensagem: 'b'},  
      { autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem);*/

//Objeto construtor postagem de blog

/*function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = comentarios = [],
    this.estaAoVivo = false
    //Num método construtor, para ter um código mais limpo, é importante considerar a quantidade de 
    //parâmentros no construtor, no máximo 3 de preferência
}

let postagem = new Postagem('a', 'b', 'c')
console.log(postagem);*/

//Objeto faixa de preço

/*let faixaPreco = [
    { tooltip: 'até R$700', minimo: 0, maximo:700},
    { tooltip: 'até R$700 a R$1000', minimo: 700, maximo:1000},
    { tooltip: 'até R$1000 ou mais', minimo: 1000, maximo:9999999}
]*/

 // faixa de preço com factory function
function criaFaixaPreco(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,10000),
]

console.log(faixa2)

//Faixa preço (método construtor)
function FaixaPreco3(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixa3 = [
    new FaixaPreco3('d',10,20),
    new FaixaPreco3('e',10,20),
    new FaixaPreco3('f',10,20),
]
console.log(faixa3)