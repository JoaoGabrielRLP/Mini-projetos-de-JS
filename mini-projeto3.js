//FizzBuzz

//Divisível por 3 -> Fizz
//Divisível por 5 -> Buzz
//Divisivel por 3 e 5 -> FizzBuzz
//Não divisivel por 3 ou 5 - Retornar o valor
//Não é um número -> 'Não é um número'

const resultado = fizzBuzz('15');
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){
        console.log('não é um número');
    }
    
    if(entrada % 3 === 0){

        if(entrada % 3 === 0 && entrada % 5 === 0){
            console.log('FizzBuzz');
        }
        else{
            console.log('Fizz');
        }
    }
    else if(entrada % 5 === 0){
        console.log('Buzz');
    }

    else if(entrada % 3 > 0 || entrada % 5 > 0){
        return entrada;
    }

    //Outra forma de fazer

    /*if(typeof entrada !== 'number')
        console.log(entrada + ' não é um número');
    if(entrada % 3 === 0 && entrada % 5 === 0)
        console.log('FizzBuzz');
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';    
    return entrada;*/


  
}