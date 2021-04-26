function getTempoGasto(tempoInicial) {
    
    const tempoFinal = new Date();
    const diferencaSegundos = Math.round((tempoFinal - tempoInicial) / 1000);
    return diferencaSegundos;
}

const csv = 'base-exemplo.csv';
var devolutivas = [];
const tempoInicial = new Date();

console.log('Fazendo parse do CSV...');
renderResultados("<p>Carregando dados...</p>");
Papa.parse(csv, {
    download: true,
    header: true,
	complete: result => {
        const tempoGastoSegundos = getTempoGasto(tempoInicial);
        console.log(`Parse finalizado em ${tempoGastoSegundos} segundos`);
		if (result.errors.length > 0) {
            console.error("Ocorreram alguns erros ao importar o arquivo!");
            console.error(result.errors);
            renderResultados("<p>Erro ao carregar os dados!</p>");
}

        devolutivas = result.data;

        renderResultados(`<p>Total de ${devolutivas.length} devolutivas carregadas em ${tempoGastoSegundos} segundos.</p>`);
        console.log(`Total de registros: ${devolutivas.length}`);

        const subprefeituras = getSubprefeiturasUnicas();
        renderFiltroSubprefeituras(subprefeituras);
	}
});

