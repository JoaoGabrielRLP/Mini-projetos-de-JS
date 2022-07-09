//Receber uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou impar
exibirTipo(6);

function exibirTipo(limite) {
    for(let i = 0; i <= limite; i++){
        if(i % 2 !== 0){
            console.log('Esse número é impar:', i);
        }
        else{
            console.log('Esse número é par:', i);
        }
    }
}