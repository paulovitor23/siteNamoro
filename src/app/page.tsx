import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="bg-[#4a0e1e] min-h-screen">
      {/* A Hero agora contém toda a lógica do contador e o botão de scroll */}
      <Hero />

      {/* A Timeline exibe a história baseada nos dados de data/timeline.ts */}
      <div id="nossa-historia">
        <Timeline />
      </div>
    </main>
  );
}