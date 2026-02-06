'use client';

import { Playfair_Display } from 'next/font/google';
import { Heart } from 'lucide-react';
import { timelineEvents } from '@/data/timeline';
import Link from 'next/link'; 

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Timeline() {
  return (
    <section id="nossa-historia" className="bg-[#3d0b19] py-20 px-4 md:px-6 min-h-screen">
      <div className="max-w-5xl mx-auto relative">
        
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-[#fdf5e6]/20" />

        <div className="space-y-12 md:space-y-32">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full">
              
              <div className={`
                w-full md:w-[42%] pl-10 md:pl-0 
                ${index % 2 !== 0 ? 'md:order-last md:text-left md:pl-8' : 'md:text-right md:pr-8'}
                mb-2 md:mb-0
              `}>
                <div className="bg-[#fdf5e6] text-[#4a0e1e] inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-1 md:mb-2 shadow-md">
                  {event.label}
                </div>
                <p className="text-[#fdf5e6]/60 text-xs md:text-sm tracking-widest block uppercase font-medium">
                  {event.date}
                </p>
              </div>

              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 md:w-4 md:h-4 bg-[#fdf5e6] rounded-full border-[3px] md:border-4 border-[#3d0b19] z-10 shadow-[0_0_10px_rgba(253,245,230,0.4)]" />

              <div className={`
                w-full md:w-[42%] pl-10 md:pl-0
                ${index % 2 !== 0 ? 'md:order-first md:text-right' : 'md:pl-8'}
              `}>
                <div className="group bg-[#4a0e1e]/40 border border-[#fdf5e6]/10 p-4 md:p-6 rounded-2xl hover:border-[#fdf5e6]/30 transition-all duration-500 shadow-xl backdrop-blur-sm">
                  
                  <Link href={`/momentos/${event.id}`}>
                    <div className="aspect-video mb-4 overflow-hidden rounded-xl bg-black/40 border border-[#fdf5e6]/5 cursor-pointer relative group/img">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover grayscale-[20%] group-hover/img:grayscale-0 transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                        <span className="text-[10px] uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Ver Detalhes</span>
                      </div>
                    </div>
                  </Link>
                  
                  <h3 className={`${playfair.className} text-lg md:text-2xl text-[#fdf5e6] mb-2 leading-tight`}>
                    {event.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-[#fdf5e6]/70 leading-relaxed italic font-light">
                    "{event.description}"
                  </p>

                  <div className="mt-4 flex md:hidden items-center gap-2 text-[#fdf5e6]/40">
                    <Heart className="w-3 h-3 fill-current" />
                    <span className="text-[10px] uppercase tracking-tighter">Nosso Momento</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}