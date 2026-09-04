import { useState } from 'react'
import Logo from './Logo'
import { nav, site } from '../content/site'
import { useQuote } from './QuoteContext'

type Props = {
  /** Caminho da página atual, para destacar o link ativo. */
  current?: string
}

export default function Navbar({ current = '/' }: Props) {
  const { open } = useQuote()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-20 px-4 md:px-10 pt-4 md:pt-6">
      <nav className="flex items-center justify-between gap-3" aria-label="principal">
        <a
          href="/"
          className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full px-3 sm:pl-3 sm:pr-5 py-2.5 md:py-3"
        >
          <Logo className="h-6 w-6" />
          <span className="hidden sm:inline text-white text-sm font-normal tracking-tight whitespace-nowrap">{site.nomeCurto}</span>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2">
          {nav.map((link) => {
            const active = link.href === current
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`transition-colors text-sm px-5 py-2 rounded-full ${
                  active ? 'text-brand-gold' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => open()}
            className="bg-brand-red text-white text-sm font-normal rounded-full px-5 md:px-6 py-2.5 md:py-3 hover:bg-[#c4261d] transition-colors whitespace-nowrap"
          >
            <span className="sm:hidden">orçamento</span>
            <span className="hidden sm:inline">pedir orçamento</span>
          </button>
          <button
            type="button"
            aria-label="abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden h-10 w-10 rounded-full bg-neutral-900/90 backdrop-blur text-white grid place-items-center"
          >
            <span className="block w-4 border-t border-white" />
            <span className="block w-4 border-t border-white -mt-2" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden mt-2 rounded-3xl bg-neutral-900/95 backdrop-blur p-2 flex flex-col">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-5 py-3 rounded-2xl text-base ${
                link.href === current ? 'text-brand-gold' : 'text-neutral-200'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
