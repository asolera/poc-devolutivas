function filtrarDevolutivasPorSubprefeitura(devolutivasEncontradas, subprefeituras) {
    if (subprefeituras.length > 0) {
        return devolutivasEncontradas.filter(devolutiva => subprefeituras.includes(devolutiva.subprefeitura));
    }

    return devolutivasEncontradas;
}

function getSubprefeiturasUnicas() {

    const subprefeituras = [...new Set(devolutivas.map(devolutiva => devolutiva.subprefeitura))];
    subprefeituras.sort();
    return subprefeituras;
}

function renderFiltroSubprefeituras(subprefeituras) {

    const subprefeiturasCheckbox = document.getElementById("subprefeiturasFiltro");
    subprefeiturasCheckbox.innerHTML = `
        
        ${subprefeituras.map(subprefeitura => {
            return `
                <li>
                    <input type="checkbox" id="sub_${subprefeitura}" name="subprefeituraCheckbox" value="${subprefeitura}" />
                    <label for="sub_${subprefeitura}">${subprefeitura}</label>
                </li>
            `
        }).join('')}
    `;

    const subprefeiturasCheckboxes = document.querySelectorAll("#subprefeiturasFiltro input[type=checkbox]");

    subprefeiturasCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', e => {
            const subprefeituraCheckbox = e.target.value;
            if (e.target.checked) {
                filtros.subprefeituras.push(e.target.value);
            } else {
                filtros.subprefeituras = filtros.subprefeituras.filter(subprefeitura => subprefeitura !== subprefeituraCheckbox);
            }
            filtrar();
        });
    });
    
}