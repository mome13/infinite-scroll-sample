import { fetchAnime } from './action';
import AnimeCard, { AnimeProp } from '@/components/AnimeCard';
import Image from 'next/image';

export default async function Home() {
  const data = await fetchAnime(1);
  return (
    <>
      <main className='sm:p-16 py-16 px-8 flex flex-col gap-10 bg-[#0F1117]'>
        <h1 className='text-white text-3xl font-semibold'>Explore Anime</h1>

        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
          {data.map((item: AnimeProp, index: number) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
        </section>
      </main>
    </>
  );
}
