import { createContext, useContext, useState, type ReactNode } from 'react'
import QuoteModal from './QuoteModal'

type QuoteContextValue = {
  open: (pacote?: string) => void
}

const QuoteContext = createContext<QuoteContextValue>({ open: () => {} })

/** Disponibiliza o botão "pedir orçamento" para qualquer parte do site. */
export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [pacote, setPacote] = useState<string | undefined>()

  const open = (p?: string) => {
    setPacote(p)
    setIsOpen(true)
  }

  return (
    <QuoteContext.Provider value={{ open }}>
      {children}
      <QuoteModal isOpen={isOpen} pacoteInicial={pacote} onClose={() => setIsOpen(false)} />
    </QuoteContext.Provider>
  )
}

export function useQuote() {
  return useContext(QuoteContext)
}
