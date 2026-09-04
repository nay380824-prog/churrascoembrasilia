import { useEffect, useRef } from 'react'

/**
 * Faz o conteúdo de uma seção aparecer e sumir conforme a posição dela na
 * tela: totalmente visível quando a seção está alinhada ao topo, e sumindo
 * quando entra por baixo ou sai por cima. Escreve o estilo direto no DOM
 * para não re-renderizar a cada quadro de rolagem.
 *
 * `range` é a fração da altura da tela em que a transição acontece.
 */
export function useScrollFade<
  S extends HTMLElement = HTMLElement,
  C extends HTMLElement = HTMLElement,
>(range = 0.6) {
  const sectionRef = useRef<S>(null)
  const contentRef = useRef<C>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const update = () => {
      const vh = window.innerHeight || 1
      const t = section.getBoundingClientRect().top / vh
      const progress = Math.min(Math.abs(t) / range, 1)
      const opacity = 1 - progress

      content.style.opacity = opacity.toFixed(3)
      content.style.transform = reduceMotion ? '' : `translate3d(0, ${(t * 40).toFixed(1)}px, 0)`
      content.style.pointerEvents = opacity <= 0.05 ? 'none' : ''
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [range])

  return { sectionRef, contentRef }
}
