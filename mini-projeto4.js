//Projeto para verificar a velocidade máxima
//Velocidade máxima permtida de 70KM/h
//A cada 5Km acima do limite se ganha 1 ponto na carteira
//Se houverem mais que 12 pontos na carteira -> carteira suspensa

verificaVelocidade(84);

function verificaVelocidade(velocidade){
    const velocidadeMaxima = 70; //Tratamento de valor mágico
    const KmPorPonto = 5; //Tratamento de valor mágico
    if(velocidade <= velocidadeMaxima){
        console.log("Suavinho");
    }

    else
    {
        const pontos = ((velocidade - velocidadeMaxima) / KmPorPonto);
        if(pontos >= 12){
            console.log("Carteira suspensa")
        }
        else
        {
            console.log("Pontos na carteira: " + Math.floor(pontos));
        }
    }

    
    
}