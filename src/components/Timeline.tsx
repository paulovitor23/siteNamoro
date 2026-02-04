// src/components/Timeline.tsx
import { Playfair_Display } from 'next/font/google';
import { Heart } from 'lucide-react';
// Importação dos dados e da Tipagem (Boa prática de Engenheiro!)
import { timelineEvents } from '@/data/timeline'; 

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Timeline() {
  return (
    <section id="timeline" className="bg-[#3d0b19] py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto relative">
        
        {/* Linha Central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#fdf5e6]/20" />

        <div className="space-y-32">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-center justify-between w-full">
              
              {/* Lado da Data/Label */}
              <div className={`w-[42%] text-right pr-8 ${index % 2 !== 0 ? 'md:order-last md:text-left md:pl-8 md:pr-0' : ''}`}>
                <div className="bg-[#fdf5e6] text-[#4a0e1e] inline-block px-4 py-1 rounded-full text-xs font-bold mb-2">
                  {event.label}
                </div>
                <p className="text-[#fdf5e6]/60 text-sm tracking-widest">{event.date}</p>
              </div>

              {/* Ponto na Linha */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#fdf5e6] rounded-full border-4 border-[#3d0b19] z-10 shadow-[0_0_10px_rgba(253,245,230,0.5)]" />

              {/* Lado do Card */}
              <div className={`w-[42%] ${index % 2 !== 0 ? 'md:order-first md:text-right' : 'pl-8'}`}>
                <div className="group bg-[#4a0e1e]/30 border border-[#fdf5e6]/10 p-5 rounded-2xl hover:border-[#fdf5e6]/40 transition-all duration-500 shadow-xl">
                  <div className="aspect-video mb-4 overflow-hidden rounded-xl bg-black/20">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className={`${playfair.className} text-xl text-[#fdf5e6] mb-2`}>{event.title}</h3>
                  <p className="text-sm text-[#fdf5e6]/70 leading-relaxed italic">"{event.description}"</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}