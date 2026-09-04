import { useScrollFade } from '../hooks/useScrollFade'
import { site } from '../content/site'
import Tricolor from './Tricolor'

/** Primeira tela: nome do buffet em letras grandes sobre o vídeo. */
export default function Hero() {
  const { sectionRef, contentRef } = useScrollFade<HTMLElement, HTMLDivElement>()

  return (
    <section ref={sectionRef} className="relative z-10 h-screen w-full overflow-hidden">
      <div ref={contentRef} className="relative h-full w-full will-change-transform">
        <h1 className="sr-only">{site.nome} – {site.slogan}</h1>

        <span aria-hidden className="hero-title absolute text-white font-medium text-[15vw] md:text-[12vw] left-4 md:left-10 top-[16%]">
          churrasco
        </span>
        <span aria-hidden className="hero-title absolute text-white font-medium text-[15vw] md:text-[12vw] right-4 md:right-10 top-[36%]">
          em brasília
        </span>
        <span aria-hidden className="hero-title absolute text-brand-gold font-medium text-[15vw] md:text-[12vw] left-[14%] md:left-[30%] top-[56%]">
          buffet
        </span>

        <div className="absolute left-6 md:left-10 top-[66%] md:top-[46%] max-w-[300px] md:max-w-[260px]">
          <Tricolor className="mb-4 max-w-[96px] rounded-full" />
          <p className="text-[15px] leading-snug text-white/90">
            Buffet de churrasco a domicílio em {site.cidade}. Servindo o tradicional churrasco gaúcho
            com excelência.
          </p>
        </div>

        <div className="absolute right-6 md:right-24 top-[13%] md:top-[14%] hidden md:block">
          <div className="flex items-center gap-3 justify-end">
            <span className="hidden md:block h-px w-24 bg-brand-gold/60 rotate-[20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight">{site.anos} anos</span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right">de tradição</p>
        </div>

        <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20 hidden md:block">
          <div className="flex items-center gap-3 justify-end">
            <span className="hidden md:block h-px w-24 bg-brand-gold/60 rotate-[-20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight">todo o DF</span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right">atendemos em qualquer região</p>
        </div>
      </div>
    </section>
  )
}
