function helpersGetTempoGastoSegundos(tempoInicial) {
    
    const tempoFinal = new Date();
    const tempoGastoSegundos = Math.round((tempoFinal - tempoInicial) / 1000);
    return tempoGastoSegundos;
}