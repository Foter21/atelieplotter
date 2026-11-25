/* ==========================================================================
   dados.js | Conteúdo editável da página inicial
   Para alterar textos, serviços, fotos ou perguntas, edite só este arquivo.
   ========================================================================== */


/* --------------------------------------------------------------------------
   Serviços
   -------------------------------------------------------------------------- */
const servicos = [
  {
    nome: "Envelopamento",
    texto: "Envelopamento esportivo completo ou parcial, com acabamento de nível competição. Ideal para carros de alto padrão e projetos de colecionadores.",
    itens: [
      "Troca total de cor",
      "Aplicações parciais: teto, capô, retrovisores",
      "Fosco, brilho, cromado e texturas",
      "Catálogo de adesivos e projetos personalizados"
    ]
  },
  {
    nome: "PPF",
    texto: "Película de proteção de pintura contra riscos, pedras e desgaste, preservando o valor do veículo.",
    itens: [
      "PPF frontal ou total",
      "Proteção de áreas de maior desgaste",
      "Aplicação com material profissional"
    ]
  },
  {
    nome: "Adesivagem",
    texto: "Adesivagem de viaturas, frotas e veículos de exposição, com identidade visual aplicada com precisão e acabamento profissional.",
    itens: [
      "Viaturas e frotas institucionais",
      "Identidade visual em veículos",
      "Projetos para exposições e eventos"
    ]
  },

  {
    nome: "Residencial e comercial",
    texto: "Aplicação de materiais em residências e comércios, no local do cliente ou no ateliê.",
    itens: [
      "Adesivos decorativos",
      "Fachadas e vitrines",
      "Atendimento no local ou no ateliê"
    ]
  }
];


/* --------------------------------------------------------------------------
   Projetos da galeria
   - imgs: lista de fotos do projeto (a 1ª é a capa do cartão; ao clicar,
           abre a visualização ampliada com todas as fotos do projeto)
           Ex.: imgs: ["assets/img/projetos/carro-1.webp", "assets/img/projetos/carro-2.webp"]
   - pos:  (opcional) enquadramento da capa, para fotos em pé não cortarem o carro.
           Ex.: "center 60%"  (horizontal vertical). Padrão: "center".
   - cat:  envelopamento | ppf | colecionador | adesivos
   Projeto com imgs vazio fica oculto no site até receber foto (e o filtro
   da categoria some se não houver nenhum projeto com foto nela).
   As miniaturas dos cartões ficam em assets/img/projetos/thumbs/ (mesmo nome do arquivo).
   -------------------------------------------------------------------------- */
const projetos = [
  { titulo: "Porsche Boxster",  cat: "envelopamento", desc: "Envelopamento camaleão",
    imgs: ["assets/img/projetos/porsche-boxster-camaleao.webp"],
    pos: "center 45%" },

  { titulo: "Volkswagen Jetta", cat: "envelopamento", desc: "Envelopamento azul fosco",
    imgs: ["assets/img/projetos/jetta-azul-fosco.webp"] },

  { titulo: "Honda Civic",      cat: "envelopamento", desc: "Envelopamento grafite fosco",
    imgs: ["assets/img/projetos/civic-grafite-fosco.webp"] },

  { titulo: "BMW",              cat: "envelopamento", desc: "Envelopamento dourado",
    imgs: ["assets/img/projetos/bmw-dourada.webp"] },

  { titulo: "Toyota SW4",       cat: "envelopamento", desc: "Envelopamento roxo",
    imgs: ["assets/img/projetos/sw4-roxo-1.webp",
           "assets/img/projetos/sw4-roxo-2.webp"],
    pos: "center 62%" },

  { titulo: "Caminhonete Mitsubishi", cat: "envelopamento", desc: "Envelopamento branco fosco",
    imgs: ["assets/img/projetos/mitsubishi-branco-fosco.webp"] },

  { titulo: "Fiat",             cat: "envelopamento", desc: "Chrome delete",
    imgs: ["assets/img/projetos/fiat-chrome-delete.webp"],
    pos: "center 40%" },

  { titulo: "Fiat",             cat: "ppf",           desc: "PPF full (proteção total)",
    imgs: ["assets/img/projetos/fiat-ppf-full-1.webp",
           "assets/img/projetos/fiat-ppf-full-2.webp"],
    pos: "center 48%" },

  { titulo: "Viatura Guarda Civil", cat: "adesivos",  desc: "Adesivagem de viatura",
    imgs: ["assets/img/projetos/viatura-guarda-civil.webp"],
    pos: "center 62%" },

  { titulo: "Projeto Ateliê",   cat: "adesivos",      desc: "Exposição no Shopping Partage",
    imgs: ["assets/img/projetos/projeto-atelie-1.webp",
           "assets/img/projetos/projeto-atelie-2.webp"],
    pos: "center 55%" },

  { titulo: "Projeto 10",       cat: "colecionador",  desc: "Carro de colecionador",
    imgs: [] }
];


/* --------------------------------------------------------------------------
   Perguntas frequentes
   -------------------------------------------------------------------------- */
const duvidas = [
  [
    "Qual a durabilidade do envelopamento?",
    "Depende da linha e da cor escolhidas. Os fabricantes informam expectativas que vão de 2 a 10 anos, e a aplicação e os cuidados fazem diferença. Veja a ficha de cada material na página de materiais."
  ],
  [
    "Qual a diferença entre envelopamento e PPF?",
    "O envelopamento muda a cor e o visual. O PPF é uma película transparente que protege a pintura original contra riscos e pedras. Os dois podem ser combinados."
  ],
  [
    "Vale o investimento?",
    "A película protege a pintura original, o que ajuda na revenda, e permite mudar o visual sem pintar o carro. Também pode ser removida."
  ],
  [
    "Que materiais vocês usam?",
    "Trabalhamos com marcas reconhecidas do mercado, como SpeedWrapping, Oracal, Imprimax e Alltak, escolhidas conforme o projeto."
  ],
  [
    "Como agendo?",
    "Use o formulário desta página ou fale direto no WhatsApp. O atendimento é de segunda a sexta, das 9h às 18h."
  ]
];
