import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageShell from '../components/PageShell'
import { useQuote } from '../components/QuoteContext'
import { pacotes, condicoes, comoContratar } from '../content/site'
import '../index.css'

function PacoteCard({ p }: { p: (typeof pacotes)[number] }) {
  const { open } = useQuote()
  return (
    <article
      className={`relative flex flex-col rounded-3xl border p-6 md:p-8 backdrop-blur ${
        p.destaque ? 'border-brand-gold bg-brand-gold/10' : 'border-white/10 bg-white/5'
      }`}
    >
      {p.destaque && (
        <span className="absolute -top-3 left-6 rounded-full bg-brand-gold text-black text-xs font-medium px-3 py-1">
          mais pedido
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">{p.nome}</h2>
      <p className="mt-1 text-white/60">{p.resumo}</p>
      {p.base && <p className="mt-6 text-sm text-brand-gold">{p.base}</p>}
      <ul className={`${p.base ? 'mt-2' : 'mt-6'} space-y-2 flex-1`}>
        {p.itens.map((i) => (
          <li key={i} className="flex gap-3 text-white/85">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
            {i}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-white/50">Valor por pessoa, sob consulta.</p>
      <button
        type="button"
        onClick={() => open(p.nome)}
        className={`mt-3 rounded-full px-6 py-3 font-medium transition-colors ${
          p.destaque ? 'bg-brand-red text-white hover:bg-[#c4261d]' : 'bg-white text-black hover:bg-brand-cream'
        }`}
      >
        quero o {p.nome}
      </button>
    </article>
  )
}

function Precos() {
  return (
    <PageShell
      current="/precos/"
      video="/precos.mp4"
      eyebrow="pacotes e preços"
      title={
        <>
          Três pacotes, <span className="text-brand-gold">um churrasco</span>
        </>
      }
      intro="Todos os pacotes têm o cardápio completo. A diferença está nas bebidas. O valor é por pessoa e vai personalizado no orçamento, feito especialmente para o seu evento."
    >
      <section className="grid md:grid-cols-3 gap-4 md:gap-6 pt-3">
        {pacotes.map((p) => (
          <PacoteCard key={p.id} p={p} />
        ))}
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">condições</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">O que você precisa saber</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {condicoes.map((c) => (
            <div key={c.titulo} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-xl font-medium tracking-tight">{c.titulo}</h3>
              <p className="mt-2 text-white/70">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">como funciona</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">Do primeiro contato à festa</h2>
        <ol className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {comoContratar.map((s) => (
            <li key={s.passo} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <span className="text-4xl font-medium tracking-tight text-brand-red">{s.passo}</span>
              <h3 className="mt-3 text-lg font-medium">{s.titulo}</h3>
              <p className="mt-1 text-sm text-white/70">{s.texto}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Precos />
  </StrictMode>,
)
