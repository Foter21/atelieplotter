/* ==========================================================================
   dados-materiais.js | Catálogo de materiais (envelopamento e PPF)
   Envelopamento: SpeedWrapping, Imprimax, 3M, Avery Dennison, Oracal,
                  KPMF e Hexis
   PPF: XPEL, SunTek, 3M, STEK, LLumar, Avery Dennison, Hexis (Bodyfence e
        Bodyfence XS), Ceramic Pro, Imprimax e Alltak

   Todas as informações aparecem dentro do próprio site: não há links para
   páginas de fabricantes. O campo "fonte" é só texto, para registrar de onde
   veio o dado.

   Campos de cada material:
     marca, nome, cat
       cat do envelopamento: brilho | fosco | acetinado | metalico | especial | textura
       cat do PPF: ppf
     bg     -> fundo padrão da amostra (usado se o material não tiver "cores")
     desc   -> descrição curta
     cores  -> paleta clicável: lista de { n: nome, c: fundo CSS, ref: true }
               ref: true = tom de referência (a cor exata deve ser conferida
               na cartela física do ateliê)
     dur    -> lista de { r: rótulo, t: texto, anos: número p/ a barra (opcional) }
     ficha  -> lista de { r: rótulo, t: texto } (ficha técnica completa)
     resumo -> só PPF: { esp, gar, auto, acab } para a tabela comparativa
     fonte  -> texto dizendo de onde vieram os dados
     aberta -> true abre a ficha técnica já expandida
   ========================================================================== */


/* --------------------------------------------------------------------------
   Atalhos para escrever as cores com menos código
   -------------------------------------------------------------------------- */
const cor  = (n, c)        => ({ n, c });                 // cor com nome confirmado
const ref  = (n, c)        => ({ n, c, ref: true });      // tom de referência
const grad = (a, b, c)     => `linear-gradient(135deg,${a},${b}${c ? "," + c : ""})`;
const cromo = (a, b)       => `linear-gradient(135deg,${a},${b} 40%,#f4f6f5 55%,${b})`;
const carbono = (a, b)     => `repeating-linear-gradient(45deg,${a} 0 4px,${b} 4px 8px)`;
const escovado = (a, b)    => `linear-gradient(135deg,rgba(255,255,255,.28),rgba(0,0,0,.22)),repeating-linear-gradient(90deg,${a} 0 1px,${b} 1px 3px)`;

/* Texto padrão quando a durabilidade não foi confirmada na fonte */
const DUR_CONSULTAR = [{ r: "Durabilidade", t: "Confirmar no ateliê" }];

/* Nota usada nas fichas de PPF */
const NOTA_GARANTIA = "As condições de garantia variam por país e por aplicador. Confirmar no orçamento.";


/* --------------------------------------------------------------------------
   SPEEDWRAPPING: 17 linhas de envelopamento automotivo
   -------------------------------------------------------------------------- */
const speedwrapping = [

  /* ----- Brilho ----- */
  {
    marca: "SpeedWrapping", nome: "Super Gloss", cat: "brilho",
    bg: grad("#0a0a0a", "#3a3a3a"),
    desc: "Linha de alto brilho em filme PET, com cores clássicas de esportivos.",
    cores: [
      cor("Black Piano",       "#0a0a0a"),
      cor("White Piano",       "#f4f4f2"),
      cor("Ferrari Red",       "#c40d1e"),
      cor("Porsche Rouge Red", "#a3112b"),
      cor("Viper Green",       "#1fae3a"),
      cor("Apple Green",       "#7cc63c"),
      cor("Acid Green",        "#b6e61f"),
      cor("Sapphire",          "#1d3f9e"),
      cor("Miami Blue",        "#19b5d6")
    ],
    dur: DUR_CONSULTAR,
    ficha: [
      { r: "Material",   t: "Filme PET de alto brilho" },
      { r: "Acabamento", t: "Alto brilho, estilo pintura piano" }
    ],
    fonte: "Catálogo SpeedWrapping"
  },

  /* ----- Fosco ----- */
  {
    marca: "SpeedWrapping", nome: "Super Matte", cat: "fosco",
    bg: grad("#1c1c1c", "#2b2b2b"),
    desc: "Acabamento fosco uniforme, sem reflexo, para um visual discreto e moderno.",
    cores: [
      ref("Preto fosco",     "#1b1b1b"),
      ref("Branco fosco",    "#e9e9e6"),
      ref("Cinza grafite",   "#4a4d4f"),
      ref("Cinza cimento",   "#8b8f90"),
      ref("Vermelho fosco",  "#9e1b24"),
      ref("Azul fosco",      "#24448a"),
      ref("Verde militar",   "#4b5a3a"),
      ref("Laranja fosco",   "#d9631e"),
      ref("Amarelo fosco",   "#e0b82a"),
      ref("Roxo fosco",      "#5b2e86")
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Acabamento", t: "Fosco uniforme, sem reflexo" }],
    fonte: "Catálogo SpeedWrapping"
  },

  /* ----- Metálico e cromado ----- */
  {
    marca: "SpeedWrapping", nome: "Satin Metallic Glossy", cat: "metalico",
    bg: grad("#9aa39e", "#4c5651"),
    desc: "Metálico acetinado com brilho.",
    cores: [
      ref("Prata acetinado",  grad("#c9cfcc", "#7d8782")),
      ref("Grafite",          grad("#6b7370", "#2f3533")),
      ref("Azul metálico",    grad("#5a7fb0", "#233c66")),
      ref("Verde metálico",   grad("#5f8a72", "#244034")),
      ref("Vermelho metálico", grad("#b3464f", "#5e1a20")),
      ref("Champagne",        grad("#d8c7a3", "#8e7b55"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Acabamento", t: "Metálico acetinado com brilho" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Satin Metallic Matte", cat: "metalico",
    bg: grad("#6f7873", "#2e3532"),
    desc: "Metálico acetinado com acabamento fosco.",
    cores: [
      ref("Prata fosco",     grad("#aeb4b1", "#656e6a")),
      ref("Grafite fosco",   grad("#59605d", "#23282a")),
      ref("Azul petróleo",   grad("#3f6a80", "#183240")),
      ref("Verde escuro",    grad("#47705a", "#1b3226")),
      ref("Bronze",          grad("#a98763", "#5b4429"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Acabamento", t: "Metálico acetinado, aspecto fosco" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Metallic", cat: "metalico",
    bg: grad("#d5d9d7", "#6d7873"),
    desc: "Cores com partículas metálicas que reagem à luz.",
    cores: [
      ref("Prata",        grad("#e1e5e3", "#7a8581")),
      ref("Grafite",      grad("#80888a", "#2b3133")),
      ref("Azul",         grad("#4c7bd1", "#17306b")),
      ref("Vermelho",     grad("#d0343f", "#60121a")),
      ref("Verde",        grad("#3fa56a", "#12402a")),
      ref("Dourado",      grad("#e6c35c", "#8d6d1c")),
      ref("Bronze",       grad("#c18a52", "#5e3a17")),
      ref("Roxo",         grad("#8a55c9", "#3a1b66"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Acabamento", t: "Metálico com partículas que reagem à luz" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Chrome Metallic", cat: "metalico",
    bg: cromo("#eef0ef", "#8a948f"),
    desc: "Linha cromada metalizada.",
    cores: [
      ref("Prata cromo",    cromo("#eef0ef", "#8a948f")),
      ref("Ouro cromo",     cromo("#f5e3a1", "#a98a2e")),
      ref("Azul cromo",     cromo("#bcd4f5", "#3a64a8")),
      ref("Vermelho cromo", cromo("#f3b9bd", "#a9232d")),
      ref("Verde cromo",    cromo("#bfe8cf", "#2f8a57")),
      ref("Rosa cromo",     cromo("#f6c9de", "#b84b84")),
      ref("Roxo cromo",     cromo("#d6c3f0", "#6a3fa8"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Acabamento", t: "Cromado metalizado" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Chrome Mirror", cat: "metalico",
    bg: cromo("#fafafa", "#7d8984"),
    desc: "Cromado espelhado, em cores metálicas para personalização com autenticidade e luxo.",
    cores: [
      ref("Prata espelho", cromo("#fafafa", "#7d8984")),
      ref("Ouro espelho",  cromo("#fff1b8", "#b08d2a")),
      ref("Rose gold",     cromo("#fbd9d0", "#b87a68")),
      ref("Azul espelho",  cromo("#cfe0fa", "#3b66b0")),
      ref("Preto espelho", cromo("#5a5f5d", "#0b0c0c"))
    ],
    dur: [{ r: "Durabilidade", t: "Expectativa de 2 anos", anos: 2 }],
    ficha: [
      { r: "Material",      t: "PVC super calandrado polimérico de 80 micras" },
      { r: "Adesivo",       t: "Acrílico reposicionável" },
      { r: "Aplicação",     t: "Tecnologia Airflow, que ajuda a aplicar sem bolhas" },
      { r: "Proteção",      t: "Filme de proteção contra riscos na superfície" },
      { r: "Durabilidade",  t: "Expectativa de 2 anos" }
    ],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Chrome Gloss", cat: "metalico",
    bg: grad("#d7dcd9", "#5f6a65"),
    desc: "Cromado com acabamento brilhante.",
    cores: [
      ref("Prata",     grad("#e4e8e6", "#6a756f")),
      ref("Ouro",      grad("#f0d98a", "#9a7a22")),
      ref("Azul",      grad("#9fc0ef", "#2b4f95")),
      ref("Vermelho",  grad("#e9868d", "#8f1b25")),
      ref("Verde",     grad("#9bd8b4", "#25704a"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Acabamento", t: "Cromado brilhante" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Chrome Matte", cat: "metalico",
    bg: grad("#2f4f3a", "#1d3326"),
    desc: "Cores foscas com base cromada: sofisticação sem reflexos.",
    cores: [
      ref("Verde chrome matte",    grad("#2f4f3a", "#1d3326")),
      ref("Preto chrome matte",    grad("#2b2d2e", "#0c0d0d")),
      ref("Azul chrome matte",     grad("#2e4c7a", "#14243d")),
      ref("Cinza chrome matte",    grad("#7a8083", "#3d4244")),
      ref("Vermelho chrome matte", grad("#8f2a33", "#451217")),
      ref("Dourado chrome matte",  grad("#b49a56", "#6a5629"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Material", t: "Frontal em vinil polimérico de alta qualidade para envelopamento automotivo" }],
    fonte: "Catálogo SpeedWrapping"
  },

  /* ----- Efeitos especiais ----- */
  {
    marca: "SpeedWrapping", nome: "Candy", cat: "especial",
    bg: grad("#7a0f2e", "#c2184a"),
    desc: "Cores profundas e translúcidas, com efeito candy.",
    cores: [
      ref("Candy vinho",   grad("#7a0f2e", "#c2184a", "#5c0a22")),
      ref("Candy vermelho", grad("#a40d18", "#e23545", "#6d0710")),
      ref("Candy azul",    grad("#0d2f8f", "#2f6df0", "#081d5c")),
      ref("Candy verde",   grad("#0b6b34", "#25b565", "#064a22")),
      ref("Candy roxo",    grad("#4b1286", "#8b3fe0", "#31095c")),
      ref("Candy laranja", grad("#c24a08", "#ff8a2b", "#8f3305")),
      ref("Candy rosa",    grad("#b01a62", "#f0599f", "#790f43"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Efeito", t: "Cor profunda e translúcida" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Magic", cat: "especial",
    bg: grad("#1b2a6b", "#7a3fb3", "#1fa38a"),
    desc: "Efeito que muda de aparência conforme a luz.",
    cores: [
      ref("Magic azul e roxo",    grad("#1b2a6b", "#7a3fb3", "#1fa38a")),
      ref("Magic verde e azul",   grad("#0f7a55", "#2a5fd0", "#6a3fb0")),
      ref("Magic vermelho e dourado", grad("#a3182a", "#e0902f", "#f2d36a")),
      ref("Magic roxo e rosa",    grad("#4b1f8f", "#c14fa8", "#f0a3c8"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Efeito", t: "Muda de aparência conforme a luz" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Rainbow", cat: "especial",
    bg: grad("#ff5f6d", "#ffc371 25%", "#47e891 50%,#4f8cff 75%,#b05bff"),
    desc: "Efeito arco-íris com reflexos multicoloridos.",
    cores: [
      ref("Rainbow clássico", "linear-gradient(135deg,#ff5f6d,#ffc371 25%,#47e891 50%,#4f8cff 75%,#b05bff)"),
      ref("Rainbow escuro",   "linear-gradient(135deg,#7a1f3a,#a9742a 25%,#1f8a58 50%,#25479a 75%,#5f2a9a)"),
      ref("Rainbow prata",    "linear-gradient(135deg,#dfe4e2,#f2c9d6 30%,#c9e3f2 60%,#d9d2f5)")
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Efeito", t: "Arco-íris com reflexos multicoloridos" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Oxide", cat: "especial",
    bg: grad("#5a4a3a", "#2c2a26"),
    desc: "Acabamento envelhecido, com aspecto de óxido.",
    cores: [
      ref("Ferrugem", grad("#9a4a24", "#4a2412", "#7a3a1c")),
      ref("Bronze envelhecido", grad("#6a5a3a", "#2c2a26", "#7a6a46")),
      ref("Cinza oxidado", grad("#6b6f70", "#2a2d2e", "#585d5e"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Efeito", t: "Envelhecido, com aspecto de óxido" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Ghost Matte", cat: "especial",
    bg: grad("#3a4a56", "#1c242b"),
    desc: "Fosco com efeito fantasma, que revela outra tonalidade conforme o ângulo.",
    cores: [
      ref("Ghost azul",    grad("#3a4a56", "#1c242b", "#3f6f8f")),
      ref("Ghost cinza",   grad("#5a5f61", "#25282a", "#80868a")),
      ref("Ghost verde",   grad("#34504a", "#16221f", "#4f8a78")),
      ref("Ghost roxo",    grad("#463a5a", "#1e1a2a", "#7a5fa0"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Efeito", t: "Fosco que revela outra tonalidade conforme o ângulo" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Laser", cat: "especial",
    bg: grad("#c9d6ff", "#e2e2e2 30%", "#ffd1f4 60%,#b8f5ff"),
    desc: "Efeito holográfico com reflexos em várias cores.",
    cores: [
      ref("Laser prata",   "linear-gradient(135deg,#c9d6ff,#e2e2e2 30%,#ffd1f4 60%,#b8f5ff)"),
      ref("Laser dourado", "linear-gradient(135deg,#ffe9a8,#f1d9c0 30%,#ffc8e0 60%,#d6f5c8)"),
      ref("Laser azul",    "linear-gradient(135deg,#8fb4ff,#c8dcff 30%,#e0b8ff 60%,#9ff0ff)")
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Efeito", t: "Holográfico, com reflexos em várias cores" }],
    fonte: "Catálogo SpeedWrapping"
  },
  {
    marca: "SpeedWrapping", nome: "Chameleon", cat: "especial",
    bg: grad("#0b6b4a", "#1d3fa8", "#6a1fa8"),
    desc: "Camaleão: a cor muda conforme o ângulo de visão.",
    cores: [
      ref("Verde, azul e roxo",    grad("#0b6b4a", "#1d3fa8", "#6a1fa8")),
      ref("Azul e roxo",           grad("#1d4fd0", "#5b2fb0", "#a03fc0")),
      ref("Roxo, rosa e dourado",  grad("#5a1f9a", "#c0409a", "#e8b04a")),
      ref("Vermelho e dourado",    grad("#a3182a", "#d9742a", "#e8c24a")),
      ref("Turquesa e verde",      grad("#0b8a9a", "#12a06a", "#6ad04a"))
    ],
    dur: DUR_CONSULTAR,
    ficha: [{ r: "Efeito", t: "A cor muda conforme o ângulo de visão" }],
    fonte: "Catálogo SpeedWrapping"
  },

  /* ----- Texturas ----- */
  {
    marca: "SpeedWrapping", nome: "Carbon", cat: "textura",
    bg: carbono("#101010", "#232323"),
    desc: "Textura e efeito de fibra de carbono, em acabamento opaco ou brilhante.",
    cores: [
      cor("Carbono preto opaco",     carbono("#101010", "#232323")),
      cor("Carbono preto brilhante", carbono("#050505", "#2e2e2e")),
      ref("Carbono prata",           carbono("#9aa0a3", "#c9cdcf")),
      ref("Carbono vermelho",        carbono("#5e0d14", "#9c1d28")),
      ref("Carbono azul",            carbono("#0f2650", "#26478a"))
    ],
    dur: [{ r: "Durabilidade", t: "Expectativa de 2 anos", anos: 2 }],
    ficha: [
      { r: "Material",     t: "Frontal em vinil polimérico de alta qualidade" },
      { r: "Aplicação",    t: "Tecnologia Airflow, que ajuda a aplicar sem bolhas" },
      { r: "Proteção",     t: "Filme de proteção contra riscos na superfície" },
      { r: "Acabamento",   t: "Opaco ou brilhante" },
      { r: "Durabilidade", t: "Expectativa de 2 anos" }
    ],
    fonte: "Catálogo SpeedWrapping"
  }
];


/* --------------------------------------------------------------------------
   IMPRIMAX: linha Protect Gloss Custom (envelopamento automotivo)
   Boletim técnico revisado em 03/11/2025. A durabilidade varia por tipo de cor.
   -------------------------------------------------------------------------- */
const IMP_FICHA = [
  { r: "Material",    t: "Vinil polimérico calandrado de 120 micras" },
  { r: "Adesivo",     t: "Reposicionável, atóxico, com alta resistência à água" },
  { r: "Resistência UV", t: "1.500 horas de ensaio sem alteração" },
  { r: "Temperatura de serviço", t: "De -15 °C a 70 °C" },
  { r: "Chama",       t: "Não propaga chama" }
];

const imprimax = [
  {
    marca: "Imprimax", nome: "Protect Gloss Custom: cores sólidas", cat: "brilho",
    bg: grad("#000", "#2a2a2a 50%", "#000"),
    desc: "Cores sólidas de alto brilho para envelopamento total ou parcial.",
    cores: [
      cor("Preto Black Piano", "#050505"),
      cor("Cinza claro",       "#c3c7c9"),
      cor("Transparente",      "linear-gradient(135deg,#ffffff,#dfe8e2 55%,#ffffff)"),
      cor("Azul Island",       "#3fa9d6"),
      cor("Azul Pacific",      "#1b5fa8")
    ],
    dur: [
      { r: "Uso interno", t: "até 8 anos", anos: 8 },
      { r: "Uso externo", t: "até 8 anos", anos: 8 }
    ],
    ficha: IMP_FICHA,
    fonte: "Boletim técnico Imprimax Protect Gloss Custom, rev. 03/11/2025"
  },
  {
    marca: "Imprimax", nome: "Protect Gloss Custom: perolizadas", cat: "metalico",
    bg: grad("#f4f1ea", "#d9d3c7 50%", "#f9f7f2"),
    desc: "Cores perolizadas, com brilho suave que muda conforme a luz.",
    cores: [
      cor("Grafite",           grad("#6a6f72", "#2c3032")),
      cor("Branco pérola",     grad("#f8f6f0", "#d9d3c7")),
      cor("Laranja pérola",    grad("#f4a15a", "#d9691d")),
      cor("Amarelo pérola",    grad("#f8e08a", "#d9b53a")),
      cor("Azul Night Trenton", grad("#1e3a6e", "#0b1a3a"))
    ],
    dur: [
      { r: "Uso interno", t: "até 8 anos", anos: 8 },
      { r: "Uso externo", t: "até 2 anos", anos: 2 }
    ],
    ficha: IMP_FICHA,
    fonte: "Boletim técnico Imprimax Protect Gloss Custom, rev. 03/11/2025"
  },
  {
    marca: "Imprimax", nome: "Protect Gloss Custom: metálica", cat: "metalico",
    bg: grad("#d0d4d6", "#8d969a 50%", "#cfd4d6"),
    desc: "Cor metálica prata alumínio.",
    cores: [cor("Prata alumínio", grad("#d0d4d6", "#8d969a 50%", "#cfd4d6"))],
    dur: [
      { r: "Uso interno", t: "até 8 anos", anos: 8 },
      { r: "Uso externo", t: "até 5 anos", anos: 5 }
    ],
    ficha: IMP_FICHA,
    fonte: "Boletim técnico Imprimax Protect Gloss Custom, rev. 03/11/2025"
  }
];


/* --------------------------------------------------------------------------
   3M: Wrap Film Series 2080
   Vinil fundido de camada dupla, filme de 3,5 mil (0,09 mm), 4,5 mil com
   adesivo. Expectativa de 8 anos na vertical e até 3 na horizontal.
   -------------------------------------------------------------------------- */
const M3_DUR = [
  { r: "Superfícies verticais (portas, laterais)", t: "até 8 anos", anos: 8 },
  { r: "Superfícies horizontais (capô, teto)",     t: "até 3 anos", anos: 3 }
];

const M3_FICHA = [
  { r: "Material",   t: "Vinil fundido (cast) de camada dupla, mais conformável e esticável" },
  { r: "Espessura",  t: "Filme 3,5 mil (0,09 mm). Com adesivo, 4,5 mil (0,11 mm)" },
  { r: "Adesivo",    t: "Acrílico ativado por pressão, com tecnologia Controltac (reposicionável) e Comply (canais de saída de ar para aplicar sem bolhas)" },
  { r: "Aplicação",  t: "Usado direto do rolo, sem precisar de laminado. Rolos de 60 polegadas (1,52 m) permitem cobrir quase toda peça sem emendas" },
  { r: "Garantia",   t: "Garantia 3M MCS contra amarelamento, bolhas e rachaduras. A garantia publicada vale para EUA e Canadá: no Brasil, confirmar as condições com o ateliê" }
];

const m3 = [
  {
    marca: "3M", nome: "Wrap Film 2080: brilho e alto brilho", cat: "brilho",
    bg: "#9b0f2a",
    desc: "Cores brilhantes com camada protetora que reduz marcas e riscos durante a aplicação.",
    cores: [
      cor("Ruby Rosso (alto brilho)", "#9b0f2a"),
      cor("Deep Orange",              "#e0560f"),
      cor("Bright Yellow",            "#f7d117"),
      cor("White Aluminum",           grad("#f2f4f4", "#c9cecf")),
      ref("Preto brilho",             "#0a0a0a"),
      ref("Branco brilho",            "#f6f6f4"),
      ref("Azul brilho",              "#1f4fb0"),
      ref("Verde brilho",             "#1c8a4a")
    ],
    dur: M3_DUR,
    ficha: [...M3_FICHA, { r: "Acabamentos desta linha", t: "Gloss e high gloss (alto brilho)" }],
    fonte: "Boletim de produto 3M Wrap Film Series 2080 e páginas oficiais da 3M"
  },
  {
    marca: "3M", nome: "Wrap Film 2080: fosco", cat: "fosco",
    bg: grad("#8f9496", "#575c5e"),
    desc: "Acabamento fosco em cores sólidas e metalizadas.",
    cores: [
      cor("Matte Grey Aluminum", grad("#8f9496", "#575c5e")),
      ref("Preto fosco",         "#1a1a1a"),
      ref("Branco fosco",        "#ebebe8"),
      ref("Verde militar",       "#4b5a3a"),
      ref("Vermelho fosco",      "#9e1b24"),
      ref("Azul fosco",          "#2a4a8a")
    ],
    dur: M3_DUR,
    ficha: M3_FICHA,
    fonte: "Boletim de produto 3M Wrap Film Series 2080 e páginas oficiais da 3M"
  },
  {
    marca: "3M", nome: "Wrap Film 2080: acetinado (satin)", cat: "acetinado",
    bg: grad("#eef0f0", "#b9bebf"),
    desc: "Meio-termo entre brilho e fosco: reflexo suave e aspecto de pintura acetinada.",
    cores: [
      cor("Satin White Aluminum", grad("#eef0f0", "#b9bebf")),
      ref("Satin Black",          grad("#2a2a2a", "#0e0e0e")),
      ref("Satin Dark Gray",      grad("#5a5e60", "#2e3133")),
      ref("Satin Blue",           grad("#3a5f9a", "#1a2f55")),
      ref("Satin Red",            grad("#a8222c", "#5a0f15"))
    ],
    dur: M3_DUR,
    ficha: M3_FICHA,
    fonte: "Boletim de produto 3M Wrap Film Series 2080 e páginas oficiais da 3M"
  },
  {
    marca: "3M", nome: "Wrap Film 2080: color flip", cat: "especial",
    bg: grad("#0b1b4a", "#3a1f7a", "#0f6a8a"),
    desc: "Cores que mudam de tom conforme o ângulo e a luz.",
    cores: [
      cor("Gloss Flip Deep Space", grad("#0b1b4a", "#3a1f7a", "#0f6a8a")),
      ref("Flip verde e azul",     grad("#0f7a55", "#2a5fd0", "#4a3fb0")),
      ref("Flip roxo e rosa",      grad("#4b1f8f", "#c14fa8", "#f0a3c8")),
      ref("Flip dourado e verde",  grad("#d9a53a", "#4a9a4a", "#1f6a6a"))
    ],
    dur: M3_DUR,
    ficha: M3_FICHA,
    fonte: "Boletim de produto 3M Wrap Film Series 2080 e páginas oficiais da 3M"
  },
  {
    marca: "3M", nome: "Wrap Film 2080: carbono e escovado", cat: "textura",
    bg: carbono("#101010", "#262626"),
    desc: "Texturas que imitam fibra de carbono e metal escovado.",
    cores: [
      ref("Fibra de carbono preta",  carbono("#101010", "#262626")),
      ref("Fibra de carbono prata",  carbono("#9aa0a3", "#c9cdcf")),
      ref("Metal escovado prata",    escovado("#b9bec0", "#d9dddf")),
      ref("Metal escovado grafite",  escovado("#4a4f52", "#6a7073")),
      ref("Metal escovado dourado",  escovado("#b59a5a", "#d6bd7e"))
    ],
    dur: M3_DUR,
    ficha: [...M3_FICHA, { r: "Texturas desta linha", t: "Fibra de carbono, metal escovado e outras texturas" }],
    fonte: "Boletim de produto 3M Wrap Film Series 2080 e páginas oficiais da 3M"
  }
];


/* --------------------------------------------------------------------------
   AVERY DENNISON: Supreme Wrapping Film (SW900)
   Durabilidade (vertical / horizontal): preto e branco 12 / 3 anos,
   cores 10 / 2 anos, metálicos 5 / 2 anos, Extreme Texture 4 / 1 ano.
   -------------------------------------------------------------------------- */
const AV_FICHA = [
  { r: "Material",  t: "Vinil fundido (cast) de camada dupla, com boa conformação em curvas e reentrâncias" },
  { r: "Espessura", t: "Cerca de 3,5 mil só o filme e 4,5 mil com adesivo (varia por cor)" },
  { r: "Adesivo",   t: "Acrílico Easy Apply RS: baixa aderência inicial para reposicionar, canais de ar para aplicar sem bolhas e remoção limpa por longo prazo" },
  { r: "Aplicação", t: "Usado direto do rolo, sem laminado, em rolos de 60 polegadas" },
  { r: "Garantia",  t: "O prazo da garantia Avery acompanha a durabilidade do produto e varia por região e clima. Confirmar as condições no Brasil com o ateliê" }
];

const avery = [
  {
    marca: "Avery Dennison", nome: "Supreme Wrapping SW900: brilho", cat: "brilho",
    bg: "#1c3a6e",
    desc: "Mais de 120 cores e acabamentos na linha, com os brilhantes entre os mais usados em envelopamento total.",
    cores: [
      cor("Obsidian Black",        "#0b0b0c"),
      cor("Gloss Park Avenue Blue", "#1c3a6e"),
      cor("Gloss Smooth Sage",      "#9caf88"),
      ref("Gloss White",            "#f6f6f4"),
      ref("Gloss Red",              "#b3121f"),
      ref("Gloss Yellow",           "#f2c617"),
      ref("Gloss Orange",           "#e8591a"),
      ref("Gloss Green",            "#1c8a4a")
    ],
    dur: [
      { r: "Preto e branco (vertical)", t: "até 12 anos", anos: 10 },
      { r: "Cores (vertical)",          t: "até 10 anos", anos: 10 },
      { r: "Horizontal (capô, teto)",   t: "de 2 a 3 anos", anos: 3 }
    ],
    ficha: [...AV_FICHA, { r: "Acabamentos da linha", t: "Gloss, satin, matte, pearl, metallic, chrome, texturas extremas e efeitos especiais" }],
    fonte: "Fichas técnicas Avery Dennison Supreme Wrapping Film (SW900)"
  },
  {
    marca: "Avery Dennison", nome: "Supreme Wrapping SW900: metálico", cat: "metalico",
    bg: grad("#d9a3b3", "#9c5f72"),
    desc: "Cores com partículas metálicas, em acabamento brilhante ou fosco.",
    cores: [
      cor("Gloss Metallic Cosmic Rose", grad("#e0aebb", "#9c5f72")),
      cor("Matte Metallic Pink",        grad("#c98ba0", "#7d3f58")),
      ref("Gloss Metallic Silver",      grad("#e1e5e3", "#7a8581")),
      ref("Gloss Metallic Anthracite",  grad("#6a7073", "#222628")),
      ref("Gloss Metallic Blue",        grad("#4c7bd1", "#17306b")),
      ref("Matte Metallic Black",       grad("#3a3d3f", "#0e0f10"))
    ],
    dur: [
      { r: "Vertical",   t: "até 5 anos", anos: 5 },
      { r: "Horizontal", t: "até 2 anos", anos: 2 }
    ],
    ficha: AV_FICHA,
    fonte: "Fichas técnicas Avery Dennison Supreme Wrapping Film (SW900)"
  },
  {
    marca: "Avery Dennison", nome: "Supreme Wrapping SW900: fosco e acetinado", cat: "fosco",
    bg: "#3b6fa0",
    desc: "Fosco e satin em cores sólidas, para um visual elegante e sem reflexo.",
    cores: [
      cor("Matte Dreamline Blue", "#3b6fa0"),
      ref("Matte Black",          "#161616"),
      ref("Matte White",          "#ebebe8"),
      ref("Satin Black",          grad("#2a2a2a", "#0e0e0e")),
      ref("Matte Military Green", "#4b5a3a"),
      ref("Satin Gray",           grad("#6a6e70", "#383b3d"))
    ],
    dur: DUR_CONSULTAR,
    ficha: AV_FICHA,
    fonte: "Fichas técnicas Avery Dennison Supreme Wrapping Film (SW900)"
  },
  {
    marca: "Avery Dennison", nome: "Extreme Texture: carbono e escovado", cat: "textura",
    bg: carbono("#0e0e0e", "#262626"),
    desc: "Linha de texturas marcantes, com fibra de carbono e metal escovado, boa para conformar em canais e rebites.",
    cores: [
      ref("Fibra de carbono preta", carbono("#0e0e0e", "#262626")),
      ref("Fibra de carbono prata", carbono("#9aa0a3", "#c9cdcf")),
      ref("Escovado prata",         escovado("#b9bec0", "#d9dddf")),
      ref("Escovado preto",         escovado("#2a2c2d", "#4a4d4f")),
      ref("Escovado grafite",       escovado("#4a4f52", "#6a7073"))
    ],
    dur: [
      { r: "Vertical",   t: "até 4 anos", anos: 4 },
      { r: "Horizontal", t: "até 1 ano",  anos: 1 }
    ],
    ficha: [
      { r: "Material",  t: "Vinil fundido com textura de fibra de carbono ou metal escovado" },
      { r: "Espessura", t: "Fibra de carbono com cerca de 4,7 mil (117 micras) só o filme" },
      { r: "Adesivo",   t: "Acrílico removível a longo prazo, com tecnologia Easy Apply RS" },
      { r: "Resistência", t: "Boa resistência a UV, temperatura, umidade e névoa salina" }
    ],
    fonte: "Fichas técnicas Avery Dennison Extreme Texture"
  },
  {
    marca: "Avery Dennison", nome: "ColorFlow: cor que muda", cat: "especial",
    bg: grad("#0f6a8a", "#5a2f9a", "#c0409a"),
    desc: "Série de efeito especial, em que a cor muda conforme o ângulo de visão.",
    cores: [
      ref("ColorFlow azul e roxo",    grad("#0f6a8a", "#5a2f9a", "#c0409a")),
      ref("ColorFlow verde e dourado", grad("#0f7a55", "#7aa03a", "#e0b04a")),
      ref("ColorFlow vermelho e laranja", grad("#a3182a", "#d9552a", "#f0a04a"))
    ],
    dur: [{ r: "Durabilidade", t: "Varia por cor: confirmar no ateliê" }],
    ficha: [
      { r: "Efeito", t: "Mudança de cor conforme o ângulo" },
      { r: "Material", t: "Vinil fundido para envelopamento, da família Supreme Wrapping Film" }
    ],
    fonte: "Catálogo Avery Dennison Supreme Wrapping Film"
  }
];


/* --------------------------------------------------------------------------
   ORACAL (ORAFOL): 970RA Premium Wrapping Cast
   Vinil fundido de 4,25 mil (0,11 mm) com proteção de verniz embutida.
   Durabilidade vertical: preto e branco 12 anos, cores 10, metálico 5,
   shift effect 4, special effect 3 (bronze, cobre, grafite e fosco: 3).
   -------------------------------------------------------------------------- */
const OR_FICHA = [
  { r: "Material",   t: "Vinil PVC fundido (cast) multicamada, com camada protetora de verniz embutida" },
  { r: "Espessura",  t: "Cerca de 4,25 mil (0,11 mm), sem adesivo e sem liner" },
  { r: "Adesivo",    t: "Poliacrilato reposicionável, com liner RapidAir de saída de ar. Remoção com calor, sem resíduo, por até 4 anos" },
  { r: "Aplicação",  t: "Pronto para uso, sem laminado. Acompanha curvas, rebites e reentrâncias. Material sem direção de fibra" },
  { r: "Garantia",   t: "Durabilidade máxima com aplicação profissional e manutenção correta. Prazos de clima europeu, que podem ser menores no Brasil" }
];

const oracal = [
  {
    marca: "Oracal", nome: "970RA: brilho", cat: "brilho",
    bg: "#b3121f",
    desc: "Linha de acabamento que imita pintura automotiva, com mais de 140 cores e acabamentos na família 970RA.",
    cores: [
      cor("Branco (010)",       "#eff1f0"),
      cor("Cardinal Red (028)", "#a8141f"),
      ref("Preto brilho",       "#0a0a0a"),
      ref("Azul brilho",        "#1f4fb0"),
      ref("Verde brilho",       "#1c8a4a"),
      ref("Amarelo brilho",     "#f2c617"),
      ref("Laranja brilho",     "#e8591a"),
      ref("Cinza brilho",       "#6a6e70")
    ],
    dur: [
      { r: "Preto e branco (vertical)", t: "até 12 anos", anos: 10 },
      { r: "Cores (vertical)",          t: "até 10 anos", anos: 10 }
    ],
    ficha: OR_FICHA,
    fonte: "Ficha técnica ORAFOL ORACAL 970RA"
  },
  {
    marca: "Oracal", nome: "970RA: fosco", cat: "fosco",
    bg: "#161616",
    desc: "Fosco e metálico fosco, que valorizam as linhas da carroceria sem reflexo.",
    cores: [
      cor("Preto fosco",       "#161616"),
      ref("Branco fosco",      "#ebebe8"),
      ref("Cinza fosco",       "#6a6e70"),
      ref("Azul fosco",        "#2a4a8a"),
      ref("Verde fosco",       "#3f5a3a"),
      ref("Vermelho fosco",    "#9e1b24")
    ],
    dur: [{ r: "Fosco e metálico fosco", t: "até 3 anos", anos: 3 }],
    ficha: OR_FICHA,
    fonte: "Ficha técnica ORAFOL ORACAL 970RA"
  },
  {
    marca: "Oracal", nome: "970RA: metálico", cat: "metalico",
    bg: grad("#8a55c9", "#3a1b66"),
    desc: "Cores metálicas com brilho profundo. Bronze, cobre e grafite metálico têm durabilidade menor.",
    cores: [
      cor("Violet Metallic", grad("#8a55c9", "#3a1b66")),
      ref("Prata metálico",  grad("#e1e5e3", "#7a8581")),
      ref("Azul metálico",   grad("#4c7bd1", "#17306b")),
      ref("Vermelho metálico", grad("#d0343f", "#60121a")),
      ref("Verde metálico",  grad("#3fa56a", "#12402a")),
      ref("Grafite metálico", grad("#80888a", "#2b3133")),
      ref("Cobre",           grad("#d08a5c", "#6a3a1c")),
      ref("Bronze",          grad("#c18a52", "#5e3a17"))
    ],
    dur: [
      { r: "Metálicos (vertical)", t: "até 5 anos", anos: 5 },
      { r: "Bronze, cobre e grafite", t: "até 3 anos", anos: 3 }
    ],
    ficha: OR_FICHA,
    fonte: "Ficha técnica ORAFOL ORACAL 970RA"
  },
  {
    marca: "Oracal", nome: "970RA: shift e special effect", cat: "especial",
    bg: grad("#1d4fd0", "#5b2fb0", "#a03fc0"),
    desc: "Efeitos que mudam de cor com o ângulo (shift) e acabamentos com brilho cintilante (special).",
    cores: [
      ref("Shift azul e roxo",      grad("#1d4fd0", "#5b2fb0", "#a03fc0")),
      ref("Shift verde e azul",     grad("#0f7a55", "#2a5fd0", "#4a3fb0")),
      ref("Shift vermelho e dourado", grad("#a3182a", "#d9742a", "#e8c24a")),
      ref("Special sparkling prata", grad("#dfe4e2", "#9aa3a0", "#f2f4f3")),
      ref("Special sparkling preto", grad("#0a0a0a", "#4a4d50", "#1a1a1a"))
    ],
    dur: [
      { r: "Shift effect",   t: "até 4 anos", anos: 4 },
      { r: "Special effect", t: "até 3 anos", anos: 3 }
    ],
    ficha: OR_FICHA,
    fonte: "Ficha técnica ORAFOL ORACAL 970RA"
  }
];


/* --------------------------------------------------------------------------
   KPMF: K75400 (Vinyl Wrapping System IV)
   Vinil fundido de 80 a 100 micras (3,3 a 4 mil), até 7 anos na vertical,
   removível por até 3 anos.
   -------------------------------------------------------------------------- */
const KP_FICHA = [
  { r: "Material",  t: "Vinil PVC fundido (cast) macio, de alta conformação em reentrâncias" },
  { r: "Espessura", t: "De 80 a 100 micras (3,3 a 4 mil)" },
  { r: "Adesivo",   t: "Acrílico semipermanente transparente, com tecnologia Air Release para aplicar sem bolhas" },
  { r: "Remoção",   t: "Removível com calor e/ou produtos aprovados por até 3 anos" },
  { r: "Aplicação", t: "Envelopamento total ou parcial, com mais de 80 cores na linha" },
  { r: "Garantia",  t: "Sujeita às condições da garantia KPMF. Confirmar no Brasil com o ateliê" }
];

const kpmf = [
  {
    marca: "KPMF", nome: "K75400: brilho", cat: "brilho",
    bg: "#1f5fb0",
    desc: "Cores brilhantes e intensas, com sensação de pintura nova.",
    cores: [
      cor("Gloss Trident Blue",       "#1f5fb0"),
      cor("Gloss Vengeance Red",      "#b3141f"),
      cor("Gloss Interstellar Pink",  grad("#e0589a", "#8a2a9a", "#4a6ad0")),
      cor("Gloss Cosmos Pink",        grad("#d9609a", "#3a1030")),
      cor("Gloss Midnight Crimson Bloom", grad("#5a0a1e", "#1a0510", "#8a1030")),
      ref("Gloss Black",              "#0a0a0a"),
      ref("Gloss White",              "#f4f4f2")
    ],
    dur: [{ r: "Vertical", t: "até 7 anos", anos: 7 }],
    ficha: KP_FICHA,
    fonte: "Ficha técnica KPMF K75400"
  },
  {
    marca: "KPMF", nome: "K75400: fosco e metálico fosco", cat: "fosco",
    bg: "#5a4030",
    desc: "Fosco sólido, absolute matte e metálico fosco em tons exclusivos.",
    cores: [
      cor("Matte Java Brown",         "#5a4030"),
      cor("Matte Sterling Blue",      grad("#a9b4c2", "#6a7a92")),
      cor("Absolute Matte Vector Green", "#3f8a3a"),
      ref("Matte Dune Metallic",      grad("#b8a583", "#7a6a4a")),
      ref("Matte Black",              "#161616"),
      ref("Matte White",              "#ebebe8")
    ],
    dur: [{ r: "Vertical", t: "até 7 anos", anos: 7 }],
    ficha: KP_FICHA,
    fonte: "Ficha técnica KPMF K75400"
  },
  {
    marca: "KPMF", nome: "K75400: metálico e iridescente", cat: "especial",
    bg: grad("#1a2a6b", "#0a0a10", "#2a8a6a"),
    desc: "Metálicos brilhantes e iridescentes, que alternam duas cores conforme a luz.",
    cores: [
      ref("Gloss Epsilon Metallic",       grad("#a9b4c2", "#4a5a72")),
      cor("Gloss Blue/Black Iridescent",  grad("#1a2a6b", "#0a0a10", "#2a8a6a")),
      cor("Gloss Green/Black Iridescent", grad("#0f6a3a", "#0a0a10", "#6ab04a")),
      cor("Gloss Red/Black Iridescent",   grad("#a3182a", "#0a0a10", "#d9552a")),
      cor("Gloss Purple/Black Iridescent", grad("#5a1f9a", "#0a0a10", "#a03fc0")),
      cor("Matt Purple/Blue Iridescent",  grad("#5a2f9a", "#2a3fa0", "#3a1a5a"))
    ],
    dur: [{ r: "Vertical", t: "até 7 anos", anos: 7 }],
    ficha: KP_FICHA,
    fonte: "Ficha técnica KPMF K75400 e série Premium Iridescent"
  }
];


/* --------------------------------------------------------------------------
   HEXIS: Skintac HX20000, HX30000 Superchrome e HXONE
   HX20000: 100 a 110 micras, até 6 anos na vertical (5 em algumas cores).
   -------------------------------------------------------------------------- */
const HX_FICHA = [
  { r: "Material",  t: "Vinil PVC fundido (cast) multicamada de alta performance" },
  { r: "Espessura", t: "De 100 a 110 micras (3,9 a 4,3 mil), conforme o código do produto" },
  { r: "Adesivo",   t: "Acrílico permanente transparente à base de solvente, com liner HEX'Press que libera ar e permite reposicionar" },
  { r: "Aplicação", t: "Temperatura mínima de aplicação de +15 °C. Faixa de serviço de -40 °C a +90 °C" },
  { r: "Garantia",  t: "A durabilidade real depende do clima, do ângulo de exposição e da base. Confirmar no Brasil com o ateliê" }
];

const hexis = [
  {
    marca: "Hexis", nome: "Skintac HX20000: brilho, satin e matte", cat: "brilho",
    bg: "#8fc43a",
    desc: "Linha principal da Hexis para envelopamento total, em acabamento brilho, satin ou matte.",
    cores: [
      cor("Gloss Wasabi Green",    "#8fc43a"),
      cor("Gloss Polaris Blue",    "#2a6ad0"),
      cor("Gloss Century Green",   "#0f5a3a"),
      cor("Gloss Scottish Green",  "#0b4a32"),
      cor("Gloss Silver",          grad("#dfe4e2", "#8a9490")),
      ref("Gloss Black",           "#0a0a0a"),
      ref("Gloss White",           "#f4f4f2"),
      ref("Gloss Red",             "#b3121f")
    ],
    dur: [
      { r: "Vertical (preto e branco)", t: "até 6 anos", anos: 6 },
      { r: "Vertical (demais cores)",   t: "até 5 anos", anos: 5 }
    ],
    ficha: [...HX_FICHA, { r: "Acabamentos", t: "Gloss, satin e matte" }],
    fonte: "Ficha técnica Hexis Skintac HX20000"
  },
  {
    marca: "Hexis", nome: "Skintac HX30000 Superchrome", cat: "metalico",
    bg: cromo("#d9eaf7", "#3a7ac0"),
    desc: "Cromados de alto impacto em acabamento brilhante ou satin, para detalhes e envelopamentos ousados.",
    cores: [
      cor("Light Blue Gloss",  cromo("#e3f1fb", "#4a9ad8")),
      cor("Blue Gloss",        cromo("#c9dcf5", "#2a5aa8")),
      cor("Titanium Gloss",    cromo("#e6e9ea", "#6a7478")),
      cor("Black Gloss",       cromo("#7a7f80", "#0a0b0b")),
      cor("Copper Gloss",      cromo("#f5d9c4", "#b0643a")),
      cor("Blue Satin",        grad("#5a82b8", "#1f3f70")),
      cor("Titanium Satin",    grad("#a9afb2", "#5a6266")),
      cor("Copper Satin",      grad("#c98a64", "#7a4220"))
    ],
    dur: [{ r: "Durabilidade", t: "Varia por acabamento: confirmar no ateliê" }],
    ficha: [
      { r: "Material",  t: "Vinil PVC fundido multicamada, com efeito cromado" },
      { r: "Adesivo",   t: "Acrílico à base de solvente, sensível à pressão" },
      { r: "Acabamentos", t: "Cromado brilhante (gloss) e cromado acetinado (satin)" },
      { r: "Garantia",  t: "Confirmar prazo e condições com o ateliê" }
    ],
    fonte: "Catálogo Hexis UK Automotive 2024"
  },
  {
    marca: "Hexis", nome: "Skintac HXONE: super gloss autorregenerante", cat: "brilho",
    bg: "#0a0a10",
    desc: "Híbrido de PVC fundido com brilho de espelho, camada superior autorregenerante e tratamento que repele sujeira.",
    cores: [
      ref("Super gloss preto",   "#050508"),
      ref("Super gloss branco",  "#f6f6f4"),
      ref("Super gloss azul",    "#1f4fb0"),
      ref("Super gloss vermelho", "#b3121f")
    ],
    dur: [
      { r: "Preto e branco (vertical)", t: "indicativo de 6 anos", anos: 6 },
      { r: "Demais cores (vertical)",   t: "indicativo de 5 anos", anos: 5 }
    ],
    ficha: [
      { r: "Material",         t: "PVC fundido híbrido, com superfície de brilho espelhado" },
      { r: "Espessura",        t: "De 3,9 a 4,3 mil" },
      { r: "Autorregeneração", t: "Sim, a camada superior recupera marcas leves" },
      { r: "Proteção",         t: "Superfície que repele sujeira, facilitando a limpeza" },
      { r: "Garantia",         t: "Confirmar prazo e condições com o ateliê" }
    ],
    fonte: "Ficha técnica Hexis HXONE"
  }
];


/* --------------------------------------------------------------------------
   PPF E PROTEÇÃO DE PINTURA (separado dos tipos de envelopamento)
   Valores de mercado: a maioria dos filmes premium usa TPU de cerca de 8 mil.
   Dados de marcas internacionais vêm de fichas técnicas e comparativos de
   instaladores. Garantia e disponibilidade mudam por país.
   -------------------------------------------------------------------------- */
const ppf = [
  {
    marca: "XPEL", nome: "Ultimate Plus", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#ffffff,#dfe8e2 55%,#ffffff)",
    desc: "Referência de mercado em PPF transparente: clareza, brilho e autorregeneração rápida.",
    dur: [{ r: "Garantia do fabricante", t: "10 anos", anos: 10 }],
    ficha: [
      { r: "Material",          t: "Poliuretano termoplástico (TPU) alifático com camada superior elastomérica" },
      { r: "Espessura",         t: "Cerca de 8 mil (≈ 200 micras)" },
      { r: "Autorregeneração",  t: "Sim. Riscos leves e marcas de lavagem somem com o calor do sol, água morna ou pistola térmica" },
      { r: "Proteção UV",       t: "Bloqueia cerca de 99% dos raios UV na camada superior" },
      { r: "Acabamento",        t: "Brilho transparente (a versão fosca é o Stealth)" },
      { r: "Garantia",          t: "10 anos contra amarelamento, rachaduras, descascamento, manchas e bolhas. " + NOTA_GARANTIA },
      { r: "Ideal para",        t: "Quem quer a máxima clareza e vai ficar vários anos com o carro" }
    ],
    resumo: { esp: "≈ 8 mil", gar: "10 anos", auto: "Sim", acab: "Brilho" },
    fonte: "Ficha técnica XPEL e comparativos de instaladores (2026)"
  },
  {
    marca: "XPEL", nome: "Stealth (PPF fosco)", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#9da3a0,#6b716e 55%,#9da3a0)",
    desc: "PPF que transforma a pintura brilhante em acetinada, sem trocar a cor original.",
    dur: [{ r: "Garantia do fabricante", t: "Confirmar com o ateliê" }],
    ficha: [
      { r: "Material",   t: "Poliuretano termoplástico (TPU)" },
      { r: "Espessura",  t: "Cerca de 10 mil, segundo instaladores" },
      { r: "Acabamento", t: "Satin/fosco: dá visual acetinado à pintura brilhante e protege ao mesmo tempo" },
      { r: "Garantia",   t: "Confirmar prazo e condições no orçamento" },
      { r: "Ideal para", t: "Quem quer o visual fosco sem envelopar e sem perder a pintura original" }
    ],
    resumo: { esp: "≈ 10 mil", gar: "Confirmar", auto: "Confirmar", acab: "Fosco/satin" },
    fonte: "Comparativos de instaladores (2026)"
  },
  {
    marca: "SunTek (Eastman)", nome: "Ultra", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#f6f9f8,#d3ddd8 55%,#f6f9f8)",
    desc: "Carro-chefe da SunTek: desempenho muito próximo dos filmes mais caros, com bom custo-benefício.",
    dur: [{ r: "Garantia do fabricante", t: "10 anos", anos: 10 }],
    ficha: [
      { r: "Material",         t: "Poliuretano termoplástico (TPU) com camada superior autorregenerante" },
      { r: "Espessura",        t: "Cerca de 8 mil" },
      { r: "Autorregeneração", t: "Sim, ativada por calor" },
      { r: "Acabamento",       t: "Brilho, com opções foscas na marca" },
      { r: "Garantia",         t: "10 anos contra amarelamento, rachaduras e descascamento. " + NOTA_GARANTIA },
      { r: "Ideal para",       t: "Quem busca qualidade de topo com melhor preço" }
    ],
    resumo: { esp: "≈ 8 mil", gar: "10 anos", auto: "Sim", acab: "Brilho" },
    fonte: "Comparativos de instaladores (2026)"
  },
  {
    marca: "3M", nome: "Scotchgard Pro Series", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#f3f7f5,#cfd9d3 55%,#f3f7f5)",
    desc: "PPF da 3M, fabricante de grande tradição em filmes automotivos.",
    dur: [{ r: "Garantia do fabricante", t: "de 7 a 10 anos", anos: 8 }],
    ficha: [
      { r: "Material",         t: "TPU com camada superior autorregenerante" },
      { r: "Espessura",        t: "Cerca de 8 mil" },
      { r: "Autorregeneração", t: "Sim, ativada por calor. Em comparativos de instaladores é um pouco mais lenta que a do XPEL" },
      { r: "Acabamento",       t: "Brilho" },
      { r: "Garantia",         t: "De 7 a 10 anos, conforme a versão e a região. " + NOTA_GARANTIA },
      { r: "Ideal para",       t: "Quem prefere uma marca consagrada em adesivos e películas" }
    ],
    resumo: { esp: "≈ 8 mil", gar: "7 a 10 anos", auto: "Sim", acab: "Brilho" },
    fonte: "Comparativos de instaladores (2026)"
  },
  {
    marca: "STEK", nome: "DYNOshield", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#ffffff,#d8e3dd 55%,#ffffff)",
    desc: "PPF com camada superior reforçada com nanocerâmica, muito usado em carros esportivos.",
    dur: [{ r: "Garantia do fabricante", t: "10 anos", anos: 10 }],
    ficha: [
      { r: "Material",         t: "TPU com camada superior com nanocerâmica" },
      { r: "Espessura",        t: "Cerca de 8 mil" },
      { r: "Autorregeneração", t: "Sim, porém um pouco mais lenta que a do XPEL (cerca de 2 a 4 minutos ao sol, segundo instaladores)" },
      { r: "Acabamento",       t: "Brilho intenso" },
      { r: "Garantia",         t: "10 anos contra amarelamento, rachaduras, descolamento e descascamento. " + NOTA_GARANTIA },
      { r: "Ideal para",       t: "Quem quer brilho alto e facilidade de limpeza" }
    ],
    resumo: { esp: "≈ 8 mil", gar: "10 anos", auto: "Sim", acab: "Brilho" },
    fonte: "Comparativos de instaladores (2026)"
  },
  {
    marca: "LLumar (Eastman)", nome: "Valor", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#f5f8f7,#d1dbd6 55%,#f5f8f7)",
    desc: "PPF da LLumar, marca tradicional de películas, em versão brilho e opção fosca.",
    dur: [{ r: "Garantia do fabricante", t: "10 anos", anos: 10 }],
    ficha: [
      { r: "Material",         t: "TPU com camada superior autorregenerante" },
      { r: "Espessura",        t: "Cerca de 8 mil" },
      { r: "Autorregeneração", t: "Sim, ativada por calor" },
      { r: "Acabamento",       t: "Brilho e opção fosca" },
      { r: "Garantia",         t: "10 anos. " + NOTA_GARANTIA },
      { r: "Ideal para",       t: "Quem quer proteção completa com opção de acabamento fosco" }
    ],
    resumo: { esp: "≈ 8 mil", gar: "10 anos", auto: "Sim", acab: "Brilho ou fosco" },
    fonte: "Comparativos de instaladores (2026)"
  },
  {
    marca: "Avery Dennison", nome: "Supreme Defense", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#f4f8f6,#d0dad5 55%,#f4f8f6)",
    desc: "Entrada da Avery Dennison no PPF premium, com preço competitivo.",
    dur: [{ r: "Garantia do fabricante", t: "5 anos", anos: 5 }],
    ficha: [
      { r: "Material",         t: "TPU alifático com camada superior autorregenerante" },
      { r: "Espessura",        t: "Cerca de 8 mil" },
      { r: "Autorregeneração", t: "Sim, ativada por calor" },
      { r: "Proteção UV",      t: "Bloqueia cerca de 99% dos raios UV" },
      { r: "Garantia",         t: "5 anos contra amarelamento e rachaduras. " + NOTA_GARANTIA },
      { r: "Ideal para",       t: "Quem quer uma marca global com bom custo-benefício" }
    ],
    resumo: { esp: "≈ 8 mil", gar: "5 anos", auto: "Sim", acab: "Brilho" },
    fonte: "Comparativos de instaladores (2026)"
  },
  {
    marca: "Hexis", nome: "Bodyfence", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#ffffff,#dde6e1 55%,#ffffff)",
    desc: "PPF europeu com tecnologia X-technology, em versão padrão e versão XTRM mais espessa.",
    dur: [{ r: "Garantia do fabricante", t: "Confirmar com o ateliê" }],
    ficha: [
      { r: "Material",         t: "TPU com camada superior autorregenerante (X-technology)" },
      { r: "Espessura",        t: "Padrão: 165 micras (≈ 6,5 mil). XTRM: 210 micras (≈ 8,3 mil)" },
      { r: "Autorregeneração", t: "Sim, ativada por calor" },
      { r: "Acabamento",       t: "Brilho" },
      { r: "Garantia",         t: "Confirmar prazo e condições no orçamento" },
      { r: "Ideal para",       t: "Quem quer proteção europeia; a XTRM equivale em espessura aos filmes de 8 mil" }
    ],
    resumo: { esp: "6,5 a 8,3 mil", gar: "Confirmar", auto: "Sim", acab: "Brilho" },
    fonte: "Comparativos de instaladores (2026)"
  },
  {
    marca: "Hexis", nome: "Bodyfence XS (acetinado)", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#b4bab7,#8a918e 55%,#b4bab7)",
    desc: "PPF de acabamento acetinado, que protege a pintura e dá um visual satin discreto.",
    dur: [{ r: "Vertical, uso normal em estrada", t: "até 10 anos", anos: 10 }],
    ficha: [
      { r: "Uso",          t: "Proteção de carroceria contra pedras, insetos, portas e escovas de lavagem" },
      { r: "Acabamento",   t: "Superfície acetinada (satin)" },
      { r: "Durabilidade", t: "Até 10 anos na vertical, em clima europeu e uso normal" },
      { r: "Sobre envelopamento", t: "Também protege envelopamentos lisos de Hexis HX20000 e HX30000 sem relevo, mas a aplicação e a remoção podem danificar o filme sob ele" },
      { r: "Garantia",     t: NOTA_GARANTIA }
    ],
    resumo: { esp: "Confirmar", gar: "Até 10 anos", auto: "Confirmar", acab: "Acetinado" },
    fonte: "Ficha técnica Hexis Bodyfence XS"
  },
  {
    marca: "Ceramic Pro", nome: "Kavaca", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#ffffff,#d6e2dc 55%,#ffffff)",
    desc: "PPF com tratamento cerâmico na superfície, em versões Classic, HD e a flagship de autorregeneração instantânea.",
    dur: [{ r: "Garantia do fabricante", t: "Conforme a versão, até vitalícia", anos: 10 }],
    ficha: [
      { r: "Material",         t: "TPU alifático de cerca de 8 mil" },
      { r: "Versões",          t: "Classic, HD (mais clareza, menos autorregeneração) e a versão com revestimento cerâmico e autorregeneração instantânea" },
      { r: "Autorregeneração", t: "Sim. A versão flagship age de forma instantânea" },
      { r: "Garantia",         t: "Até vitalícia conforme a versão, e a vitalícia exige inspeção anual. " + NOTA_GARANTIA },
      { r: "Ideal para",       t: "Quem quer combinar PPF com proteção cerâmica" }
    ],
    resumo: { esp: "≈ 8 mil", gar: "Até vitalícia*", auto: "Sim", acab: "Brilho" },
    fonte: "Comparativos de instaladores (2026)"
  },
  {
    marca: "Imprimax", nome: "Gold Protect Gloss: transparente protetivo", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#ffffff,#dfe8e2 55%,#ffffff)",
    desc: "Película transparente protetiva com acabamento gloss, que preserva a cor da pintura.",
    dur: [
      { r: "Uso interno", t: "até 8 anos", anos: 8 },
      { r: "Uso externo", t: "até 5 anos", anos: 5 }
    ],
    ficha: [
      { r: "Tipo",       t: "Transparente protetivo da linha Gold Protect Gloss" },
      { r: "Acabamento", t: "Gloss (brilho)" },
      { r: "Durabilidade", t: "Uso interno até 8 anos e uso externo até 5 anos" },
      { r: "Espessura e material", t: "Confirmar com o ateliê no orçamento" }
    ],
    resumo: { esp: "Confirmar", gar: "Externo até 5 anos", auto: "Confirmar", acab: "Brilho" },
    fonte: "Boletim técnico Imprimax Gold Protect Gloss"
  },
  {
    marca: "Alltak", nome: "PPF transparente gloss", cat: "ppf", aberta: true,
    bg: "linear-gradient(135deg,#f3f7f5,#cfd9d3 55%,#f3f7f5)",
    desc: "PPF transparente com acabamento gloss, de marca parceira do ateliê.",
    dur: [{ r: "Durabilidade", t: "Confirmar com o ateliê" }],
    ficha: [
      { r: "Acabamento", t: "Gloss transparente" },
      { r: "Espessura, material e garantia", t: "Ficha técnica em atualização. Confirmar com o ateliê no orçamento" }
    ],
    resumo: { esp: "Confirmar", gar: "Confirmar", auto: "Confirmar", acab: "Brilho" },
    fonte: "Informação do ateliê"
  }
];
