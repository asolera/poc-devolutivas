function renderResultados(conteudo) {
    
    const resultadosSection = document.getElementById("resultados");
    resultadosSection.innerHTML = conteudo;
}

function renderDevolutivas(devolutivas) {

    console.log(`Renderizando ${devolutivas.length} devolutivas...`);

    if (devolutivas.length < 1) {
        renderResultados('<p>Não foi encontrado nenhum resultado para a sua pesquisa!</p>');
    } else {
        const limiteResultados = 10;

        renderResultados(`
            <h4>Foram encontradas <strong>${devolutivas.length}</strong> devolutivas. Exibindo as ${limiteResultados} primeiras...</h4>
            <hr>
            <ul id="listaResultados">
                ${devolutivas.map(devolutiva => {
                    return `
                        <li>
                            <h5><strong>Número:</strong> ${devolutiva.numero}</h5>
                            <h5><strong>Subprefeitura:</strong> ${devolutiva.subprefeitura}</h5>
                            <h5><strong>Secretaria:</strong> ${devolutiva.secretaria}</h5>
                            <h5><strong>Tema:</strong> ${devolutiva.tema}</h5>
                            <h5><strong>Sugestão:</strong> ${devolutiva.sugestao}</h5>
                            <h5><strong>Resposta:</strong></h5>
                            <span class="resposta">${devolutiva.resposta}</span>
                        </li>
                    `;
                }).slice(0, limiteResultados).join('<hr>')}
            </ul>
        `);
    }
}

function limparResultados() {
    renderResultados('');
}