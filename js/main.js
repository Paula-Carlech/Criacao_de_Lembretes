const btnCriar = document.querySelector("#btnCriar");
let adicionarLembreteNaLista = document.querySelector("#listar_lembrete");
const lembretesPorData = {};
const nomeInput = document.querySelector('#nome');

nomeInput.addEventListener('click', () => {
  nomeInput.value = '';
});


btnCriar.addEventListener("click", () => {
    const nome = document.querySelector("#nome").value.trim();
    const data = document.querySelector("#data").value.trim();

    // Verifica se os campos estão vazios
    if (!nome || !data) {
        alert("Por favor, preencha todos os campos antes de criar o lembrete.");
        return;
    }

    console.log(nome);
    console.log(data);
    console.log(verificaData(data));

    if(verificaData(data) == true){
        inserirLembreteNaLista(nome, data);
    }
})

function verificaData(data){
    let dataInserida = new Date(data);
    let diaDeHoje = new Date();
    console.log(diaDeHoje);

    if(dataInserida > diaDeHoje){
        console.log("Data válida.");
        return true
    }else{
        console.log("Data inválida.");
        return false
    }
}

function ordenarLembretes() {
    console.log("ordenarLembretes");
    const lembretes = Array.from(adicionarLembreteNaLista.children);
  
    if (lembretes.length > 0) { 

      lembretes.sort((a, b) => {
        const dataAElement = a.querySelector('p:first-child');
        const dataA = dataAElement ? new Date(dataAElement.textContent) : null;
        const dataBElement = b.querySelector('p:first-child');
        const dataB = dataBElement ? new Date(dataBElement.textContent) : null;
        return dataA - dataB;
      });
  
      console.log("lembretes", lembretes);
  
        lembretes.forEach((lembrete) => {
            adicionarLembreteNaLista.appendChild(lembrete);
        });
    }
  
    console.log("ordenarLembretes done");
}      

function getOrCreateElementForData(data) {
    if (!lembretesPorData[data]) {
      // Se não existe um elemento para a data, criamos um novo
      lembretesPorData[data] = document.createElement('div');
      lembretesPorData[data].innerHTML = `<h3>${data}</h3>`;
      adicionarLembreteNaLista.appendChild(lembretesPorData[data]);
    }
    return lembretesPorData[data];
}  

let contadorLembretes = 0;

function inserirLembreteNaLista(nome, data) {
    contadorLembretes++;
  
    const lembreteHtml = `
      <div id="lembrete-${contadorLembretes}">
        <p>${nome} <button class="apagar_lembrete" data-lembrete-id="${contadorLembretes}">X</button></p>
      </div>
    `;
  
    const elementoData = getOrCreateElementForData(data);
    elementoData.innerHTML += lembreteHtml;
  
    const btnApagarLembrete = document.querySelectorAll(".apagar_lembrete");
  
    btnApagarLembrete.forEach((botao) => {
      botao.addEventListener("click", (evento) => {
        const lembreteId = evento.target.dataset.lembreteId;
        const lembrete = document.querySelector(`#lembrete-${lembreteId}`);
        lembrete.remove();
      });
    });
  
    ordenarLembretes();
} 

ordenarLembretes();
