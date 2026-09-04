import type { ReactNode } from 'react'
import BackgroundVideo from './BackgroundVideo'
import Navbar from './Navbar'
import Footer from './Footer'
import Tricolor from './Tricolor'
import { QuoteProvider } from './QuoteContext'

type Props = {
  current: string
  /** Vídeo de fundo desta página (arquivo em `public/`). */
  video: string
  eyebrow: string
  title: ReactNode
  intro?: string
  children: ReactNode
}

/**
 * Molde das páginas internas: mesmo vídeo de fundo (bem escurecido),
 * mesma barra de navegação, um cabeçalho grande e o conteúdo em cartões.
 */
export default function PageShell({ current, video, eyebrow, title, intro, children }: Props) {
  return (
    <QuoteProvider>
      <main className="relative min-h-screen bg-brand-ink text-white">
        <BackgroundVideo src={video} dim={0.72} />
        <Navbar current={current} />

        <header className="relative z-10 px-6 md:px-10 pt-36 md:pt-48 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">{eyebrow}</p>
            <h1 className="hero-title font-medium text-[13vw] md:text-[6.5rem] mt-3">{title}</h1>
            <Tricolor className="mt-8 max-w-[160px] rounded-full" />
            {intro && <p className="mt-6 max-w-xl text-base md:text-lg text-white/75 leading-relaxed">{intro}</p>}
          </div>
        </header>

        <div className="relative z-10 px-6 md:px-10 pb-24">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">{children}</div>
        </div>

        <Footer />
      </main>
    </QuoteProvider>
  )
}
