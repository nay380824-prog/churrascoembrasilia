type LogoProps = {
  className?: string
}

/**
 * Marca: as três faixas diagonais (verde, vermelho e amarelo) do cartão do buffet.
 * Se preferir usar a arte oficial, coloque o arquivo em `public/` e troque por <img src="/logo.png" />.
 */
export default function Logo({ className = 'h-6 w-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="logo-clip">
          <rect width="64" height="64" rx="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-clip)">
        <rect width="64" height="64" fill="#0b0a08" />
        <g transform="rotate(-30 32 32)">
          <rect x="-20" y="18" width="104" height="10" fill="#047232" />
          <rect x="-20" y="28" width="104" height="10" fill="#ac1f18" />
          <rect x="-20" y="38" width="104" height="10" fill="#c2b904" />
        </g>
      </g>
    </svg>
  )
}
