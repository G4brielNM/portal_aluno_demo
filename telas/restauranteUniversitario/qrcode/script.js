// Resgata o valor digitado na primeira tela e pode atualizar dinamicamente o código Pix se necessário
const valorCapturado = localStorage.getItem('valorRecarga') || '15.00';
console.log(`Valor a ser pago via Pix: R$ ${valorCapturado}`);

document.getElementById('btn-copy').addEventListener('click', () => {
    const copyText = document.getElementById('pix-code');
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para mobile

    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            const originalText = document.getElementById('btn-copy').innerText;
            document.getElementById('btn-copy').innerText = '✓ Copiado!';
            document.getElementById('btn-copy').style.backgroundColor = '#16a34a';
            
            setTimeout(() => {
                document.getElementById('btn-copy').innerText = originalText;
                document.getElementById('btn-copy').style.backgroundColor = '#2563eb';
            }, 2000);
        })
        .catch(err => {
            console.error('Erro ao copiar código: ', err);
        });
});