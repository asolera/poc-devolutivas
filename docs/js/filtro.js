function filtroPesquisar() {
    if (store.filtros.termo.length > 2 || store.filtros.subprefeituras.length > 0 || store.filtros.secretarias.length > 0) {
        loadingLigar();
        devolutivasFiltrarPorTermoPesquisado();
        devolutivasFiltrarPorSubprefeitura();
        devolutivasFiltrarPorSecretaria();
        renderDevolutivasFiltradas();
        loadingDesligar();
    } else {
        renderDadosCarregamento();
    }
}

function filtroLimpar() {
    pesquisaTextoLimpar();
    subprefeiturasFiltroLimpar();
    secretariasFiltroLimpar();
    store.filtros = {
        termo: '',
        secretarias: [],
        subprefeituras: []
    };
    filtroPesquisar();
}

document.getElementById("limparFiltros").addEventListener('click', e => {
    e.preventDefault();
    filtroLimpar();
})