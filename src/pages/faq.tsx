import { StrictMode, useState, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import PageShell from '../components/PageShell'
import { modalidades, incluidoDetalhado, pacotes, comoContratar, observacoes, pontosCarne } from '../content/site'
import '../index.css'

const Dest = ({ children }: { children: ReactNode }) => <em className="not-italic text-brand-gold">{children}</em>

/** Cada pergunta da sanfona: título e o conteúdo que aparece ao abrir. */
const perguntas: { pergunta: ReactNode; resposta: ReactNode }[] = [
  {
    pergunta: (
      <>
        Qual a diferença entre <Dest>mão de obra</Dest> e <Dest>buffet completo</Dest>?
      </>
    ),
    resposta: (
      <div className="grid sm:grid-cols-2 gap-3">
        {modalidades.map((m, i) => (
          <div key={m.nome} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">opção {i + 1}</p>
            <h3 className="mt-2 text-xl font-medium tracking-tight">{m.nome}</h3>
            <p className="mt-3 text-sm text-white/85">{m.frase}</p>
            <p className="mt-1 text-sm text-white/60">{m.detalhe}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    pergunta: (
      <>
        O que está <Dest>incluído</Dest> no buffet completo?
      </>
    ),
    resposta: (
      <>
        <p className="text-white/70">Tudo que você precisa para receber sem se preocupar, da equipe à última colher de sobremesa.</p>
        <ul className="mt-4 divide-y divide-white/10">
          {incluidoDetalhado.map((it, i) => (
            <li key={it.titulo} className="grid grid-cols-[2.5rem_1fr] gap-3 py-3">
              <span className="text-lg font-medium text-brand-gold">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="font-medium">{it.titulo}</p>
                <p className="text-sm text-white/60">{it.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    pergunta: (
      <>
        Qual a diferença entre os <Dest>pacotes</Dest> do buffet completo?
      </>
    ),
    resposta: (
      <div className="grid md:grid-cols-3 gap-3">
        {pacotes.map((p) => (
          <div key={p.id} className={`rounded-2xl border p-5 ${p.destaque ? 'border-brand-gold/60 bg-brand-gold/10' : 'border-white/10 bg-white/5'}`}>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">pacote</p>
            <h3 className="mt-2 text-xl font-medium tracking-tight">{p.nome}</h3>
            <p className="text-sm text-white/60">{p.resumo}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {p.base && <li className="text-brand-gold">{p.base}</li>}
              {p.itensCurto.map((i) => (
                <li key={i} className="flex gap-2 text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    pergunta: (
      <>
        Como <Dest>contratar</Dest> o buffet para a minha festa?
      </>
    ),
    resposta: (
      <>
        <ol className="divide-y divide-white/10">
          {comoContratar.map((s) => (
            <li key={s.passo} className="grid grid-cols-[2.5rem_1fr] gap-3 py-3">
              <span className="text-lg font-medium text-brand-red">{s.passo}</span>
              <div>
                <p className="font-medium">{s.titulo}</p>
                <p className="text-sm text-white/60">{s.texto}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">observações</p>
          {observacoes.map((o) => (
            <p key={o} className="mt-1.5 text-xs text-white/60">
              {o}
            </p>
          ))}
        </div>
      </>
    ),
  },
  {
    pergunta: (
      <>
        Como você gosta da <Dest>carne</Dest>?
      </>
    ),
    resposta: (
      <>
        <p className="text-white/70">
          No churrasco a carne vai saindo em vários pontos, e o churrasqueiro serve como você preferir. Da esquerda para a direita:
        </p>
        <figure className="mt-4">
          <img
            src="/pontos-da-carne.jpg"
            alt="Quatro fatias de carne lado a lado, da mal passada à bem passada"
            loading="lazy"
            className="w-full rounded-2xl border border-white/10"
          />
          <figcaption className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-4">
            {pontosCarne.map((p, i) => (
              <div key={p.nome} className="md:border-t md:border-brand-gold/40 md:pt-3">
                <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">{String(i + 1).padStart(2, '0')}</p>
                <p className="mt-1 font-medium">{p.nome}</p>
                <p className="text-xs text-brand-gold/90">{p.temp}</p>
                <p className="mt-1 text-xs text-white/60">{p.descricao}</p>
              </div>
            ))}
          </figcaption>
        </figure>
      </>
    ),
  },
]

function Faq() {
  const [aberta, setAberta] = useState<number | null>(null)

  return (
    <PageShell
      current="/perguntas-frequentes/"
      video="/faq.mp4"
      eyebrow="perguntas frequentes"
      title={
        <>
          Tira-<span className="text-brand-gold">dúvidas</span>
        </>
      }
      intro="As perguntas que mais recebemos no WhatsApp e no Instagram. Não achou a sua? Chame a gente."
    >
      <section className="max-w-4xl">
        {perguntas.map((item, i) => {
          const open = aberta === i
          return (
            <div key={i} className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setAberta(open ? null : i)}
                aria-expanded={open}
                className="w-full flex items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-lg md:text-xl font-medium tracking-tight">{item.pergunta}</span>
                <span
                  aria-hidden
                  className={`shrink-0 h-8 w-8 rounded-full border border-white/20 grid place-items-center text-xl transition-transform ${
                    open ? 'rotate-45 text-brand-gold border-brand-gold' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {open && <div className="pb-8">{item.resposta}</div>}
            </div>
          )
        })}
      </section>
    </PageShell>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Faq />
  </StrictMode>,
)
