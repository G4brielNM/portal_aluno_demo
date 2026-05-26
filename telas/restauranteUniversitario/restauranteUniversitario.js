// ======================================
// ABRIR SIDEBAR
// ======================================

function openSidebar() {

  document
    .getElementById("sidebar")
    .classList.add("open");

}


// ======================================
// FECHAR SIDEBAR
// ======================================

function closeSidebar() {

  document
    .getElementById("sidebar")
    .classList.remove("open");

}


// ======================================
// ALTERAR ITEM ATIVO
// ======================================

function setActive(elemento) {

  // Remove classe active de todos
  document
    .querySelectorAll(".nav-item")
    .forEach(item => {
      item.classList.remove("active");
    });

  // Adiciona no item clicado
  elemento.classList.add("active");

}


// ======================================
// TOAST
// ======================================

let toastTimer;

function showToast(mensagem) {

  const toast = document.getElementById("toast");

  // Define texto
  toast.textContent = mensagem;

  // Mostra toast
  toast.classList.add("show");

  // Limpa timeout antigo
  clearTimeout(toastTimer);

  // Remove toast depois de 2.4s
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);

}


// ======================================
// BOTÃO DE COMPRA
// ======================================

function handleCompra() {

  // Mostra mensagem
  showToast("Aguardando leitura do QR Code...");

  // Pega QR Code
  const qr = document.getElementById("qrWrap");

  // Adiciona efeito visual
  qr.style.boxShadow =
    "0 0 0 4px rgba(46,204,113,0.5)";

  // Remove efeito depois
  setTimeout(() => {
    qr.style.boxShadow = "";
  }, 1500);

    // Simula leitura do QR Code e redireciona para a pasta/página 2
    setTimeout(() => {
      window.location.href = "/portal_aluno_demo/telas/restauranteUniversitario/pagamento1/index.html";
    }, 2000);

    



}