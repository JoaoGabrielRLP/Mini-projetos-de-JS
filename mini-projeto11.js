//Criar um objeto que contenha
//Rua
//Cidade
//CEP
//Função exibirEndereco

/*function exibirEndereco(Rua,Cidade,CEP){
    return {
        Rua,
        Cidade,
        CEP
    }
    
}

const endereco = exibirEndereco('Aguas Cristalina', 'Viamão', 9476000);
console.log(endereco);*/

//Outra forma de fazer

let endereco = {
    rua: 'Rua de teste',
    cidade: 'Seila',
    cep: 555555
};

function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave,endereco[chave]);
    }
}

exibirEndereco(endereco);

