const tempoInicial = new Date();

const csvPath = 'base-exemplo.csv';

loadingLigar();
csvParse(csvPath)
    .then(devolutivas => {
        loadingDesligar();
        store.tempoGastoSegundos = helpersGetTempoGastoSegundos(tempoInicial);
        store.devolutivas = devolutivas;
        store.devolutivasFiltradas = devolutivas;
        renderDadosCarregamento();
        pesquisaTextoAdicionarEventos();
        subprefeiturasCarregar();
        secretariasCarregar();
    })
    .catch(err => {
        loadingDesligar();
        renderErro(err.message);
        console.error(err);
    });