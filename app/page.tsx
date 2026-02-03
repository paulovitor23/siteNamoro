'use client';

import { useState, useEffect } from 'react';
import { Playfair_Display } from 'next/font/google';
import { Heart, ChevronDown } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function RomanticLanding() {
  const startDate = new Date('2025-08-08T00:00:00'); 
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  // Função para scroll suave
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <main className="h-screen bg-[#4a0e1e] flex flex-col items-center justify-center text-[#fdf5e6] p-6 relative overflow-hidden">
        {/* Título Superior */}
        <h2 className={`${playfair.className} text-3xl md:text-4xl mb-16 opacity-90 italic`}>
          Nossos 6 Meses
        </h2>

        {/* Contador Central */}
        <div className={`${playfair.className} flex flex-col items-center text-center space-y-4`}>
          <div className="text-4xl md:text-6xl flex flex-wrap justify-center gap-x-4 gap-y-2 leading-tight">
            <span className="drop-shadow-[0_0_15px_rgba(253,245,230,0.3)]">
              {timeLeft.days} Dias,
            </span>
            <span className="drop-shadow-[0_0_15px_rgba(253,245,230,0.3)]">
              {timeLeft.hours} Horas,
            </span>
            <span className="drop-shadow-[0_0_15px_rgba(253,245,230,0.3)]">
              {timeLeft.minutes} Minutos,
            </span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#fffaf0] drop-shadow-[0_0_20px_rgba(253,245,230,0.5)]">
                {timeLeft.seconds} Segundos
              </span>
              <Heart className="fill-current w-8 h-8 md:w-10 md:h-10 animate-pulse text-[#fdf5e6]" />
            </div>
          </div>
        </div>

        {/* Frase e Botão - Espaçamento aumentado */}
        <div className="mt-16 flex flex-col items-center space-y-16"> 
          <p className="text-lg md:text-xl opacity-80 tracking-widest font-light">
            Desde o dia zero...
          </p>
          
          <button 
            onClick={scrollToContent}
            className="group flex flex-col items-center transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <span className="text-sm uppercase tracking-[0.3em] mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
              Ver nossa história
            </span>
            <div className="p-3 border border-[#fdf5e6]/20 rounded-full group-hover:border-[#fdf5e6]/50 transition-colors">
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </button>
        </div>
      </main>

      {/* Seção de Exemplo (Onde o scroll vai parar) */}
      <section className="min-h-screen bg-[#3d0b19] flex items-center justify-center text-[#fdf5e6]">
        <h2 className={`${playfair.className} text-4xl`}>A próxima parte começa aqui...</h2>
      </section>
    </>
  );
}