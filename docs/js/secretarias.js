function secretariasCarregar() {
    const secretarias = [...new Set(store.devolutivas.map(devolutiva => devolutiva.secretaria))];
    secretarias.sort();
    let i = 0;
    secretarias.map(secretaria => {
        i++;
        var newOption = new Option(secretaria, i, false, false);
        $('#selectSecretarias').append(newOption).trigger('change');
    });
    store.secretarias = secretarias;
    $('#selectSecretarias').prop("disabled", false);
}

function secretariasFiltroLimpar() {
    $('#selectSecretarias').val(null).trigger('change');
}

$(document).ready(function() {
    $('#selectSecretarias').select2({
        placeholder: 'Selecione a secretaria',
        height: '70px',
        width: 'resolve'
    });
    $('#selectSecretarias').prop("disabled", true);

    $('#selectSecretarias').on('select2:select', e => {
        let values = [];
        $(e.currentTarget).find("option:selected").each(function(i, selected) { 
            values[i] = $(selected).text();
        });
        store.filtros.secretarias = values;
        filtroPesquisar();
    });
    
    $('#selectSecretarias').on('select2:unselect', e => {
        const secretariaRemovida = e.params.data.text;
        store.filtros.secretarias = store.filtros.secretarias.filter(secretaria => secretaria !== secretariaRemovida);
        filtroPesquisar();
    });
});