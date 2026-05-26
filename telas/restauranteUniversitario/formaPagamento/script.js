document.getElementById('card-method').addEventListener('click', () => {
    alert('Integração com Cartão de Débito selecionada!');
});

document.getElementById('pix-method').addEventListener('click', () => {
    // Avança para a tela do QR code Pix (Pasta 3)
    window.location.href = '../qrcode/index.html';
});