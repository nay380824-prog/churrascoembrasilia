import Logo from './Logo'
import Tricolor from './Tricolor'
import SocialIcon from './SocialIcon'
import { nav, site, whatsappLink } from '../content/site'

/** Rodapé em três colunas (marca, páginas, contatos), com espaçamento compacto. */
export default function Footer() {
  const zap = (p: { nome: string; numero: string; exibicao: string }) =>
    whatsappLink(`Olá ${p.nome}! Gostaria de um orçamento para o buffet.`, p.numero)

  return (
    <footer className="relative z-10 bg-black/30 backdrop-blur-sm">
      <Tricolor />
      <div className="px-6 md:px-10 pt-7 pb-5">
        <div className="max-w-6xl mx-auto grid gap-6 md:gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-6 w-6" />
              <span className="text-sm font-medium tracking-tight">{site.nome}</span>
            </div>
            <p className="text-[13px] leading-snug text-white/55 mt-2 max-w-xs">
              {site.slogan}. Buffet de churrasco a domicílio em {site.cidade}, desde {site.desde}.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1.5">navegue</p>
            <ul className="space-y-0.5 text-[13px]">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/75 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1.5">fale com a gente</p>
            <ul className="space-y-1 text-[13px]">
              {[
                { rede: 'whatsapp' as const, href: zap(site.whatsapp.saymon), label: `${site.whatsapp.saymon.nome} · ${site.whatsapp.saymon.exibicao}` },
                { rede: 'whatsapp' as const, href: zap(site.whatsapp.mayron), label: `${site.whatsapp.mayron.nome} · ${site.whatsapp.mayron.exibicao}` },
                { rede: 'instagram' as const, href: site.instagramUrl, label: site.instagram },
                { rede: 'facebook' as const, href: site.facebookUrl, label: '/churrascoembrasilia' },
              ].map((c) => (
                <li key={c.href}>
                  <a className="group inline-flex items-center gap-2.5 text-white/75 hover:text-white" href={c.href} target="_blank" rel="noopener">
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-white/5 text-brand-gold group-hover:border-brand-gold/60 group-hover:bg-brand-gold/10 transition-colors">
                      <SocialIcon rede={c.rede} className="h-3.5 w-3.5" />
                    </span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="max-w-6xl mx-auto text-[11px] text-white/35 mt-5">
          © {new Date().getFullYear()} {site.nome} · {site.cidade}
        </p>
      </div>
    </footer>
  )
}
