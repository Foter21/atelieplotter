# Ateliê do Plotter | Betim Digital

Site em HTML, CSS e JavaScript puros, sem dependências.

## Como abrir
Dê dois cliques em `index.html`. Não precisa instalar nada.

## Estrutura
```
ateliedoplotter/
├── index.html                    página inicial
├── favicon.ico                   ícone da aba do navegador (cópia na raiz, onde os navegadores procuram)
├── README.md                     como abrir e editar o projeto
├── pages/
│   └── materiais.html            catálogo: envelopamento por tipo e PPF
├── assets/
│   ├── css/
│   │   └── style.css             estilos (15 seções comentadas)
│   ├── js/
│   │   ├── main.js               WhatsApp, menu mobile, rodapé
│   │   ├── home.js               lógica da página inicial
│   │   ├── materiais.js          lógica da página de materiais
│   │   └── data/
│   │       ├── dados.js          serviços, projetos e FAQ (editável)
│   │       └── dados-materiais.js  catálogo de envelopamento e PPF (editável)
│   └── img/
│       ├── logo/                 logo (original e branca), favicon e ícones de app
│       ├── hero/                 foto de capa (hero.webp)
│       ├── projetos/             fotos dos projetos (+ thumbs/ com as miniaturas)
│       ├── materiais/            fotos das amostras de materiais
│       └── atelie/               foto do profissional (foto-pessoal.webp)
└── docs/
    └── PLANEJAMENTO_E_ROTEIRO.md planejamento e roteiro da apresentação
```

## Como editar
- **Textos, serviços, projetos e perguntas:** `assets/js/data/dados.js`
- **Materiais (nomes, cores, texturas, durabilidade, ficha técnica):** `assets/js/data/dados-materiais.js`
  - Cada cor é uma bolinha clicável: `cor("Nome", "#hex")` para cor confirmada ou `ref("Nome", "#hex")` para tom de referência.
  - A ficha técnica fica dentro do cartão (campo `ficha`). O site não manda o cliente para páginas de fabricantes.
- **Número do WhatsApp:** constante `WHATSAPP` em `assets/js/main.js`
- **Cores e fontes:** variáveis no início de `assets/css/style.css`

## Logo e favicon
Todos os arquivos ficam em `assets/img/logo/`:
- `logo.svg`: logo original, para fundo claro.
- `logo-branca.svg`: mesma logo com "PLOTTER" e a caneta em branco, para fundo escuro (é a usada no topo e no rodapé, que são pretos).
- `favicon.svg`, `favicon-16/32/48.png` e `favicon.ico`: ícone da aba do navegador (caneta da logo sobre o verde da marca).
- `apple-touch-icon.png` (iPhone) e `icone-192.png` / `icone-512.png` (Android e atalhos).

Para trocar a logo, substitua `logo-branca.svg` (mantendo o nome) e o site inteiro atualiza. A cor verde da marca é `--verde` (#0FA54A) no início de `style.css`.

## Fotos
Use o formato **WebP** (mais leve que JPG, funciona em todos os navegadores atuais).
- Capa: `assets/img/hero/hero.webp` (hoje é uma foto provisória do Jetta; troque por uma foto horizontal em alta resolução, ideal 1920 px de largura, mantendo o nome)
- Quem somos: `assets/img/atelie/foto-pessoal.webp` (trocar o arquivo, mantendo o nome, atualiza a seção Sobre)
- Projetos: cada foto precisa de **duas versões** com o mesmo nome:
  - `assets/img/projetos/nome.webp`: foto grande (até ~1280 px no maior lado), aparece ao ampliar
  - `assets/img/projetos/thumbs/nome.webp`: miniatura (~720 px), aparece no cartão da galeria
  Depois liste a foto grande no campo `imgs` do projeto em `dados.js`. Projeto com várias fotos: `imgs: ["foto-1.webp", "foto-2.webp"]`. A primeira é a capa e, ao clicar, abre a visualização ampliada com todas.
  Para foto em pé não cortar o carro na capa, use `pos: "center 60%"` (ajuste o %).
  Projeto com `imgs` vazio fica oculto no site; o filtro de uma categoria sem projetos com foto também some.
- Amostras de materiais: salve em `assets/img/materiais/` e use no campo `bg` de `dados-materiais.js`

Para converter JPG em WebP, use o site squoosh.app (gratuito) ou peça a conversão ao Claude.

## Medir cliques no WhatsApp (Google Analytics 4)
1. Crie uma conta gratuita em analytics.google.com e uma propriedade GA4 para o site.
2. Copie o ID de medição (formato `G-XXXXXXXXXX`).
3. Cole em `GA_ID` no começo de `assets/js/main.js`.
4. No GA4, o evento aparece como `whatsapp_click`, com o parâmetro `origem`: `inicio`, `servicos`, `galeria`, `agendar`, `contato`, `botao-flutuante` ou `formulario-agendamento`. Assim dá para saber qual parte do site mais gera contato.

Com `GA_ID` vazio, o site não carrega nem envia nada. Ao ativar, convém avisar os visitantes sobre o uso de cookies de análise (LGPD).
