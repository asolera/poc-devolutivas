const shareData = {
    title: 'Devolutivas Programa de Metas',
    text: 'Acompanhe as devolutivas do programa de metas 2021-2024!',
    url: 'https://asolera.github.io/poc-devolutivas/',
};
  
const btnCompartilhar = document.querySelector('#btn-compartilhar');
  
btnCompartilhar.addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share(shareData);
            console.log('Compartilhado com sucesso!');
        } catch(err) {
            console.log('Erro ao compartilhar!');
            console.error(err.error);
        }
    } else {
        alert('Função compartilhar não suportada no seu navegador!');
    }
});