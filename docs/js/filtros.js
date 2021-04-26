var filtros = {
    termo: '',
    subprefeituras: []
};

function filtrar() {
    if (filtros.termo.length > 2 || filtros.subprefeituras.length > 0) {
        let devolutivasEncontradas = filtrarDevolutivasPorTermoPesquisado(filtros.termo);
        devolutivasEncontradas = filtrarDevolutivasPorSubprefeitura(devolutivasEncontradas, filtros.subprefeituras);
        renderDevolutivas(devolutivasEncontradas);
    } else {
        limparResultados();
    }
}