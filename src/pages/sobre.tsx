import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageShell from '../components/PageShell'
import Gallery from '../components/Gallery'
import { site, eventos, incluso } from '../content/site'
import '../index.css'

function Sobre() {
  return (
    <PageShell
      current="/sobre/"
      video="/sobre.mp4"
      eyebrow="sobre o buffet"
      title={
        <>
          {site.anos} anos de <span className="text-brand-gold">churrasco gaúcho</span>
        </>
      }
      intro={`Desde ${site.desde} servimos o tradicional churrasco gaúcho em ${site.cidade} e em toda a região do Distrito Federal. Carnes selecionadas, equipe treinada e estrutura completa levada até o seu evento.`}
    >
      <section className="grid md:grid-cols-3 gap-4">
        {[
          { n: `${site.anos}`, l: 'anos de tradição' },
          { n: '+2000', l: 'eventos realizados' },
          { n: 'DF', l: 'atendimento em toda a região' },
        ].map((s) => (
          <div key={s.l} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8">
            <p className="text-5xl md:text-6xl font-medium tracking-tight text-brand-gold">{s.n}</p>
            <p className="mt-2 text-white/70">{s.l}</p>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">nossa história</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">Excelência e qualidade em cada evento</h2>
        </div>
        <div className="space-y-4 text-white/75 leading-relaxed">
          <p>
            O {site.nome} nasceu em {site.desde} com uma ideia simples: levar o autêntico sabor do churrasco
            gaúcho até o seu evento, seja na sua casa, na chácara ou no clube, com a mesma qualidade de uma boa
            churrascaria.
          </p>
          <p>
            De lá para cá, foram {site.anos} anos de casamentos, aniversários, confraternizações e todo tipo de
            comemoração marcante, do chá de bebê à festa de fim de ano. O que não mudou: carnes selecionadas,
            comida saborosa e uma equipe preparada que cuida de tudo, da montagem ao último prato servido.
          </p>
        </div>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">o que está incluso no buffet completo</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">Chegamos com tudo pronto</h2>
        <ul className="mt-8 grid sm:grid-cols-2 gap-3">
          {incluso.map((i) => (
            <li key={i} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" />
              <span className="text-white/85">{i}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">eventos</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">Para toda ocasião</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {eventos.map((e) => (
            <span key={e} className="rounded-full border border-white/20 px-5 py-2.5 text-sm">
              {e}
            </span>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">galeria</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">Nossos eventos</h2>
        <p className="mt-2 text-white/60 max-w-lg">Um pouco do que a gente monta e serve. Use as setas para passar e clique numa foto para ampliar.</p>
        <div className="mt-8">
          <Gallery />
        </div>
      </section>
    </PageShell>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sobre />
  </StrictMode>,
)
