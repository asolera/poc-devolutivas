function subprefeiturasCarregar() {
    const subprefeituras = [...new Set(store.devolutivas.map(devolutiva => devolutiva.subprefeitura))];
    subprefeituras.sort();
    let data = {
        results: []
    };
    let i = 0;
    data.results = subprefeituras.map(subprefeitura => {
        i++;
        var newOption = new Option(subprefeitura, i, false, false);
        $('#selectSubprefeituras').append(newOption).trigger('change');
    });
    store.subprefeituras = subprefeituras;
}

function subprefeiturasFiltroLimpar() {
    $('#selectSubprefeituras').val(null).trigger('change');
}

$(document).ready(function() {
    $('#selectSubprefeituras').select2({
        placeholder: 'Selecione a subprefeitura',
        height: '70px',
        width: 'resolve'
    });

    $('#selectSubprefeituras').on('select2:select', e => {
        let values = [];
        $(e.currentTarget).find("option:selected").each(function(i, selected) { 
            values[i] = $(selected).text();
        });
        store.filtros.subprefeituras = values;
        filtroPesquisar();
    });
    
    $('#selectSubprefeituras').on('select2:unselect', e => {
        const subprefeituraRemovida = e.params.data.text;
        store.filtros.subprefeituras = store.filtros.subprefeituras.filter(subprefeitura => subprefeitura !== subprefeituraRemovida);
        filtroPesquisar();
    });
});