function pesquisaTextoAdicionarEventos() {
    const pesquisaInput = document.getElementById("pesquisaInput");
    document.getElementById("pesquisaForm").addEventListener('submit', e => e.preventDefault());

    pesquisaInput.addEventListener('keyup', e => {
        let termoPesquisa = pesquisaInput.value;
        store.filtros.termo = termoPesquisa;
        filtroPesquisar();
    });
}

function pesquisaTextoLimpar() {
    document.getElementById("pesquisaInput").value = '';
}