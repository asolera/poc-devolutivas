function devolutivasFiltrarPorTermoPesquisado() {
    store.devolutivasFiltradas = store.devolutivas.filter(devolutiva => devolutiva.resposta.toUpperCase().includes(store.filtros.termo.toUpperCase()) || devolutiva.sugestao.toUpperCase().includes(store.filtros.termo.toUpperCase()));
}

function devolutivasFiltrarPorSubprefeitura() {
    if (store.filtros.subprefeituras.length > 0) {
        store.devolutivasFiltradas = store.devolutivasFiltradas.filter(devolutiva => store.filtros.subprefeituras.includes(devolutiva.subprefeitura));
    }
}

function devolutivasFiltrarPorSecretaria() {
    if (store.filtros.secretarias.length > 0) {
        store.devolutivasFiltradas = store.devolutivasFiltradas.filter(devolutiva => store.filtros.secretarias.includes(devolutiva.secretaria));
    }
}