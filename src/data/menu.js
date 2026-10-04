// Itens do menu, usados pelo Navbar e pelo Footer.
// Na Parte 1 cada item levava a um arquivo .html; na Landing Page cada um leva a uma seção.
// O "/" antes do "#" faz a âncora funcionar também quando o visitante está em outra rota.
// Itens com "rota" são páginas separadas, abertas pelo React Router.
export const itensMenu = [
  { texto: 'Início', link: '/#inicio' },
  { texto: 'Destaques', link: '/#destaques' },
  { texto: 'Entretenimento', link: '/#entretenimento' },
  { texto: 'Categorias', link: '/#categorias' },
  { texto: 'Newsletter', link: '/#newsletter' },
  { texto: 'Sobre Nós', rota: '/sobre' },
]
