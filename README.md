# Babado News | Landing Page em React

Parte 2 (individual) do trabalho da disciplina **Desenvolvimento Frontend II**,
Universidade Veiga de Almeida, Prof. Caio Silva Azeredo, turma 4169ADSN2A1.

O `index.html` do grupo e a minha página da Parte 1 (`entretenimento.html`) foram unidos
em uma única Landing Page de rolagem, na rota `/`, mantendo a identidade visual do site original.

## Autor

Gabriel Costa Lima Barbará

## Origem

- Repositório do grupo (Parte 1): BabadoNews
- Página que fiz na Parte 1 e que foi unida ao index: `entretenimento.html`
- Página extra que fiz na Parte 1, migrada como diferencial: `sobre.html` (rota `/sobre`)
- Autor(a) do `index.html` original: Bruna Elen dos Santos Figueiredo
- As páginas originais estão na pasta [`referencia-html/`](referencia-html/), para comparação antes/depois.

## Site publicado

https://https://babadonews-gabrielcosta.netlify.app/

## Tecnologias

- React + Vite
- Bootstrap 5.3 e Bootstrap Icons (o mesmo framework CSS usado pelo grupo)
- React Router (rota `/sobre`)
- Fonte Poppins (Google Fonts), a mesma da Parte 1

## Como executar

```bash
npm install
npm run dev
```

Para testar a versão de produção:

```bash
npm run build
npm run preview
```

## Seções da Landing Page

| Seção | Âncora | Origem |
|---|---|---|
| Hero (carrossel + últimas notícias) | `#inicio` | index.html |
| Em destaque | `#destaques` | index.html |
| Entretenimento | `#entretenimento` | entretenimento.html (minha página) |
| Categorias | `#categorias` | index.html |
| Newsletter (chamada final) | `#newsletter` | index.html |
| Sobre Nós (rota separada) | `/sobre` | sobre.html (diferencial) |

## Decisões de fusão

| Bloco original | Ação | Resultado na Landing |
|---|---|---|
| Cabeçalho do index + cabeçalho do entretenimento | Fundir | Um só `Header`. A data agora usa `useState`/`useEffect` |
| Menu do index + menu do entretenimento | Fundir | Um só `Navbar`, fixo no topo, com âncoras para as seções no lugar dos arquivos `.html` |
| Destaque principal do index | Manter e melhorar | Hero com o único H1 da página e carrossel em React. Ganhou o botão "Assine a newsletter" |
| Em destaque do index | Manter | Grade gerada com `map()`. O card do Resident Evil saiu daqui por estar repetido na minha página |
| Destaque da Anitta (H1 do entretenimento) | Transformar | Abre a seção Entretenimento. O título deixou de ser H1 e virou H3, e o botão leva à newsletter |
| Em destaque do entretenimento | Manter | Grade da seção Entretenimento. O título "Em destaque" virou "Entretenimento" para não repetir o do index |
| Categorias do index | Manter | Os links para outras páginas viraram âncoras para as seções |
| Newsletter do index | Transformar | Virou a chamada final (CTA), com validação em `useState` |
| Rodapé do index + rodapé do entretenimento | Fundir | Um só `Footer`, no fim da página |
| Link "Fale conosco" (contato.html) | Remover | A página de contato não fazia parte desta migração |

## Estrutura do projeto

```
src/
├── components/
│   ├── Header.jsx          ← cabeçalho único (data + logo)
│   ├── Navbar.jsx          ← menu único com âncoras
│   ├── Footer.jsx          ← rodapé único
│   ├── CartaoNoticia.jsx   ← card horizontal (últimas notícias)
│   └── CartaoMateria.jsx   ← card da grade de matérias
├── sections/
│   ├── Hero.jsx            ← veio do index
│   ├── Destaques.jsx       ← veio do index
│   ├── Entretenimento.jsx  ← veio da minha página
│   ├── Categorias.jsx      ← veio do index
│   └── Newsletter.jsx      ← veio do index (chamada final)
├── pages/
│   ├── LandingPage.jsx     ← junta as seções na ordem certa
│   └── SobrePage.jsx       ← rota /sobre
├── data/
│   └── menu.js             ← itens do menu, usados no Navbar e no Footer
├── App.jsx                 ← rotas, com Header, Navbar e Footer em volta
├── main.jsx
└── index.css               ← CSS do grupo, com as cores em variáveis
```

## Créditos

- `index.html` original: BabadoNews (Parte 1)
- Imagens: arquivos do site do grupo, redimensionados para a web, e fotos do [Unsplash](https://unsplash.com)
