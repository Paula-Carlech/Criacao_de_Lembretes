const btnCriar = document.querySelector("#btnCriar");
let adicionarLembreteNaLista = document.querySelector("#listar_lembrete");

btnCriar.addEventListener("click", () => {
    const nome = document.querySelector("#nome").value;
    const data = document.querySelector("#data").value;

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
  
    console.log("ordenarLembretes done");
}    

let contadorLembretes = 0;

function inserirLembreteNaLista(nome, data) {
    contadorLembretes++;
    adicionarLembreteNaLista.innerHTML += `
      <div id="lembrete-${contadorLembretes}">
        <p>${data}</p>
        <p>${nome} <button class="apagar_lembrete" data-lembrete-id="${contadorLembretes}">X</button></p>
        <p>______________________________</p>
      </div> `
  
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
