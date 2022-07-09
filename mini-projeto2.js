//Escrever uma função que usa 2 Números e retornar o maior entre eles

function retornaMaior(N1,N2){ 
    
    if(N1 > N2){
        return N1
    }
    else if (N1 < N2){
        return N2
    }
    else{
        console.log('Os numeros são iguais');
    }

    // Ou podemos fazer com o operador ternário, preferi usar IF e else para colocar uma
    // condição a mais no caso de serem iguais aparecer um texto

    //return N1 > N2 ? N1:N2 ;

    
}

console.log(retornaMaior(2,3));

