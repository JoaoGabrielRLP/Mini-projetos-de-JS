//Preciso pegar o nome da pessoa que está tentando entrar
//Preciso perguntar a ele(a) quem a convidou para a festa
//Preciso de um botão na tela que quando for clicado irá acessar o código javascript para verificar se a pessoa
//que está tentando entrar foi de fato convidado por quem ela a diz que convidou
//Ex:nome da pessoa João, quem convidou para a festa? Serena. Clico no botão, o javascript pega as infos
//que eu preenchi na tela e verifica no meu código javascript se aquela pessoa está na lista, caso esteja
//irá alterar a descrição de pesquisando para "Voce pode entrar"

function enviar(){
    let infoNome = document.getElementById('nome').value;
    let info2 = document.getElementById('texto').value;
    let lista = ['Joao', 'Betania', 'Ricardo'];

    if(info2 === 'zezin'){
        if(lista.includes(infoNome)){
            document.getElementById('receber').innerHTML = 'pode entrar'
        }
        else{
            document.getElementById('receber').innerHTML = 'Acesso negado'
        }
    }

    else{
        alert('esse não é o dono da festa')
    }
}






