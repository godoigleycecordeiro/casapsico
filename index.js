

 const modal = document.getElementById("modal-email");
const botaoAbrir = document.getElementById("abrir-modal-email");
const botaoFechar = document.getElementById("fechar-modal-email");

botaoAbrir.onclick = function() {
  modal.style.display = "block";
}

botaoFechar.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}



  const numeroClinica = "5511940746685";
  const mensagem = "Olá, gostaria de informações sobre a clínica .";

  document.getElementById("whatsappIcon").addEventListener("click", function() {
    const url = `https://wa.me/${numeroClinica}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });


