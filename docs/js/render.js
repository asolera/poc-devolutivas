function renderConteudo(conteudo) {
    const conteudoSection = document.getElementById("conteudo");
    conteudoSection.innerHTML = conteudo;
}

function renderDadosCarregamento() {
    const conteudo = `<h5>Total de ${store.devolutivas.length} devolutivas carregadas em ${store.tempoGastoSegundos} segundos.</h5>`;
    renderConteudo(conteudo);
}

function renderDevolutivasFiltradas() {
    if (store.devolutivasFiltradas.length < 1) {
        renderConteudo('<h5>Não foi encontrado nenhum resultado para a sua pesquisa!</h5>');
    } else {
        renderConteudo(`
            <h5>Foram encontradas <strong>${store.devolutivasFiltradas.length}</strong> devolutivas. Exibindo as ${store.limiteResultados} primeiras...</h5>
            <ul id="listaResultados">
                ${store.devolutivasFiltradas.map(devolutiva => {
                    return `
                        <li>
                            <table class="devolutiva">
                                <tr>
                                    <td class="campo">Número</td>
                                    <td class="valor">${devolutiva.numero}</td>
                                    <td class="campo">Subprefeitura</td>
                                    <td class="valor">${devolutiva.subprefeitura}</td>
                                </tr>
                                <tr>
                                    <td class="campo">Secretaria</td>
                                    <td class="valor">${devolutiva.secretaria}</td>
                                    <td class="campo">Tema</td>
                                    <td class="valor">${devolutiva.tema}</td>
                                </tr>
                                <tr>
                                    <td class="campo">Sugestão</td>
                                    <td class="valor" colspan="3">${devolutiva.sugestao}</td>
                                </tr>
                                <tr>
                                    <td class="campo">Devolutiva</td>
                                    <td class="valor" colspan="3">${devolutiva.resposta}</td>
                                </tr>
                            </table>
                        </li>
                    `;
                }).slice(0, store.limiteResultados).join('')}
            </ul>
            ${store.devolutivasFiltradas.length > 10 ? `<h5 class="carregar_mais">Carregar mais devolutivas...</h5>` : ''}
        `);
    }
}

function renderErro(mensagem) {
    const conteudo = `<h5 class="erro">${mensagem}</h5>`;
    renderConteudo(conteudo);
}

function renderFiltrosSubprefeitura() {
    const subprefeiturasFiltro = document.getElementById("subprefeiturasFiltro");
    subprefeiturasFiltro.innerHTML = `
        ${store.subprefeituras.map(subprefeitura => {
            return `
                <li>
                    <input type="checkbox" id="sub_${subprefeitura}" name="subprefeituraCheckbox" value="${subprefeitura}" />
                    <label for="sub_${subprefeitura}">${subprefeitura}</label>
                </li>
            `
        }).join('')}
    `;
}