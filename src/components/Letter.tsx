'use client';

import { useState, useRef } from 'react';
import { Playfair_Display } from 'next/font/google';
import { Sparkles, Heart, Play, Pause } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Letter() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-[#4a0e1e] py-20 px-4 md:px-6 min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Estrelas decorativas */}
      <Sparkles className="absolute top-10 right-10 text-[#fdf5e6]/20 w-8 h-8 md:w-12 md:h-12" />
      <Sparkles className="absolute bottom-10 left-10 text-[#fdf5e6]/20 w-8 h-8 md:w-12 md:h-12" />

      <h2 className={`${playfair.className} text-3xl md:text-5xl text-[#fdf5e6] mb-12 italic`}>
        Carta Aberta
      </h2>

      <div className="w-full max-w-4xl bg-[#fdf5e6] rounded-2xl md:rounded-[2rem] p-8 md:p-16 shadow-2xl relative">
        <div className="text-[#4a0e1e] space-y-6 md:space-y-8">
          <p className={`${playfair.className} text-xl md:text-2xl italic border-b border-[#4a0e1e]/10 pb-4`}>
            Minha querida Maria Clara,
          </p>
          
          <div className="space-y-6 text-sm md:text-lg leading-relaxed font-light text-justify">
            <p>
              Desde o primeiro dia que te vi, eu já sabia. Sabia que era com você que eu queria dividir minhas dificuldades, meus desafios e, principalmente, cada uma das minhas conquistas — embora você seja, de longe, a maior delas (kkkk).
            </p>
            <p>
              Você nem imagina o tamanho da minha gratidão por te ter ao meu lado. Você não é só minha namorada; é minha melhor amiga, minha melhor companhia e a pessoa que eu faço questão de ter por perto, sempre.
            </p>
            <p>
              Sabe, MC, às vezes me pego sorrindo sozinho lembrando da gente. Esses seis meses foram a prova de que o destino acerta em cheio quando quer. Mesmo que a gente tenha demorado um pouco para finalmente ficarmos juntos, eu esperaria mais de uma década se fosse preciso para ter você aqui hoje. 
            </p>
            <p>
              Obrigado por ser essa mulher guerreira, que me apoia e me corrige quando eu estou errado (o que, convenhamos, não é raro kkkkk). Apesar de todos os meus defeitos, saiba que <strong>TODO DIA</strong> eu me inspiro em você para tentar ser um homem melhor. Quero te proteger e te amar de verdade, todos os dias.
            </p>
            <p>
              Obrigado por ser exatamente quem você é. Você é, de fato, a mulher que eu sempre pedi a Deus, só não esperava te encontrar tão cedo... e eu não poderia ser mais grato por isso. 
            </p>
          </div>

          <div className="pt-8 border-t border-[#4a0e1e]/10 text-right">
            <p className="text-sm opacity-60 uppercase tracking-widest mb-2 text-right">Com todo o meu amor,</p>
            <p className={`${playfair.className} text-2xl md:text-3xl italic`}>Eu te amo, Marrie Claire.</p>
            <p className="text-xs opacity-40 mt-1">Paulo Vitor</p>
          </div>
        </div>

        {/* --- NOVO PLAYER DE ÁUDIO LOCAL --- */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-[#4a0e1e]/10">
          <div className="flex items-center gap-2 mb-6 text-[#4a0e1e]">
            <Heart className="w-5 h-5 fill-current" />
            <h3 className="font-bold uppercase tracking-widest text-xs md:text-sm">
              Nossa Trilha Sonora
            </h3>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 md:p-10 border-2 border-dashed border-[#4a0e1e]/10 rounded-2xl bg-[#fdf5e6] group transition-colors hover:border-[#4a0e1e]/30">
            {/* Arquivo deve estar em public/audio/nossa-musica.mp3 */}
            <audio ref={audioRef} src="/audio/nossa-musica.mp3" loop />
            
            <button 
              onClick={toggleAudio}
              className="bg-[#4a0e1e] text-[#fdf5e6] p-5 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label={isPlaying ? "Pausar música" : "Tocar música"}
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
            </button>
            
            <div className="mt-4 text-center">
              <p className="text-[#4a0e1e] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                {isPlaying ? "Tocando agora..." : "Clique para ouvir nossa música"}
              </p>
              <p className="mt-2 text-[#4a0e1e]/40 text-[10px] italic">
                (Recomendado para ler a carta)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}