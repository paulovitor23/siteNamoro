// src/data/timeline.ts

export interface TimelineEvent {
  label: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    label: "O Início",
    date: "08 Ago 2025",
    title: "Onde tudo começou",
    description: "O dia em que as nossas vidas se cruzaram e eu soube que seria especial.",
    image: "/images/inicio.jpg",
  },
  {
    label: "Primeiro Mês",
    date: "08 Set 2025",
    title: "30 dias de nós",
    description: "Um mês inteiro a descobrir cada detalhe teu.",
    image: "/images/mes1.jpg",
  },
  // ... os outros momentos
];