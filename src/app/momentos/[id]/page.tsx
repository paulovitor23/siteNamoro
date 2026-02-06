import { timelineEvents } from '@/data/timeline';
import { notFound } from 'next/navigation';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default async function MomentoPage({ params }: { params: Promise<{ id: string }> }) {
  
  const { id } = await params;
  const evento = timelineEvents.find((e) => e.id === id);

  if (!evento) notFound();

  return (
    <main className="min-h-screen bg-[#4a0e1e] text-[#fdf5e6] p-6 md:p-12 selection:bg-[#fdf5e6] selection:text-[#4a0e1e]">
      {/* Botão de voltar */}
      <Link href="/" className="inline-flex items-center gap-2 opacity-60 hover:opacity-100 mb-12 transition-all hover:-translate-x-1">
        <ArrowLeft size={20} /> 
        <span className="text-sm uppercase tracking-widest">Voltar para nossa história</span>
      </Link>

      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <p className="text-sm md:text-base opacity-60 tracking-[0.3em] uppercase mb-4">{evento.date}</p>
          <h1 className={`${playfair.className} text-4xl md:text-7xl mb-6 italic leading-tight`}>
            {evento.title}
          </h1>
          <div className="h-px w-20 bg-[#fdf5e6]/30" />
        </header>

        {/* Player do YouTube */}
        {evento.youtubeId && (
          <div className="mb-16">
            <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-[#fdf5e6]/10">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${evento.youtubeId}?rel=0&modestbranding=1`}
                title="Nosso Momento"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center mt-4 text-xs opacity-40 italic">Dê o play para reviver esse momento com áudio</p>
          </div>
        )}

        {/* Texto detalhado */}
        <article className="space-y-8">
          <div className="flex items-start gap-4">
            <Heart className="w-6 h-6 text-[#fdf5e6]/20 mt-1 shrink-0" />
            <p className="text-lg md:text-2xl leading-relaxed font-light opacity-90 italic">
              {evento.longText || evento.description}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}