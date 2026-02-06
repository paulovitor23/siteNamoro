import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Letter from '@/components/Letter'; // Importe o novo componente

export default function Home() {
  return (
    <main className="bg-[#4a0e1e] min-h-screen">
      <Hero />
      <div id="nossa-historia">
        <Timeline />
      </div>
      <Letter />
    </main>
  );
}