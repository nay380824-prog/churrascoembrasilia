import { useEffect, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { site, whatsappLink } from '../content/site'

type Props = {
  isOpen: boolean
  pacoteInicial?: string
  onClose: () => void
}

const pacotesOpcoes = ['Clássico', 'Festivo', 'Premium', 'Só mão de obra', 'Ainda não sei']

/**
 * Formulário curto de orçamento. Não envia nada para servidor:
 * monta uma mensagem organizada e abre o WhatsApp com ela pronta.
 */
export default function QuoteModal({ isOpen, pacoteInicial, onClose }: Props) {
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [local, setLocal] = useState('')
  const [adultos, setAdultos] = useState('')
  const [criancas, setCriancas] = useState('')
  const [pacote, setPacote] = useState(pacotesOpcoes[4])
  const [obs, setObs] = useState('')

  useEffect(() => {
    if (pacoteInicial) setPacote(pacoteInicial)
  }, [pacoteInicial])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const dataFmt = data ? new Date(`${data}T12:00:00`).toLocaleDateString('pt-BR') : 'a definir'
    const linhas = [
      `Olá! Gostaria de um orçamento para o buffet.`,
      ``,
      `*Nome:* ${nome || '-'}`,
      `*Data do evento:* ${dataFmt}`,
      `*Local:* ${local || '-'}`,
      `*Convidados:* ${adultos || '?'} adultos${criancas ? ` e ${criancas} crianças` : ''}`,
      `*Pacote de interesse:* ${pacote}`,
    ]
    if (obs.trim()) linhas.push(``, `*Observações:* ${obs.trim()}`)
    window.open(whatsappLink(linhas.join('\n')), '_blank', 'noopener')
    onClose()
  }

  const field =
    'w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold/70'

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm p-0 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-t-3xl md:rounded-3xl bg-brand-ink border border-white/10 p-6 md:p-8 max-h-[92vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">orçamento</p>
            <h2 id="quote-title" className="text-2xl font-medium tracking-tight mt-1">
              Conta pra gente do seu evento
            </h2>
            <p className="text-sm text-white/60 mt-1">
              A mensagem já vai pronta para o WhatsApp do {site.whatsapp.saymon.nome}.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="fechar"
            className="shrink-0 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="sm:col-span-2 text-xs text-white/60">
            Seu nome
            <input className={`${field} mt-1`} value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Como podemos te chamar?" />
          </label>
          <label className="text-xs text-white/60">
            Data do evento
            <input type="date" className={`${field} mt-1`} value={data} onChange={(e) => setData(e.target.value)} />
          </label>
          <label className="text-xs text-white/60">
            Local (bairro / cidade)
            <input className={`${field} mt-1`} value={local} onChange={(e) => setLocal(e.target.value)} placeholder="Ex.: Lago Sul" />
          </label>
          <label className="text-xs text-white/60">
            Adultos
            <input type="number" min={1} className={`${field} mt-1`} value={adultos} onChange={(e) => setAdultos(e.target.value)} placeholder="30" />
          </label>
          <label className="text-xs text-white/60">
            Crianças
            <input type="number" min={0} className={`${field} mt-1`} value={criancas} onChange={(e) => setCriancas(e.target.value)} placeholder="0" />
          </label>
          <div className="sm:col-span-2">
            <p className="text-xs text-white/60 mb-1">Pacote de interesse</p>
            <div className="flex flex-wrap gap-2">
              {pacotesOpcoes.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPacote(p)}
                  className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                    pacote === p
                      ? 'bg-brand-gold text-black border-brand-gold'
                      : 'border-white/20 text-white/80 hover:border-white/50'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <label className="sm:col-span-2 text-xs text-white/60">
            Observações (opcional)
            <textarea rows={2} className={`${field} mt-1`} value={obs} onChange={(e) => setObs(e.target.value)} placeholder="Tipo de evento, horário, alguma preferência..." />
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-brand-red hover:bg-[#c4261d] transition-colors text-white font-medium py-3.5"
        >
          Enviar pelo WhatsApp
        </button>
        <p className="text-center text-xs text-white/40 mt-3">
          Ou chame direto no WhatsApp: {site.whatsapp.saymon.nome} {site.whatsapp.saymon.exibicao} · {site.whatsapp.mayron.nome} {site.whatsapp.mayron.exibicao}
        </p>
      </form>
    </div>,
    document.body,
  )
}
