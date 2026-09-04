import { useScrollFade } from '../hooks/useScrollFade'

type FeatureSectionProps = {
  /** Lado do título principal e da descrição. O título pequeno vai para o outro lado. */
  align: 'left' | 'right'
  /** Duas linhas do título principal. A segunda é deslocada para dar o efeito escalonado. */
  title: [string, string]
  description: string
  /** Título pequeno, no mesmo estilo dos números da primeira tela. */
  smallTitle: string
  smallSub: string
  /** Posição vertical do título pequeno no lado oposto. */
  smallPosition?: 'top' | 'bottom'
  /** Link opcional embaixo da descrição. */
  cta?: { label: string; href: string }
}

export default function FeatureSection({
  align,
  title,
  description,
  smallTitle,
  smallSub,
  smallPosition = 'bottom',
  cta,
}: FeatureSectionProps) {
  const { sectionRef, contentRef } = useScrollFade<HTMLElement, HTMLDivElement>()
  const right = align === 'right'

  const mainSide = right ? 'right-4 md:right-10 text-right' : 'left-4 md:left-10 text-left'
  const descSide = right ? 'right-6 md:right-10 text-right items-end' : 'left-6 md:left-10 text-left items-start'
  const smallSide = right ? 'left-6 md:left-20' : 'right-6 md:right-20'
  // no celular o título pequeno fica sempre embaixo, longe do título principal
  const smallVertical =
    smallPosition === 'top' ? 'bottom-20 md:bottom-auto md:top-[14%]' : 'bottom-20 md:bottom-24'
  const smallRow = right ? 'flex-row' : 'flex-row-reverse'
  const smallText = right ? 'text-left' : 'text-right'
  const dividerTilt = smallPosition === 'top' ? 'rotate-[20deg]' : 'rotate-[-20deg]'
  const stagger = right ? 'md:pr-[8vw]' : 'md:pl-[8vw]'

  return (
    <section ref={sectionRef} className="relative z-10 h-screen w-full overflow-hidden">
      <div ref={contentRef} className="relative h-full w-full will-change-transform">
        <h2
          className={`hero-title absolute top-[22%] text-white font-medium text-[12vw] md:text-[8vw] ${mainSide}`}
        >
          <span className="block">{title[0]}</span>
          <span className={`block ${stagger}`}>{title[1]}</span>
        </h2>

        <div className={`absolute top-[50%] md:top-[56%] max-w-[300px] flex flex-col ${descSide}`}>
          <p className="text-[15px] leading-snug text-white/90">{description}</p>
          {cta && (
            <a
              href={cta.href}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/40 hover:border-brand-gold hover:text-brand-gold transition-colors px-5 py-2.5 text-sm"
            >
              {cta.label} <span aria-hidden>→</span>
            </a>
          )}
        </div>

        <div className={`absolute ${smallSide} ${smallVertical}`}>
          <div className={`flex items-center gap-3 ${smallRow}`}>
            <span className="text-3xl md:text-4xl font-medium tracking-tight">{smallTitle}</span>
            <span className={`hidden md:block h-px w-24 bg-brand-gold/60 ${dividerTilt}`} />
          </div>
          <p className={`text-xs md:text-sm text-white/70 mt-1 ${smallText}`}>{smallSub}</p>
        </div>
      </div>
    </section>
  )
}
