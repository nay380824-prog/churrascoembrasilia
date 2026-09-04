/**
 * Conteúdo central do site. Para mudar textos, telefones, cardápio ou
 * pacotes, edite só este arquivo — as páginas leem tudo daqui.
 */

export const site = {
  nome: 'Churrasco em Brasília Buffet',
  nomeCurto: 'Churrasco em Brasília',
  slogan: 'O tradicional churrasco gaúcho',
  anos: 20,
  desde: 2007,
  cidade: 'Brasília-DF',
  instagram: '@churrascoembrasilia',
  instagramUrl: 'https://www.instagram.com/churrascoembrasilia',
  facebookUrl: 'https://www.facebook.com/churrascoembrasilia',
  whatsapp: {
    saymon: { nome: 'Saymon', numero: '5561982655292', exibicao: '(61) 98265-5292' },
    mayron: { nome: 'Mayron', numero: '5561981089458', exibicao: '(61) 98108-9458' },
  },
}

/** Link de WhatsApp já com a mensagem preenchida. */
export function whatsappLink(mensagem: string, numero = site.whatsapp.saymon.numero) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}

export const nav = [
  { label: 'início', href: '/' },
  { label: 'sobre', href: '/sobre/' },
  { label: 'cardápio', href: '/cardapio/' },
  { label: 'preços', href: '/precos/' },
  { label: 'dúvidas', href: '/perguntas-frequentes/' },
] as const

export type BlocoCardapio = { titulo: string; descricao: string; itens: string[]; /** true = o cliente escolhe só um item */ escolhaUma?: boolean }

export const cardapio: BlocoCardapio[] = [
  {
    titulo: 'Carnes',
    descricao: 'Cortes selecionados, assados na hora pelo churrasqueiro.',
    itens: [
      'Picanha',
      'Ancho',
      'Maminha',
      'Fraldinha',
      'Carne suína',
      'Linguiça suína ou toscana',
      'Linguiça de frango',
      'Drumet',
    ],
  },
  {
    titulo: 'Entradas',
    descricao: 'Petiscos servidos enquanto as carnes principais assam.',
    itens: ['Pão de alho', 'Coração de frango', 'Ponta de asa', 'Linguiças', 'Tiras de carne'],
  },
  {
    titulo: 'Acompanhamentos',
    descricao: 'Para montar o prato do jeito que cada convidado gosta.',
    itens: [
      'Arroz branco',
      'Mandioca na manteiga',
      'Vinagrete tradicional',
      'Salada de folhas e frutas',
      'Salada mediterrânea',
    ],
  },
  {
    titulo: 'Feijão tropeiro',
    descricao: 'Receita da casa, feita no dia.',
    itens: ['Feijão fradinho', 'Farofa temperada', 'Bacon', 'Calabresa', 'Ovos', 'Cebola, alho e cebolinha'],
  },
  {
    titulo: 'Sobremesa',
    descricao: 'Para fechar o churrasco. Uma opção, à sua escolha:',
    escolhaUma: true,
    itens: [
      'Sorvete com banana caramelizada',
      'Mousse de limão',
      'Pêssego e figo em calda com chantilly',
    ],
  },
  {
    titulo: 'Complementos',
    descricao: 'Sempre à mesa.',
    itens: ['Azeite e aceto balsâmico', 'Molho barbecue', 'Molho para salada', 'Sal grosso especial'],
  },
]

export type Pacote = {
  id: 'classico' | 'festivo' | 'premium'
  nome: string
  resumo: string
  destaque?: boolean
  base?: string
  itens: string[]
}

export const pacotes: Pacote[] = [
  {
    id: 'classico',
    nome: 'Clássico',
    resumo: 'Só a comida',
    itens: [
      'Cardápio completo de carnes e entradas',
      'Acompanhamentos, saladas e sobremesa',
      'Pratos, talheres e rechaud',
      'Equipe de profissionais treinados',
    ],
  },
  {
    id: 'festivo',
    nome: 'Festivo',
    resumo: 'Comida + bebidas sem álcool',
    destaque: true,
    base: 'Tudo do Clássico, mais:',
    itens: [
      'Coca-Cola, Fanta Laranja e Guaraná (normal e zero)',
      'Sucos em 3 sabores',
      'Água mineral sem gás',
      'Copos e garçons para o serviço de bebidas',
    ],
  },
  {
    id: 'premium',
    nome: 'Premium',
    resumo: 'Comida + todas as bebidas',
    base: 'Tudo do Festivo, mais:',
    itens: [
      'Cerveja a definir com o cliente (orçamento conforme a marca)',
      'Caipirinha e caipiroska: limão, abacaxi e maracujá',
      'Open bar por 5 horas',
    ],
  },
]

export const condicoes = [
  { titulo: 'Mínimo de 30 adultos', texto: 'Os pacotes são calculados por pessoa, a partir de 30 convidados adultos.' },
  { titulo: 'Até 5 horas de evento', texto: 'A equipe chega antes, monta tudo e serve por até 5 horas.' },
  { titulo: 'Sinal de 50%', texto: 'A reserva é confirmada com 50% do valor, por PIX, dinheiro ou transferência.' },
  { titulo: 'Crianças', texto: 'Até 3 anos não pagam. De 4 a 7 anos: 20% de desconto. De 8 a 12 anos: 50% de desconto. A partir de 12 anos: valor integral.' },
]

export const incluso = [
  'Profissionais treinados',
  'Toalha e forro para a mesa do buffet',
  'Pratos e talheres individuais',
  'Todo o material para preparo e serviço das carnes e entradas',
]

export const eventos = ['Casamentos', 'Aniversários', 'Chá de bebê', 'Chá revelação', 'Confraternizações', 'Eventos corporativos', 'Almoços', 'Jantares']

export const modalidades = [
  {
    nome: 'Mão de obra',
    frase: 'Inclui apenas o serviço do churrasqueiro.',
    detalhe: 'Ele assa as carnes que você fornecer.',
  },
  {
    nome: 'Buffet completo',
    frase: 'Você só precisa se preocupar em receber os convidados.',
    detalhe: 'A gente cuida do resto: equipe, carnes, acompanhamentos e sobremesa.',
  },
]

export const incluidoDetalhado = [
  { titulo: 'Equipe profissional', texto: 'Profissionais treinados que cuidam de cada detalhe, do preparo ao atendimento à mesa.' },
  { titulo: 'Pratos & talheres', texto: 'Louças e talheres individuais para todos os convidados.' },
  { titulo: 'Entradas', texto: 'Pão de alho, coração de frango, iscas de carne e linguiças para abrir bem o evento.' },
  { titulo: 'Carnes & acompanhamentos', texto: 'Cortes de carne variados e acompanhamentos tradicionais com saladas.' },
  { titulo: 'Sobremesa', texto: 'Encerramento doce: a festa fecha em alta.' },
]

export const comoContratar = [
  { passo: '01', titulo: 'Entre em contato', texto: 'Pelo site, link da bio ou WhatsApp. Informe o pacote escolhido, a data, o local e o número de convidados.' },
  { passo: '02', titulo: 'Receba o orçamento', texto: 'Enviamos um orçamento detalhado do serviço solicitado.' },
  { passo: '03', titulo: 'Assine o contrato', texto: 'Enviamos um contrato com todos os detalhes acertados sobre o seu evento.' },
  { passo: '04', titulo: 'Garanta a reserva', texto: 'Confirme a data com adiantamento de 50%, conforme o contrato assinado.' },
  { passo: '05', titulo: 'Curta o evento!', texto: 'Chegamos com antecedência, montamos tudo e você só recebe seus convidados.' },
]

export const observacoes = [
  'Sujeito à disponibilidade. Reserva efetivada com 50% de entrada via PIX, espécie ou transferência.',
  'Crianças até 3 anos não pagam · 4 a 7 anos pagam 20% · 8 a 12 anos pagam 50% · acima de 12 anos, valor integral.',
]

/** Pontos da carne, na ordem em que aparecem na foto `public/pontos-da-carne.jpg` (da esquerda para a direita). */
export const pontosCarne = [
  { nome: 'Mal passada', temp: '50–52 °C', descricao: 'Centro vermelho e bem suculento, só selada por fora.' },
  { nome: 'Ao ponto para mal', temp: '55–57 °C', descricao: 'Centro rosado-avermelhado, quente e muito suculenta.' },
  { nome: 'Ao ponto', temp: '60–63 °C', descricao: 'Centro rosado e macio. O ponto mais pedido no churrasco.' },
  { nome: 'Bem passada', temp: '70 °C+', descricao: 'Cozida por igual, sem rosado, mais firme.' },
]

/**
 * Galeria de fotos dos eventos. Os arquivos ficam em `public/galeria/`.
 * Para adicionar uma foto: salve `evento-10.jpg` (grande) e `evento-10-thumb.jpg`
 * (miniatura) na pasta e acrescente uma linha aqui.
 */
export const galeria = [
  { src: '/galeria/evento-04.jpg', thumb: '/galeria/evento-04-thumb.jpg', alt: 'Churrasqueiros no fogo de chão à noite' },
  { src: '/galeria/evento-05.jpg', thumb: '/galeria/evento-05-thumb.jpg', alt: 'Costela no fogo de chão' },
  { src: '/galeria/evento-06.jpg', thumb: '/galeria/evento-06-thumb.jpg', alt: 'Fogo de chão em evento ao ar livre' },
  { src: '/galeria/evento-10.jpg', thumb: '/galeria/evento-10-thumb.jpg', alt: 'Bandeja de chopes servida à beira do lago' },
  { src: '/galeria/evento-01.jpg', thumb: '/galeria/evento-01-thumb.jpg', alt: 'Bandeja de carnes assadas na mesa do buffet' },
  { src: '/galeria/evento-02.jpg', thumb: '/galeria/evento-02-thumb.jpg', alt: 'Mesa do buffet montada com saladas, arroz e talheres' },
  { src: '/galeria/evento-07.jpg', thumb: '/galeria/evento-07-thumb.jpg', alt: 'Bandeja de carnes, linguiças e frango no buffet' },
  { src: '/galeria/evento-08.jpg', thumb: '/galeria/evento-08-thumb.jpg', alt: 'Mesa do buffet com arranjo de flores e carnes' },
  { src: '/galeria/evento-11.jpg', thumb: '/galeria/evento-11-thumb.jpg', alt: 'Churrasqueiro assando os espetos na churrasqueira de chão' },
  { src: '/galeria/evento-12.jpg', thumb: '/galeria/evento-12-thumb.jpg', alt: 'Mesa do buffet com salada, vinagrete e acompanhamentos' },
  { src: '/galeria/evento-13.jpg', thumb: '/galeria/evento-13-thumb.jpg', alt: 'Churrasqueiro da equipe na grelha' },
  { src: '/galeria/evento-14.jpg', thumb: '/galeria/evento-14-thumb.jpg', alt: 'Sobremesa: pêssego em calda com chantilly' },
]
