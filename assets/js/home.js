/* ==========================================================================
   home.js | Comportamento da página inicial (index.html)
   Depende de: main.js (wa) e dados.js (servicos, projetos, duvidas)
   ========================================================================== */


/* --------------------------------------------------------------------------
   0. Data e hora de Brasília
   O ateliê fica em Betim; usar o relógio do aparelho do visitante mostraria
   "aberto/fechado" errado para quem acessa de outro fuso.
   -------------------------------------------------------------------------- */
const FUSO = "America/Sao_Paulo";

// Data de hoje em Brasília no formato AAAA-MM-DD (o que o <input type="date"> espera)
function hojeBrasilia() {
  try {
    return new Date().toLocaleDateString("en-CA", { timeZone: FUSO });
  } catch (e) {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
}

// Dia da semana (0 = domingo) e hora (0-23) em Brasília
function agoraBrasilia() {
  try {
    const partes = new Intl.DateTimeFormat("en-US", {
      timeZone: FUSO, weekday: "short", hour: "numeric", hourCycle: "h23"
    }).formatToParts(new Date());
    const pega = (tipo) => partes.find((p) => p.type === tipo).value;
    const dias = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return { diaSemana: dias.indexOf(pega("weekday")), hora: Number(pega("hour")) };
  } catch (e) {
    const d = new Date();
    return { diaSemana: d.getDay(), hora: d.getHours() };
  }
}


/* --------------------------------------------------------------------------
   1. Serviços: monta os cartões
   -------------------------------------------------------------------------- */
document.getElementById("servicosGrade").innerHTML = servicos.map((s) => `
  <article class="servico">
    <h3>${s.nome}</h3>
    <p>${s.texto}</p>
    <ul>${s.itens.map((i) => `<li>${i}</li>`).join("")}</ul>
    <a class="link" href="${wa(`Olá! Quero um orçamento de ${s.nome}.`)}"
       target="_blank" rel="noopener">Orçar este serviço</a>
  </article>
`).join("");


/* --------------------------------------------------------------------------
   2. Galeria de projetos com filtro
   Cada projeto pode ter várias fotos (campo "imgs" em dados.js).
   O cartão mostra a primeira; ao clicar, abre a visualização ampliada.
   -------------------------------------------------------------------------- */
const grade = document.getElementById("grade");

// Lista de fotos de um projeto (aceita também o campo antigo "img")
const fotosDe = (p) => p.imgs || (p.img ? [p.img] : []);

// Miniatura leve usada no cartão (a foto grande só carrega ao ampliar).
// assets/img/projetos/foto.webp  ->  assets/img/projetos/thumbs/foto.webp
const miniaturaDe = (src) => src.replace("/projetos/", "/projetos/thumbs/");

grade.innerHTML = projetos.map((p, i) => {
  const fotos = fotosDe(p);

  // Projeto ainda sem foto não aparece no site
  if (!fotos.length) return "";

  const capa = fotos.length ? `
      <button type="button" class="foto-abrir" data-projeto="${i}"
              aria-label="Ampliar ${fotos.length > 1 ? "fotos" : "foto"}: ${p.titulo}, ${p.desc}">
        <img src="${miniaturaDe(fotos[0])}" alt="${p.titulo}: ${p.desc}" loading="lazy" decoding="async"
             style="object-position:${p.pos || "center"}">
      </button>
      ${fotos.length > 1 ? `<span class="foto-contagem">${fotos.length} fotos</span>` : ""}` : "";

  return `
  <figure class="item" data-cat="${p.cat}">
    <div class="foto-slot" data-slot="Foto: ${p.titulo}">${capa}</div>
    <figcaption>${p.titulo}<small>${p.desc}</small></figcaption>
  </figure>`;
}).join("");

// Esconde o filtro de uma categoria que ainda não tem nenhum projeto com foto
document.querySelectorAll("#filtros button").forEach((b) => {
  const f = b.dataset.filtro;
  if (f !== "todos" && !grade.querySelector(`.item[data-cat="${f}"]`)) b.hidden = true;
});

document.getElementById("filtros").addEventListener("click", (e) => {
  const botao = e.target.closest("button");
  if (!botao) return;

  // Marca o filtro ativo (aria-pressed avisa o leitor de tela)
  document.querySelectorAll("#filtros button").forEach((b) => {
    b.classList.toggle("ativa", b === botao);
    b.setAttribute("aria-pressed", b === botao);
  });

  // Mostra só os projetos da categoria escolhida
  grade.querySelectorAll(".item").forEach((item) => {
    const todos = botao.dataset.filtro === "todos";
    item.hidden = !todos && item.dataset.cat !== botao.dataset.filtro;
  });
});


/* --------------------------------------------------------------------------
   2.1 Visualização ampliada das fotos (janela <dialog id="lightbox">)
   Setas do teclado e deslize no celular trocam de foto; Esc fecha.
   -------------------------------------------------------------------------- */
const lb         = document.getElementById("lightbox");
const lbImg      = document.getElementById("lbImg");
const lbLegenda  = document.getElementById("lbLegenda");
const lbContador = document.getElementById("lbContador");

let lbProjeto = null; // projeto aberto
let lbIndice  = 0;    // foto atual

function mostrarFoto() {
  const fotos = fotosDe(lbProjeto);
  lbImg.src = fotos[lbIndice];
  lbImg.alt = `${lbProjeto.titulo}: ${lbProjeto.desc}`;
  lbLegenda.textContent = `${lbProjeto.titulo} | ${lbProjeto.desc}`;
  lbContador.textContent = fotos.length > 1 ? `${lbIndice + 1} / ${fotos.length}` : "";
  lb.classList.toggle("unica", fotos.length < 2); // esconde as setas se só há 1 foto
}

function trocarFoto(passo) {
  const total = fotosDe(lbProjeto).length;
  lbIndice = (lbIndice + passo + total) % total;
  mostrarFoto();
}

grade.addEventListener("click", (e) => {
  const botao = e.target.closest(".foto-abrir");
  if (!botao) return;
  lbProjeto = projetos[botao.dataset.projeto];
  lbIndice = 0;
  mostrarFoto();
  lb.showModal();
});

lb.querySelector(".lb-fechar").addEventListener("click", () => lb.close());
lb.querySelector(".lb-ant").addEventListener("click", () => trocarFoto(-1));
lb.querySelector(".lb-prox").addEventListener("click", () => trocarFoto(1));

// Clique fora da foto fecha
lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });

// Teclado
lb.addEventListener("keydown", (e) => {
  if (lb.classList.contains("unica")) return;
  if (e.key === "ArrowLeft")  trocarFoto(-1);
  if (e.key === "ArrowRight") trocarFoto(1);
});

// Deslizar o dedo no celular
let toqueX = null;
lb.addEventListener("touchstart", (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", (e) => {
  if (toqueX === null || lb.classList.contains("unica")) return;
  const dx = e.changedTouches[0].clientX - toqueX;
  if (Math.abs(dx) > 50) trocarFoto(dx < 0 ? 1 : -1);
  toqueX = null;
});

// Ao fechar, libera a imagem
lb.addEventListener("close", () => { lbImg.removeAttribute("src"); });


/* --------------------------------------------------------------------------
   3. Perguntas frequentes
   -------------------------------------------------------------------------- */
document.getElementById("faq").innerHTML = duvidas.map(([pergunta, resposta]) => `
  <details>
    <summary>${pergunta}</summary>
    <p>${resposta}</p>
  </details>
`).join("");


/* --------------------------------------------------------------------------
   4. Agendamento: monta a mensagem e abre o WhatsApp
   -------------------------------------------------------------------------- */
const campoData = document.getElementById("fData");
campoData.min = hojeBrasilia(); // não permite datas passadas (conta o dia de Brasília)

document.getElementById("formAgenda").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome   = document.getElementById("fNome").value.trim();
  const carro  = document.getElementById("fCarro").value.trim();
  const erro   = document.getElementById("fErro");
  const servico = document.getElementById("fServico").value;

  // Validação simples
  if (!nome || !carro) {
    erro.textContent = "Preencha seu nome e o modelo do carro.";
    return;
  }
  erro.textContent = "";

  // Data no formato dia/mês/ano
  let dia = "Ainda sem dia definido.";
  if (campoData.value) {
    const [ano, mes, d] = campoData.value.split("-");
    dia = `Dia preferido: ${d}/${mes}/${ano}.`;
  }

  const mensagem = `Olá! Sou ${nome}. Tenho um ${carro} e quero ${servico}. ${dia}`;
  trackWA("formulario-agendamento");
  window.open(wa(mensagem), "_blank", "noopener");
});


/* --------------------------------------------------------------------------
   5. Indicador "aberto agora" (segunda a sexta, 9h às 18h)
   -------------------------------------------------------------------------- */
(function indicarHorario() {
  const { diaSemana, hora } = agoraBrasilia(); // 0 = domingo

  const aberto = diaSemana >= 1 && diaSemana <= 5 && hora >= 9 && hora < 18;

  const selo = document.getElementById("status");
  selo.textContent = aberto ? "Aberto agora" : "Fechado agora";
  selo.classList.toggle("aberto", aberto);
})();
