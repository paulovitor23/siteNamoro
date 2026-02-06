'use client';

import { Playfair_Display } from 'next/font/google';
import { Sparkles, Heart } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Letter() {
  return (
    <section className="bg-[#4a0e1e] py-20 px-4 md:px-6 min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Estrelas decorativas nas pontas */}
      <Sparkles className="absolute top-10 right-10 text-[#fdf5e6]/20 w-8 h-8 md:w-12 md:h-12" />
      <Sparkles className="absolute bottom-10 left-10 text-[#fdf5e6]/20 w-8 h-8 md:w-12 md:h-12" />

      {/* Título da seção */}
      <h2 className={`${playfair.className} text-3xl md:text-5xl text-[#fdf5e6] mb-12 italic`}>
        Carta Aberta
      </h2>

      {/* O "Papel" da carta */}
      <div className="w-full max-w-4xl bg-[#fdf5e6] rounded-2xl md:rounded-[2rem] p-8 md:p-16 shadow-2xl relative">
        <div className="text-[#4a0e1e] space-y-6 md:space-y-8">
          <p className={`${playfair.className} text-xl md:text-2xl italic border-b border-[#4a0e1e]/10 pb-4`}>
            Para o meu amor, Maria Clara,
          </p>
          
          <div className="space-y-4 text-sm md:text-lg leading-relaxed font-light">
            <p>
              Deste dia 08 de agosto em diante, minha vida ganhou cores que eu nem sabia que existiam. 
              Ao seu lado, cada segundo se transforma em uma memória que guardo com todo o carinho do mundo.
            </p>
            <p>
              Sabe, MC, às vezes me pego sorrindo sozinho lembrando de nós. Esses 6 meses foram a prova 
              de que o destino acerta em cheio quando quer. Você é meu porto seguro, minha melhor risada 
              e a pessoa que eu escolho todos os dias.
            </p>
            <p>
              Obrigado por ser exatamente quem você é. Por me apoiar, por dividir a vida comigo e por 
              fazer de mim um homem mais feliz a cada amanhecer.
            </p>
          </div>

          <div className="pt-8 border-t border-[#4a0e1e]/10">
            <p className="text-sm opacity-60 uppercase tracking-widest mb-2">Com todo o meu amor,</p>
            <p className={`${playfair.className} text-2xl md:text-3xl italic`}>Paulo Vitor</p>
          </div>
        </div>

        {/* Seção de música (Spotify) */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-[#4a0e1e]/10">
          <div className="flex items-center gap-2 mb-6 text-[#4a0e1e]">
            <Heart className="w-5 h-5 fill-current" />
            <h3 className="font-bold uppercase tracking-widest text-xs md:text-sm">
              Nossa Trilha Sonora
            </h3>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg bg-[#191414]">
            {/* DICA DE ENGENHEIRO: 
                Para usar a playlist de vocês, troque o ID após 'playlist/' 
                pelo código da sua playlist no Spotify.
            */}
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1E8O63G3WzLIDu?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
          
          <p className="text-center mt-6 text-[#4a0e1e]/40 text-[10px] md:text-xs italic">
            "Para ouvir enquanto lê..."
          </p>
        </div>
      </div>
    </section>
  );
}