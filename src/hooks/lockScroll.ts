/**
 * Trava a rolagem da página enquanto uma janela (formulário, foto ampliada) está aberta.
 * Só `overflow: hidden` não basta no celular (iPhone continua rolando o fundo), por isso
 * fixamos o body na posição atual e devolvemos ao fechar.
 */
export function lockScroll() {
  const y = window.scrollY
  const { style } = document.body
  const prev = { position: style.position, top: style.top, left: style.left, right: style.right, overflow: style.overflow }
  style.position = 'fixed'
  style.top = `-${y}px`
  style.left = '0'
  style.right = '0'
  style.overflow = 'hidden'
  return () => {
    style.position = prev.position
    style.top = prev.top
    style.left = prev.left
    style.right = prev.right
    style.overflow = prev.overflow
    window.scrollTo(0, y)
  }
}
