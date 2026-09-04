import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import { QuoteProvider } from './components/QuoteContext'
import { site } from './content/site'

/** Página inicial: vídeo fixo, barra de navegação e três telas que rolam por cima. */
export default function App() {
  return (
    <QuoteProvider>
      <main className="relative bg-black">
        <BackgroundVideo dim={0.25} />
        <Navbar current="/" />

        <Hero />

        <FeatureSection
          align="right"
          title={['o tradicional', 'churrasco gaúcho']}
          description="Carnes selecionadas, entradas, acompanhamentos e sobremesa, servidos por profissionais treinados. O autêntico sabor do churrasco gaúcho em casamentos, aniversários e eventos."
          smallTitle={`desde ${site.desde}`}
          smallSub="excelência e qualidade em cada evento"
          smallPosition="bottom"
          cta={{ label: 'conheça o buffet', href: '/sobre/' }}
        />

        <FeatureSection
          align="left"
          title={['do clássico', 'ao premium']}
          description="Três pacotes para o seu evento: só a comida, comida com bebidas sem álcool, ou tudo incluso com open bar. Você escolhe, a gente cuida do resto."
          smallTitle="a partir de 30"
          smallSub="convidados adultos, até 5 horas de festa"
          smallPosition="top"
          cta={{ label: 'ver pacotes e preços', href: '/precos/' }}
        />

        <Footer />
      </main>
    </QuoteProvider>
  )
}
