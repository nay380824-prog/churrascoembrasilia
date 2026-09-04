# Churrasco em Brasília Buffet — site

React + TypeScript + Tailwind CSS (Vite). Site multi-página.

```bash
npm install     # só na primeira vez
npm run dev     # abre em http://localhost:5173
npm run build   # gera a pasta dist/ para publicar
```

## Onde mexer

- `src/content/site.ts` — TODO o conteúdo: textos, telefones, cardápio, pacotes, condições, FAQ. Para mudar um texto, comece por aqui.
- `index.html` — página inicial (vídeo). `sobre/`, `cardapio/`, `precos/`, `perguntas-frequentes/` — as outras páginas (cada uma tem o seu `index.html` com título e descrição para o Google).
- `src/App.tsx` — montagem da página inicial (vídeo, navbar, hero e as duas telas seguintes).
- `src/pages/*.tsx` — o corpo de cada página interna.
- `src/components/`
  - `Hero.tsx` — primeira tela com o nome do buffet em letras grandes
  - `FeatureSection.tsx` — telas de rolagem da home
  - `Navbar.tsx` — barra de navegação (com menu de celular)
  - `QuoteModal.tsx` / `QuoteContext.tsx` — formulário "pedir orçamento" que monta a mensagem e abre o WhatsApp
  - `PageShell.tsx` — molde das páginas internas (vídeo escurecido + cabeçalho + rodapé)
  - `Footer.tsx` — rodapé
  - `BackgroundVideo.tsx` — vídeo de fundo fixo
  - `Logo.tsx` — marca provisória (trocar pela logo oficial)
- `src/hooks/useScrollFade.ts` — efeito de aparecer/sumir na rolagem
- `src/index.css` — estilos globais e fonte
- `tailwind.config.ts` — cores da marca (`brand.green`, `brand.red`, `brand.yellow`)
- `public/hero.mp4` — vídeo de fundo; `public/favicon.svg` — ícone da aba

## Publicação (GitHub Pages)

O site é publicado automaticamente: toda vez que uma mudança é enviada para o branch `main`
do repositório, o GitHub roda `.github/workflows/deploy.yml`, que constrói o site e publica.
Configuração necessária (uma vez só): em *Settings → Pages* do repositório, em **Source**,
escolher **GitHub Actions**. O domínio vem do arquivo `public/CNAME`.
