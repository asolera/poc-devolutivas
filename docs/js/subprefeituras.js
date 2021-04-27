function subprefeiturasAdicionarEventos() {
    const subprefeiturasCheckboxes = document.querySelectorAll("#subprefeiturasFiltro input[type=checkbox]");

    subprefeiturasCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', e => {
            const subprefeituraCheckbox = e.target.value;
            if (e.target.checked) {
                store.filtros.subprefeituras.push(subprefeituraCheckbox);
            } else {
                store.filtros.subprefeituras = store.filtros.subprefeituras.filter(subprefeitura => subprefeitura !== subprefeituraCheckbox);
            }
            filtroPesquisar();
        });
    });
}

function subprefeiturasCarregar() {
    const subprefeituras = [...new Set(store.devolutivas.map(devolutiva => devolutiva.subprefeitura))];
    subprefeituras.sort();
    store.subprefeituras = subprefeituras;
}

function subprefeiturasFiltroLimpar() {
    const subprefeiturasCheckboxes = document.querySelectorAll("#subprefeiturasFiltro input[type=checkbox]");

    subprefeiturasCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    });
}