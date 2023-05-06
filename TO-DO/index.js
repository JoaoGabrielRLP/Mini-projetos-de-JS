const texto = document.querySelector('input');
const btnInsert = document.querySelector('.divInsert button');
const btnDeleteAll = document.querySelector('.header button');
const ul = document.querySelector('ul');

var itensDB = []

btnDeleteAll.onclick = () => {
    itensDB = []
    updateDB()
}

texto.addEventListener('keypress', e => {
    if (e.key == 'Enter' && texto.value != ''){
        setItemDB();
    }
}) //Adiciona um Evento ao apertar alguma tecla, se a tecla for ENTER e o valor for diferente de vazio, adicione o item no DB

btnInsert.onclick = () => {
    if(texto.value != '') {
        setItemDB();
    }
} // Ao clicar no botão da Div insert realiza a função: se o valor do input texto for diferente de vazio, adicione no banco

function setItemDB() {
    if (itensDB.length >= 20){
        alert('Limite máximo de 20 itens atingido')
        return
    }

    itensDB.push({ 'item': texto.value, 'status': ''})
    updateDB();
}// Função que verifica se os itens do DB ultrapassam de 20, mostra uma mensagem e termina a função. Caso não caia nessa verificação é adicionado ao DB o valor do Texto do input e o status vazio e chama a função updateDB

function updateDB() {
    localStorage.setItem('todolist', JSON.stringify(itensDB))
    loadItens()
} //Função que coloca um item no localStorage, chamado de todolist e transforma o array itensDB em uma string JSON e chama a função loadItens

function loadItens(){
    ul.innerHTML = "";
    itensDB = JSON.parse(localStorage.getItem('todolist')) ?? []
    itensDB.forEach((item, i) => {
        insertItemTela(item.item, item.status, i)
    })
} //Essa função limpa a ul, então pegamos os itens de localStorage e colocamos no itensDB, então chamamos um for each para que cada item seja adicionado com um item, seu status e indice

function insertItemTela(text, status, i){
    const li = document.createElement('li')
  
    li.innerHTML = `
      <div class="divLi">
        <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
        <span data-si=${i}>${text}</span>
        <button onclick="removeItem(${i})" data-i=${i}><i class='bx bx-trash'></i></button>
      </div>
      `
    ul.appendChild(li)
  
    if (status) {
      document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
    } else {
      document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
    }
  
    texto.value = ''
  }

  function done(chk, i) {
    if(chk.checked) {
        itensDB[i].status = 'checked'
    } else {
        itensDB[i].status = ''
    }

    updateDB()
  }

  function removeItem(i) {
    itensDB.splice(i, 1)
    updateDB()
  }

  loadItens()
