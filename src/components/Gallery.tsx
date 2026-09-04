import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { galeria } from '../content/site'

/**
 * Carrossel de fotos: uma fileira que rola para o lado, com setas.
 * Clicar numa foto abre em tela cheia, também com setas.
 */
export default function Gallery() {
  const trilho = useRef<HTMLUListElement>(null)
  const [atual, setAtual] = useState<number | null>(null)
  const [noInicio, setNoInicio] = useState(true)
  const [noFim, setNoFim] = useState(false)

  // Atualiza as setas conforme a posição da rolagem.
  useEffect(() => {
    const el = trilho.current
    if (!el) return
    const check = () => {
      setNoInicio(el.scrollLeft <= 4)
      setNoFim(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
    }
    check()
    el.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      el.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  const rolar = (dir: 1 | -1) => {
    const el = trilho.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  useEffect(() => {
    if (atual === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAtual(null)
      if (e.key === 'ArrowRight') setAtual((i) => (i === null ? null : (i + 1) % galeria.length))
      if (e.key === 'ArrowLeft') setAtual((i) => (i === null ? null : (i - 1 + galeria.length) % galeria.length))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [atual])

  const seta =
    'absolute top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-black/60 backdrop-blur border border-white/20 text-xl hover:bg-black/80 transition disabled:opacity-0 disabled:pointer-events-none'

  return (
    <>
      <div className="relative">
        <button type="button" aria-label="fotos anteriores" onClick={() => rolar(-1)} disabled={noInicio} className={`${seta} left-2`}>
          ‹
        </button>
        <button type="button" aria-label="próximas fotos" onClick={() => rolar(1)} disabled={noFim} className={`${seta} right-2`}>
          ›
        </button>

        <ul
          ref={trilho}
          className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {galeria.map((foto, i) => (
            <li key={foto.src} className="snap-start shrink-0 w-[70%] sm:w-[45%] md:w-[31%] lg:w-[23%]">
              <button
                type="button"
                onClick={() => setAtual(i)}
                className="group block w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/5"
                aria-label={`ampliar: ${foto.alt}`}
              >
                <img
                  src={foto.thumb}
                  alt={foto.alt}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {atual !== null &&
        createPortal(
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setAtual(null)}
          role="dialog"
          aria-modal="true"
          aria-label="foto ampliada"
        >
          <img
            src={galeria[atual].src}
            alt={galeria[atual].alt}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" aria-label="fechar" onClick={() => setAtual(null)} className="absolute top-4 right-4 md:top-6 md:right-6 h-12 w-12 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 text-2xl leading-none">
            ×
          </button>
          <button
            type="button"
            aria-label="anterior"
            onClick={(e) => {
              e.stopPropagation()
              setAtual((atual - 1 + galeria.length) % galeria.length)
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-xl"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="próxima"
            onClick={(e) => {
              e.stopPropagation()
              setAtual((atual + 1) % galeria.length)
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-xl"
          >
            ›
          </button>
          <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/60">
            {atual + 1} / {galeria.length}
          </p>
        </div>,
        document.body,
        )}
    </>
  )
}
