// src/data/timeline.ts

export interface TimelineEvent {
  id: string;
  label: string;
  date: string;
  title: string;
  description: string;
  image: string;
  youtubeId?: string; // ID do vídeo no YouTube 
  longText?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "primeiro-encontro",
    label: "O Início",
    date: "08 Ago 2025",
    title: "Onde tudo começou",
    description: "O dia em que nossas vidas se cruzaram...",
    image: "/images/inicio.jpg",
    youtubeId: "dQw4w9WgXcQ", // Insira apenas o código final da URL do YouTube
    longText: "Nesse dia eu não sabia que em 6 meses estaria fazendo um site para você..."
  },
 
];