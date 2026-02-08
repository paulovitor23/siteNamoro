// src/data/timeline.ts

export interface TimelineEvent {
  id: string;
  label: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  youtubeId?: string; 
  longText?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "o-reencontro", // ID Único
    label: "O reencontro",
    date: "12 Abr 2025",
    title: "Nos encontramos depois de um tempo...",
    description: "O dia em que eu suspeitei que você gostava de mim, mas não tinha certeza kkkk",
    image: "/images/timeline/praia.JPG", // Certifique-se de que a foto existe
    // Note: Sem youtubeId aqui, ele mostrará apenas a imagem grande
    longText: "Eu lembro de cada detalhe desse dia. O jeito que você olhava e como a gente conversava... foi ali que a sementinha começou a crescer."
  },
  {  
    id: "primeiro-date", // ID Único
    label: "Primeiro Encontro",
    date: "19 Abr 2025",
    title: "Nosso primeiro date de verdade",
    description: "Nao foi no melhor restaurante do mundo, mas oque conta é a companhia kkkk",
    longText: "Nao foi no melhor restaurante do mundo, mas oque conta é a companhia kkkk"
  },
  {  
    id: "festa-junina", // Adicione quantos quiser seguindo esse padrão
    label: "Festas Juninas",
    date: "13 Jun 2025",
    title: "Nossa primeira festa junina",
    description: "O dia em que a gente aproveitou um vinho maravilhoso, que a senhorita nao gostou.",
    image: "/images/timeline/festa_junina.jpg",
    // youtubeId: "v5GyRCQD7xo", // Se tiver vídeo, descomente essa linha
    longText: ""
  },
  {  
    id: "seu-aniversario", // Adicione quantos quiser seguindo esse padrão
    label: "Seu aniversário",
    date: "17 Jul 2025",
    title: "O dia dessa mulher especial",
    description: "Fomos na praia para nos vermos e eu poder te entregar um buque lindo",
    image: "/images/timeline/aniversario.jpg",
    youtubeId: "v5GyRCQD7xo",
    longText: "Fiz esse video super legal kkkk"
  },
  {  
    id: "o-grande-dia", // Adicione quantos quiser seguindo esse padrão
    label: "O Grande Dia",
    date: "08 Ago 2025",
    title: "O dia que eu tomei coragem de pedir voce em namoro ",
    description: "Obviamente nosso pequenique estava maravilhoso, e o pedido nao podia ser melhor kkkk",
    image: "/images/timeline/pedido.jpg",
    youtubeId: "CMnaMXfaG9k",
    longText: "O dia da melhor escolha que eu fiz em 2025"
  },
  {  
    id: "anel", // Adicione quantos quiser seguindo esse padrão
    label: "2 Mes",
    date: "12 Out 2025",
    title: "Data em que eu te entreguei o anel de namoro ",
    description: "Foi um trabalho procurar um anel legal e saber o tamanho do seu dedo",
    image: "/images/timeline/anel1.HEIC",
    longText: ""
  },
  {  
    id: "italiano", // Adicione quantos quiser seguindo esse padrão
    label: "4 Mes",
    date: "08 Dez 2025",
    title: "Comemoramos 4 meses de namoro na praia e com um jantar",
    description: "Foi um dia muito especial e divertido",
    image: "/images/timeline/mes3.png",
    longText: ""
  },
  {  
    id: "ano-novo", // Adicione quantos quiser seguindo esse padrão
    label: "Ano novo",
    date: "01 Jan 2026",
    title: "Comemoramos o ano novo juntos",
    description: "Amei passar o ano novo com voce e sua família",
    image: "/images/timeline/ano_novo.HEIC",
    longText: ""
  },
  {  
    id: "5mes", // Adicione quantos quiser seguindo esse padrão
    label: "5 mes",
    date: "08 Jan 2026",
    title: "Fomos em Grumari e passamos um ótimo tempo juntos",
    description: "É sempre bom ir na praia com voce",
    image: "/images/timeline/praiou.JPG",
    longText: ""
  },
  {  
    id: "?-mes", // Adicione quantos quiser seguindo esse padrão
    label: "6 mes",
    date: "08 Fev 2026",
    title: "Estamos no presente e vamos continuar construindo nossa história JUNTOS",
    description: "Te amo demais, meu AMOR",
    longText: ""
  }
];