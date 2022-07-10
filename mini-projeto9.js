// Criar uma função que exibe a quantidade de *
// que aquela linha possui
exibirAsteriscos(30);

function exibirAsteriscos(linhas){
    let asterisco = ''
    for(i = 1; i <= linhas; i++){ 
      asterisco += '*';
      console.log(asterisco)
    }

    //Outra forma de fazer que envolvem mais trabalho
    /*
    for(let linha = 1; linha <= linhas; linhas++){
          let padrao = '';
          for(let i = 0; i < linha; i++){
             padrao += '*'
          }
          console.log(padrao);
    }
    
    
    */
}
