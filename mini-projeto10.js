// Criar função para mostrar os números primos

exibirNumerosPrimos(11);

function exibirNumerosPrimos(limite){
    for(i = 2; i <= limite; i++){         
        if(calcularNumerosPrimos(i)) console.log(i);    
        
    }
}

function calcularNumerosPrimos(i){
    for(let divisor = 2; divisor < i; divisor++){
        if(i % divisor === 0){
            return false;
        }
    }
    return true;
}