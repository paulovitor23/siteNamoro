'use client';

import { useState, useEffect } from 'react';
import { Playfair_Display } from 'next/font/google';
import { Heart, ChevronDown } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Hero() {
  const startDate = new Date('2025-08-08T00:00:00'); 
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

  const scrollToContent = () => {
    document.getElementById('nossa-historia')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-[100dvh] bg-[#4a0e1e] flex flex-col items-center justify-center text-[#fdf5e6] p-6 relative overflow-hidden">
      
      {/* --- CAMADA DE POLAROIDS (Background) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-50">
        
        {/* Polaroid 1 - Superior Esquerda */}
        <div className="absolute top-10 -left-4 md:top-20 md:left-20 rotate-[-12deg] w-32 md:w-48 bg-[#fdf5e6] p-2 pb-8 shadow-2xl transition-transform hover:scale-110 hover:z-50 duration-500">
          <img src="/images/hero/01.jpg" alt="Nós" className="w-full h-32 md:h-48 object-cover grayscale-[30%]" />
        </div>

        {/* Polaroid 2 - Inferior Esquerda */}
        <div className="absolute bottom-20 left-4 md:bottom-32 md:left-40 rotate-[8deg] w-28 md:w-44 bg-[#fdf5e6] p-2 pb-6 shadow-2xl">
          <img src="/images/hero/02.jpg" alt="Nós" className="w-full h-28 md:h-44 object-cover grayscale-[30%]" />
        </div>

        {/* Polaroid 3 - Superior Direita */}
        <div className="absolute top-16 -right-6 md:top-24 md:right-32 rotate-[15deg] w-32 md:w-52 bg-[#fdf5e6] p-2 pb-10 shadow-2xl">
          <img src="/images/hero/03.jpg" alt="Nós" className="w-full h-32 md:h-52 object-cover grayscale-[30%]" />
        </div>

        {/* Polaroid 4 - Inferior Direita */}
        <div className="absolute bottom-10 right-0 md:bottom-20 md:right-20 rotate-[-10deg] w-30 md:w-48 bg-[#fdf5e6] p-2 pb-8 shadow-2xl">
          <img src="/images/hero/04.jpg" alt="Nós" className="w-full h-30 md:h-48 object-cover grayscale-[30%]" />
        </div>

      </div>

      {/* --- CONTEÚDO PRINCIPAL (Contador) --- */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className={`${playfair.className} text-2xl md:text-4xl mb-12 md:mb-16 opacity-90 italic`}>
          Nossos 6 Meses — PV + MC
        </h2>

        <div className={`${playfair.className} flex flex-col items-center space-y-4`}>
          <div className="text-3xl md:text-6xl flex flex-wrap justify-center gap-x-4 gap-y-2 leading-tight">
            <span className="whitespace-nowrap drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">{timeLeft.days} Dias,</span>
            <span className="whitespace-nowrap drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">{timeLeft.hours} Horas,</span>
            <span className="whitespace-nowrap drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">{timeLeft.minutes} Minutos,</span>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span className="font-bold text-[#fffaf0] drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
                {timeLeft.seconds} Segundos
              </span>
              <Heart className="fill-current w-6 h-6 md:w-10 md:h-10 animate-pulse text-[#fdf5e6]" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center space-y-12 md:space-y-16"> 
          <p className="text-base md:text-xl opacity-80 tracking-widest font-light bg-[#4a0e1e]/60 px-4 py-2 rounded-full backdrop-blur-sm">
            Desde o dia zero...
          </p>
          
          <button onClick={scrollToContent} className="group flex flex-col items-center transition-all duration-300 hover:scale-110 active:scale-95">
            <span className="text-xs uppercase tracking-[0.3em] mb-4 opacity-60">Ver nossa história</span>
            <div className="p-3 border border-[#fdf5e6]/20 rounded-full group-hover:border-[#fdf5e6]/50 transition-colors">
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}