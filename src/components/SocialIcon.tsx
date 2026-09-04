import { siWhatsapp, siInstagram, siFacebook } from 'simple-icons'

const icons = { whatsapp: siWhatsapp, instagram: siInstagram, facebook: siFacebook }

type Props = {
  rede: keyof typeof icons
  className?: string
}

/** Símbolo da rede social (traçados do pacote simple-icons), na cor do texto ao redor. */
export default function SocialIcon({ rede, className = 'h-4 w-4' }: Props) {
  const icon = icons[rede]
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  )
}
