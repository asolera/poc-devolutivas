const pesquisaInput = document.getElementById("pesquisaInput");

function filtrarDevolutivasPorTermoPesquisado(termoPesquisa) {

    return devolutivas.filter(devolutiva => devolutiva.resposta.includes(termoPesquisa));
}

document.getElementById("pesquisaForm").addEventListener('submit', e => e.preventDefault());

pesquisaInput.addEventListener('keyup', e => {

    let termoPesquisa = pesquisaInput.value;
    filtros.termo = termoPesquisa;
    filtrar();
});