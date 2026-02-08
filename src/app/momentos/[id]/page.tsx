import { timelineEvents } from '@/data/timeline';
import { notFound } from 'next/navigation';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { ArrowLeft, Heart, Camera, Quote } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default async function MomentoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const evento = timelineEvents.find((e) => e.id === id);

  if (!evento) notFound();

  return (
    <main className="min-h-screen bg-[#4a0e1e] text-[#fdf5e6] p-6 md:p-12 selection:bg-[#fdf5e6] selection:text-[#4a0e1e]">
      {/* Botão de Voltar */}
      <Link href="/" className="inline-flex items-center gap-2 opacity-60 hover:opacity-100 mb-12 transition-all hover:-translate-x-1">
        <ArrowLeft size={20} /> 
        <span className="text-sm uppercase tracking-widest font-medium">Nossa História</span>
      </Link>

      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <p className="text-sm md:text-base opacity-60 tracking-[0.3em] uppercase mb-4 font-medium">{evento.date}</p>
          <h1 className={`${playfair.className} text-4xl md:text-7xl mb-6 italic leading-tight`}>
            {evento.title}
          </h1>
          <div className="h-px w-20 bg-[#fdf5e6]/30 mx-auto md:mx-0" />
        </header>

        {/* Lógica Condicional: Vídeo, Imagem ou Texto Minimalista */}
        <div className="mb-16">
          {evento.youtubeId ? (
            /* 1. Player do YouTube */
            <div className="relative aspect-video w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#fdf5e6]/10 bg-black/20">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${evento.youtubeId}?rel=0&modestbranding=1&autoplay=1`}
                title={evento.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : evento.image ? (
            /* 2. Imagem Ampliada */
            <div className="relative aspect-video w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#fdf5e6]/10 bg-black/20 group">
              <img 
                src={evento.image} 
                alt={evento.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a0e1e]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 opacity-60">
                <Camera size={16} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Registro Eternizado</span>
              </div>
            </div>
          ) : (
            /* 3. Placeholder Poético (Caso sem imagem e sem vídeo) */
            <div className="py-20 md:py-32 border-y border-[#fdf5e6]/10 flex flex-col items-center text-center px-4">
              <Quote className="w-10 h-10 text-[#fdf5e6]/20 mb-8" />
              <p className={`${playfair.className} text-2xl md:text-4xl italic opacity-50 max-w-2xl leading-relaxed`}>
                "Há momentos que não precisam de moldura, pois moram eternamente na nossa memória."
              </p>
              <Heart className="w-6 h-6 text-[#fdf5e6]/30 mt-8 animate-pulse fill-current" />
            </div>
          )}

          {/* Legenda sutil abaixo da mídia (se houver mídia) */}
          {(evento.youtubeId || evento.image) && (
            <p className="text-center mt-6 text-xs md:text-sm opacity-40 italic font-light tracking-wide">
              {evento.youtubeId ? "Reviva este momento com áudio e vídeo" : "Um clique que diz mais que mil palavras"}
            </p>
          )}
        </div>

        {/* Descrição Detalhada */}
        <article className="max-w-3xl mx-auto md:mx-0">
          <div className="flex items-start gap-4 md:gap-6">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-[#fdf5e6]/20 mt-1 shrink-0 animate-pulse" />
            <div className="space-y-6">
              <p className="text-lg md:text-3xl leading-relaxed font-light opacity-90 italic">
                {evento.longText || evento.description}
              </p>
              <div className="h-px w-full bg-[#fdf5e6]/10 pt-4" />
            </div>
          </div>
        </article>
      </div>
      {/* Decoração de fundo sutil */}
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-[#fdf5e6]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    </main>
  );
}