
const form = document.getElementById("heroForm");
const name = document.getElementById("name");
const xp = document.getElementById("xp");
const message = document.getElementById("message");
const bg = document.getElementById("bg");

function getLevel(xpValue) {
  if (xpValue < 0) return "";
  else if (xpValue <= 1000) return "FERRO";
  else if (xpValue <= 2000) return "BRONZE";
  else if (xpValue <= 5000) return "PRATA";
  else if (xpValue <= 7000) return "OURO";
  else if (xpValue <= 8000) return "PLATINA";
  else if (xpValue <= 9000) return "ASCENDENTE";
  else if (xpValue <= 10000) return "IMORTAL";
  else return "RADIANTE";
}

function formSubmit(event) {
  event.preventDefault();
  const level = getLevel(xp.value);
  const heroName = name.value.toUpperCase()
  if (level) {
    message.innerHTML = `O Herói <strong>${heroName}</strong> está no nível <strong>${level}</strong>`;
  } else {
    message.innerHTML = "";
  }
  bg.setAttribute("class", level.toLowerCase());
}

form.setAttribute("onsubmit", "formSubmit(event)");