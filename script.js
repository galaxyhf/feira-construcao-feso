const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function atualizarContador() {
  const dataEvento = new Date("2025-11-07T00:00:00");
  const agora = new Date();
  const diferenca = dataEvento - agora;

  if (diferenca <= 0) {
    diasEl.textContent = "00";
    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  diasEl.textContent = String(dias).padStart(2, "0");
  horasEl.textContent = String(horas).padStart(2, "0");
  minutosEl.textContent = String(minutos).padStart(2, "0");
  segundosEl.textContent = String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);

function toggleDia(id) {
  const el = document.getElementById(id);

  if (el.classList.contains("aberto")) {
    el.style.height = el.scrollHeight + "px";
    requestAnimationFrame(() => {
      el.style.height = "0px";
      el.classList.remove("aberto");
    });
  } else {
    el.classList.add("aberto");
    el.style.height = "auto";
    const height = el.scrollHeight + "px";
    el.style.height = "0px";
    requestAnimationFrame(() => {
      el.style.height = height;
    });
  }
}
