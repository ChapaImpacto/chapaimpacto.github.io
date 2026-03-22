const participantes = [
  {
    nome: "Rebeca Maria Silva Ribeiro",
    funcao: "Presidente",
    foto: "assets/pfp/rrebecamariasilva.jpg",
    instagram: "https://instagram.com/rrebecamariasilva"
  },

  {
    nome: "Isabella Lopes",
    funcao: "Vice Presidente",
    foto: "assets/pfp/isa.lpdt.jpg",
    instagram: "https://www.instagram.com/isa.lpdt"
  },

  {
    nome: "Rebeca Winny",
    funcao: "Diretora da Imprensa",
    foto: "assets/pfp/winny_becaa.jpg",
    instagram: "https://instagram.com/winny_becaa"
  },

  {
    nome: "João Vitor",
    funcao: "Secretário Geral",
    foto: "assets/pfp/Alves_77733.jpg",
    instagram: "https://www.instagram.com/Alves_77733"
  },

  {
    nome: "Izabeli Cristine",
    funcao: "Primeira Secretária",
    foto: "assets/pfp/izaahhahaha.jpg",
    instagram: "https://www.instagram.com/izaahhahaha"
  },

  {
    nome: "Samara Soriano",
    funcao: "Tesoureira Geral",
    foto: "assets/pfp/samis.sm01.jpg",
    instagram: "https://www.instagram.com/samis.sm01"
  },

  {
    nome: "Hany",
    funcao: "Primeira Tesoureira",
    foto: "assets/pfp/hany.491100.jpg",
    instagram: "https://www.instagram.com/hany.491100"
  },

  {
    nome: "Wellington Silva",
    funcao: "Diretor Pedagógico",
    foto: "assets/pfp/wellyngton_ratobjj.jpg",
    instagram: "https://www.instagram.com/wellyngton_ratobjj"
  },

  {
    nome: "Regina Ketylen",
    funcao: "Segunda Diretora da Imprensa",
    foto: "assets/pfp/mitskimac.jpg",
    instagram: "https://www.instagram.com/mitskimac"
  },
];

const grid = document.getElementById("participantsGrid");
if (!grid) {
  console.error("Grid de participantes não encontrado!");
}

participantes.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("participant-card");

  card.innerHTML = `
    <div class="participant-avatar">
      <img src="${p.foto}" alt="${p.nome}">
    </div>

    <div class="participant-info">
      <h3 class="participant-name">${p.nome}</h3>
      <p class="participant-role">${p.funcao}</p>

      <a href="${p.instagram}" target="_blank" class="participant-social"></a>
    </div>
  `;

  grid.appendChild(card);
});

const html = document.documentElement;
const toggleButton = document.getElementById("themeToggle");

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  const icon = theme === "light" ? "◑" : "◐";
  const label = theme === "light" ? "Tema claro" : "Tema escuro";
  toggleButton.querySelector(".theme-toggle-icon").textContent = icon;
  toggleButton.querySelector(".theme-toggle-text").textContent = label;
}

const savedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
setTheme(savedTheme || (prefersLight ? "light" : "dark"));

toggleButton.addEventListener("click", () => {
  const nextTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});