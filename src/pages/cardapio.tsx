import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageShell from '../components/PageShell'
import { cardapio } from '../content/site'
import '../index.css'

function Cardapio() {
  return (
    <PageShell
      current="/cardapio/"
      video="/cardapio.mp4"
      eyebrow="cardápio"
      title={
        <>
          Do <span className="text-brand-gold">petisco</span> à sobremesa
        </>
      }
      intro="Cardápio servido em todos os pacotes do buffet completo. As carnes são assadas na hora e as entradas começam a sair a partir do horário de início definido para o evento."
    >
      <section className="grid md:grid-cols-2 gap-4 md:gap-6">
        {cardapio.map((bloco, i) => (
          <article
            key={bloco.titulo}
            className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 ${
              i === 0 ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-8' : ''
            }`}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-tight">{bloco.titulo}</h2>
              <p className="mt-2 text-white/60">{bloco.descricao}</p>
            </div>
            <ul className={`mt-6 ${i === 0 ? 'md:mt-0 grid grid-cols-2 gap-x-6' : ''} space-y-2`}>
              {bloco.itens.map((item, k) => (
                <li key={item} className="flex gap-3 border-b border-white/10 pb-2 text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  <span>
                    {item}
                    {bloco.escolhaUma && k < bloco.itens.length - 1 && (
                      <span className="ml-2 text-xs uppercase tracking-[0.2em] text-brand-gold">ou</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </PageShell>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cardapio />
  </StrictMode>,
)
