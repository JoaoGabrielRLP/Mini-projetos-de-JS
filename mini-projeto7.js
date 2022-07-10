//Criar função somar que retorna a 
//Soma de todos os múltiplos de 3 e 5

somar(10);
function somar(limite){
    let multiplo3 = 0;
    let multiplo5 = 0;
    for(i = 0; i <= limite; i++){
       if(i % 3 === 0 ){
        multiplo3 += i;
        
       }

       if(i % 5 === 0){
        multiplo5 += i;

       }      

        
  }

  resultado =  multiplo3 + multiplo5;
  console.log(resultado)
  
}