/* ==========================================================================
   materiais.js | Comportamento da página materiais.html
   Depende de: main.js (wa) e dados-materiais.js
               (speedwrapping, imprimax, m3, avery, oracal, kpmf, hexis, ppf)
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. Mensagem do WhatsApp (inclui a cor escolhida, quando houver)
   -------------------------------------------------------------------------- */
function mensagemMaterial(m, corNome) {
  const cor = corNome ? `, na cor ${corNome}` : "";
  return `Olá! Tenho interesse no material ${m.nome} (${m.marca})${cor}.`;
}


/* --------------------------------------------------------------------------
   2. Gera o HTML de um cartão de material
   -------------------------------------------------------------------------- */
function cartaoMaterial(m) {

  const primeira = m.cores ? m.cores[0] : null;

  // Paleta clicável: cada bolinha troca a amostra grande e a mensagem do WhatsApp
  const paleta = m.cores ? `
    <div class="paleta">
      <p class="paleta-titulo">${m.cores.length} ${m.cores.length === 1 ? "cor" : "cores"}</p>
      <div class="cores" role="group" aria-label="Cores de ${m.nome}">
        ${m.cores.map((c, i) => `
          <button type="button" class="cor${i === 0 ? " ativa" : ""}"
                  style="--c:${c.c}" data-nome="${c.n}" data-ref="${c.ref ? 1 : 0}"
                  aria-label="${c.n}" aria-pressed="${i === 0}" title="${c.n}"></button>
        `).join("")}
      </div>
      ${m.cores.some((c) => c.ref)
        ? `<p class="nota-ref">Alguns tons são de referência: confirme na cartela do ateliê.</p>`
        : ""}
    </div>` : "";

  // Linhas de durabilidade, com barra proporcional (10 anos = 100%)
  const duracao = m.dur.map((d) => `
    <div class="ficha-item">
      <dt><span>${d.r}</span><span>${d.t}</span></dt>
      ${d.anos ? `<dd class="barra" aria-hidden="true"><i style="width:${Math.min(d.anos, 10) * 10}%"></i></dd>` : ""}
    </div>
  `).join("");

  // Ficha técnica completa, dentro do próprio cartão
  const ficha = m.ficha ? `
    <details class="tecnica"${m.aberta ? " open" : ""}>
      <summary>Ficha técnica</summary>
      <dl class="spec">
        ${m.ficha.map((f) => `<div><dt>${f.r}</dt><dd>${f.t}</dd></div>`).join("")}
      </dl>
    </details>` : "";

  return `
    <article class="material" data-cat="${m.cat}">
      <div class="amostra" style="--bg:${primeira ? primeira.c : m.bg}" role="img"
           aria-label="Amostra ilustrativa de ${m.nome}">
        ${primeira ? `<span class="amostra-nome">${primeira.n}${primeira.ref ? " · tom de referência" : ""}</span>` : ""}
      </div>
      <div class="corpo">
        <span class="marca">${m.marca}</span>
        <h3>${m.nome}</h3>
        <p>${m.desc}</p>
        ${paleta}
        <dl class="ficha">${duracao}</dl>
        ${ficha}
        ${m.fonte ? `<p class="fonte-txt">Fonte dos dados: ${m.fonte}</p>` : ""}
        <a class="btn" href="${wa(mensagemMaterial(m, primeira ? primeira.n : ""))}"
           target="_blank" rel="noopener">Quero este material</a>
      </div>
    </article>
  `;
}


/* --------------------------------------------------------------------------
   3. Clique nas bolinhas de cor: troca a amostra e o link do WhatsApp
      (um único ouvinte serve a todos os cartões)
   -------------------------------------------------------------------------- */
document.addEventListener("click", (e) => {
  const botao = e.target.closest(".cor");
  if (!botao) return;

  const cartao = botao.closest(".material");
  const amostra = cartao.querySelector(".amostra");

  // Marca a bolinha escolhida
  cartao.querySelectorAll(".cor").forEach((b) => {
    const ativa = b === botao;
    b.classList.toggle("ativa", ativa);
    b.setAttribute("aria-pressed", ativa);
  });

  // Troca a cor da amostra grande e o nome exibido
  amostra.style.setProperty("--bg", botao.style.getPropertyValue("--c"));
  const nome = botao.dataset.nome;
  amostra.querySelector(".amostra-nome").textContent =
    nome + (botao.dataset.ref === "1" ? " · tom de referência" : "");

  // Atualiza a mensagem do WhatsApp com a cor escolhida
  const marca = cartao.querySelector(".marca").textContent;
  const titulo = cartao.querySelector("h3").textContent;
  cartao.querySelector(".btn").href = wa(mensagemMaterial({ nome: titulo, marca }, nome));
});


/* --------------------------------------------------------------------------
   4. Envelopamento: lista completa com filtro por tipo
   -------------------------------------------------------------------------- */
const envelopamento = [...speedwrapping, ...imprimax, ...m3, ...avery, ...oracal, ...kpmf, ...hexis];

// Tipos de acabamento exibidos nas abas
const tipos = [
  { id: "todos",     nome: "Todos" },
  { id: "brilho",    nome: "Brilho" },
  { id: "fosco",     nome: "Fosco" },
  { id: "acetinado", nome: "Acetinado" },
  { id: "metalico",  nome: "Metálico e cromado" },
  { id: "especial",  nome: "Efeitos especiais" },
  { id: "textura",   nome: "Texturas (carbono e escovado)" }
];

const gradeEnv = document.getElementById("gradeEnvelopamento");
const abas = document.getElementById("filtroTipo");

gradeEnv.innerHTML = envelopamento.map(cartaoMaterial).join("");

// Abas com a quantidade de materiais de cada tipo
// (as abas sem nenhum material não aparecem)
abas.innerHTML = tipos.map((t, i) => {
  const total = t.id === "todos"
    ? envelopamento.length
    : envelopamento.filter((m) => m.cat === t.id).length;
  return total ? `<button class="${i === 0 ? "ativa" : ""}" aria-pressed="${i === 0}" data-tipo="${t.id}">${t.nome} (${total})</button>` : "";
}).join("");

abas.addEventListener("click", (e) => {
  const botao = e.target.closest("button");
  if (!botao) return;

  abas.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("ativa", b === botao);
    b.setAttribute("aria-pressed", b === botao);
  });

  gradeEnv.querySelectorAll(".material").forEach((cartao) => {
    const todos = botao.dataset.tipo === "todos";
    cartao.hidden = !todos && cartao.dataset.cat !== botao.dataset.tipo;
  });
});

// Contador de cores no cabeçalho da seção
const totalCores = envelopamento.reduce((soma, m) => soma + (m.cores ? m.cores.length : 0), 0);
document.getElementById("totalCores").textContent = totalCores;


/* --------------------------------------------------------------------------
   5. PPF: cartões + tabela comparativa
   -------------------------------------------------------------------------- */
document.getElementById("gradePPF").innerHTML = ppf.map(cartaoMaterial).join("");

document.getElementById("tabelaPPF").innerHTML = `
  <table>
    <thead>
      <tr><th>Película</th><th>Espessura</th><th>Garantia</th><th>Autorregeneração</th><th>Acabamento</th></tr>
    </thead>
    <tbody>
      ${ppf.map((p) => `
        <tr>
          <th scope="row">${p.marca} ${p.nome.split(":")[0]}</th>
          <td>${p.resumo.esp}</td>
          <td>${p.resumo.gar}</td>
          <td>${p.resumo.auto}</td>
          <td>${p.resumo.acab}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
`;
