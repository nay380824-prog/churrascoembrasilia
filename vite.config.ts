import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site multi-página: cada pasta com index.html vira uma URL limpa
// (/sobre/, /cardapio/, /precos/, /perguntas-frequentes/).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        sobre: 'sobre/index.html',
        cardapio: 'cardapio/index.html',
        precos: 'precos/index.html',
        faq: 'perguntas-frequentes/index.html',
      },
    },
  },
})
