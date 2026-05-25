function mudarTela(idNovaTela) {
    // 1. Seleciona todas as telas do projeto
    const todasAsTelas = document.querySelectorAll('.tela');
    
    // 2. Esconde todas adicionando a classe 'escondida'
    todasAsTelas.forEach(tela => {
        tela.classList.add('escondida');
    });
    
    // 3. Mostra apenas a tela que você clicou para abrir
    const novaTela = document.getElementById(idNovaTela);
    if (novaTela) {
        novaTela.classList.remove('escondida');
    }
}