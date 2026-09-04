/** Faixa fina nas três cores da marca, usada como detalhe decorativo. */
export default function Tricolor({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`h-1.5 w-full ${className}`}
      style={{ background: 'linear-gradient(90deg, #047232 0 33.3%, #ac1f18 33.3% 66.6%, #c2b904 66.6%)' }}
    />
  )
}
