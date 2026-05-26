const input = document.getElementById('value-input');

function pressKey(key) {
    let current = input.value;
    
    if (key === 'back') {
        current = current.slice(0, -1);
        if (current === '') current = '0';
    } else {
        if (current === '0' || current === '15.00') {
            current = key;
        } else {
            current += key;
        }
    }
    
    // Formatação básica simulando dinheiro (opcional)
    input.value = current;
}

document.getElementById('confirm-btn').addEventListener('click', () => {
    localStorage.setItem('valorRecarga', input.value);
    // Redireciona para a pasta/página 2
    window.location.href = '../pagamento2/index.html';
});