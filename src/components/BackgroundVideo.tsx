type Props = {
  /** Arquivo de vídeo dentro de `public/`. */
  src?: string
  /** Escurece o vídeo (0 a 1). Nas páginas internas usamos mais escuro para o texto ficar legível. */
  dim?: number
}

/** Vídeo fixo em tela cheia que fica parado enquanto a página rola por cima. */
export default function BackgroundVideo({ src = '/hero.mp4', dim = 0 }: Props) {
  return (
    <>
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      {dim > 0 && <div className="fixed inset-0 z-0 bg-brand-ink" style={{ opacity: dim }} />}
    </>
  )
}
