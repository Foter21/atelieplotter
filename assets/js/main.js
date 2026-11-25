/* ==========================================================================
   main.js | Funções compartilhadas por todas as páginas
   (WhatsApp, menu mobile e rodapé). Deve ser carregado primeiro.
   Caminho: assets/js/main.js
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. WhatsApp
   -------------------------------------------------------------------------- */

// Número do ateliê no formato internacional (55 = Brasil, 31 = DDD)
const WHATSAPP = "5531991075863";

// Monta o link do WhatsApp com uma mensagem pronta
function wa(mensagem) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

// Qualquer elemento com data-wa="mensagem" vira link para o WhatsApp
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = wa(el.dataset.wa);
  el.target = "_blank";
  el.rel = "noopener";
});


/* --------------------------------------------------------------------------
   1.1 Medição de cliques no WhatsApp (Google Analytics 4)
   Para ativar: crie uma propriedade gratuita no Google Analytics 4 e cole o
   ID de medição abaixo (formato "G-XXXXXXXXXX"). Com o campo vazio, nada é
   enviado nem carregado. Cada clique vira o evento "whatsapp_click", com a
   origem (hero, serviços, projetos, botão flutuante, formulário...).
   -------------------------------------------------------------------------- */
const GA_ID = ""; // ex.: "G-ABC123DEF4"

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

if (GA_ID) {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  gtag("js", new Date());
  gtag("config", GA_ID);
}

// Registra um clique de WhatsApp. "origem" diz de onde o cliente veio.
function trackWA(origem) {
  if (!GA_ID) return;
  gtag("event", "whatsapp_click", {
    origem,
    pagina: location.pathname.split("/").pop() || "index.html"
  });
}

// Um único "ouvinte" cobre todos os links do WhatsApp, inclusive os criados por JS
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="https://wa.me/"]');
  if (!link) return;
  const origem = link.closest("[data-origem]")?.dataset.origem
    || link.closest("section[id]")?.id
    || "pagina";
  trackWA(origem);
});


/* --------------------------------------------------------------------------
   2. Menu mobile
   -------------------------------------------------------------------------- */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

function alternarMenu(abrir) {
  menu.classList.toggle("aberto", abrir);
  menuBtn.setAttribute("aria-expanded", abrir);
}

menuBtn.addEventListener("click", () => {
  alternarMenu(!menu.classList.contains("aberto"));
});

// Fecha o menu ao escolher um link
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") alternarMenu(false);
});


/* --------------------------------------------------------------------------
   3. Rodapé: ano atual
   -------------------------------------------------------------------------- */
document.getElementById("ano").textContent = new Date().getFullYear();
