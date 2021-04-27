function filtroPesquisar() {
    if (store.filtros.termo.length > 2 || store.filtros.subprefeituras.length > 0) {
        devolutivasFiltrarPorTermoPesquisado();
        devolutivasFiltrarPorSubprefeitura();
        renderDevolutivasFiltradas();
    } else {
        renderDadosCarregamento();
    }
}

function filtroLimpar() {
    pesquisaTextoLimpar();
    subprefeiturasFiltroLimpar();
    store.filtros = {
        termo: '',
        subprefeituras: []
    };
    filtroPesquisar();
}

document.getElementById("limparFiltros").addEventListener('click', e => {
    e.preventDefault();
    filtroLimpar();
})