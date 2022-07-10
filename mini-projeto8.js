// Exercício Nota escolar
// Obter a média a partir de um array 

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [100,100,100];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let soma = 0;
    for(let total in notas){
        soma += notas[total]
        
    }
    
    media = soma / (notas.length);

    if(media == 0 || media <= 59)
    {
        console.log('F')
    }

    else if(media == 60 || media <= 69)
    {
        console.log('D')
    }

    else if(media == 70 || media <= 79)
    {
        console.log('C')
    }

    else if(media == 80 || media <= 89)
    {
        console.log('B')
    }

    else if(media == 90 || media <= 100)
    {
        console.log('A')
    }

}  
    console.log('Sua média é: ' + media);

   
     //Forma mais clean

    /*function mediaDoAluno(notas){
        const media = calcularMedia(notas);

        if(media < 59) return 'F';
        if(media < 69) return 'D';
        if(media < 79) return 'C';
        if(media < 89) return 'B';
        Return 'A';

    } 
    
    function calcularMedia(array){
         let soma = 0;
        for(let valor of array){
        soma += valor;
        
    }
    return soma/(array.length)
    */ 
    