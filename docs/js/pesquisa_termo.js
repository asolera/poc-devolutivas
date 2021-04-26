const pesquisaInput = document.getElementById("pesquisaInput");

function filtrarDevolutivasPorTermoPesquisado(termoPesquisa) {

    return devolutivas.filter(devolutiva => devolutiva.resposta.toUpperCase().includes(termoPesquisa.toUpperCase()) || devolutiva.sugestao.toUpperCase().includes(termoPesquisa.toUpperCase()));
}

document.getElementById("pesquisaForm").addEventListener('submit', e => e.preventDefault());

pesquisaInput.addEventListener('keyup', e => {

    let termoPesquisa = pesquisaInput.value;
    filtros.termo = termoPesquisa;
    filtrar();
});