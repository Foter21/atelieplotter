# Ateliê do Plotter | Planejamento e roteiro de apresentação

## 0. Estrutura de arquivos
```
ateliedoplotter/
├── index.html                    página inicial
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
│       ├── hero/                 foto de capa (hero.webp)
│       ├── projetos/             fotos dos projetos (+ thumbs/ com as miniaturas)
│       ├── materiais/            fotos das amostras de materiais
│       └── atelie/               foto do profissional (foto-pessoal.webp)
└── docs/
    └── PLANEJAMENTO_E_ROTEIRO.md planejamento e roteiro da apresentação
```

## 1. Planejamento
**Estrutura:** Início (hero com simulador de cor) > Sobre > Serviços (abas) > Materiais (chamada) > página materiais.html (envelopamento por tipo + PPF separado) > Galeria (filtro) > Dúvidas (FAQ) > Agendar (WhatsApp) > Contato e mapa.
**Menu:** Sobre, Serviços, Galeria, Dúvidas, Agendar, Contato. Fixo no topo; vira botão sanduíche abaixo de 820px. Botão flutuante de WhatsApp em todas as telas.
**Cores:** verde #0B8A4A (marca), verde claro #3DDC84 (destaques sobre preto), preto #000 e branco #FFF (fundos alternados). Contraste alto em todos os textos.
**Tipografia:** Big Shoulders Display (títulos, remete a letras de adesivo e competição) + Instrument Sans (texto).
**Imagens:** áreas tracejadas (`.foto-slot`). Para inserir: coloque o arquivo em `assets/img/projetos/` e liste-o no campo `imgs` de `projetos` (`assets/js/data/dados.js`); projetos com várias fotos abrem uma visualização ampliada com todas elas. Foto do profissional: `assets/img/atelie/foto-pessoal.webp`, usada na seção Sobre do `index.html`.
**JavaScript:** menu mobile, simulador de cor da película, abas de serviços, filtro da galeria, FAQ, formulário que monta mensagem de WhatsApp, indicador "aberto agora".
**Futuro:** o aviso no simulador reserva o espaço para a visualização de materiais com IA.

## 2. Roteiro de apresentação (cerca de 5 min)
1. **Escolha:** "Escolhi o Ateliê do Plotter, em Betim (Rua do Rosário, 1168, Angola), que faz envelopamento esportivo, PPF e aplicações residenciais. Ele não tem site, só Instagram."
2. **Por quê:** "Porque é um serviço visual, em que o cliente precisa ver exemplos antes de decidir, e o proprietário tem autoridade rara: é reconhecido como um dos melhores da América do Sul, professor e parceiro de marcas como Oracal e Alltak."
3. **Pesquisa:** "Conversei com o proprietário. As vendas vêm por indicação, há demanda reprimida, o público tem de 16 a 45 anos na região metropolitana de BH, e as paletas favoritas são verde, preto e branco."
4. **Problema:** "Os clientes têm dúvidas sobre material, durabilidade e se vale a pena, querem ver catálogo e projetos e querem consultar horário e agendar fácil. Sem site, nada disso está num só lugar."
5. **Desenvolvimento:** "Planejei estrutura, menu, cores e tipografia antes de codar. Fiz tudo do zero, sem template, em HTML, CSS e JavaScript puros, com o site pensado primeiro para celular."
6. **Tecnologias e recursos:** "HTML semântico, CSS com variáveis e grid, JavaScript para menu, abas, filtro, FAQ e agendamento. O formulário gera uma mensagem pronta no WhatsApp."
7. **Benefícios:** "Apresentação profissional, catálogo sempre à mão, dúvidas respondidas antes do contato, agendamento em um clique, e o negócio passa a ser achado no Google além das indicações."
