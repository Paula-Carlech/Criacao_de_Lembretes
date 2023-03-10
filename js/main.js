const btnCriar = document.querySelector("#btnCriar");

btnCriar.addEventListener("click", () => {
    const nome = document.querySelector("#nome").value;
    const data = document.querySelector("#data").value;

    console.log(nome);
    console.log(data);
    console.log(verificaData(data));

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

    function inserirLembreteNaLista(){

    }
})
