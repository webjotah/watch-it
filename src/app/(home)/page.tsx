'use client';

import { usePopularMovies } from '@/hooks/popular-movies.hook';
import { Movie } from '@/types/movie';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TvMinimalPlay, Search, Popcorn, Film } from 'lucide-react';
import Link from 'next/link';
import '@/app/globals.css';

export default function Home() {
  const { handleGetPopularMovies } = usePopularMovies();
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [heroMovies, setHeroMovies] = useState<Movie[]>([]);

  useEffect(() => {
    handleGetPopularMovies(page).then((data) => {
      setPopularMovies(data.results);
      if (page === 1) {
        setHeroMovies(data.results.slice(0, 2));
      }
    });
  }, [page]);

  return (
    <div className="min-h-screen max-w-[90%] mx-auto">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header className="flex pt-3 justify-between items-center w-full">
          <div className="flex gap-3 items-center text-sky-500">
            <TvMinimalPlay size={48} />
            <h1 className="font-semibold text-3xl">WatchIT!</h1>
          </div>
          <div className="flex gap-3 items-center">
            <Link
              href={`/Home`}
              className="px-3 py-1 rounded-lg transition-all hover:bg-sky-700 text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              href={`/genres`}
              className="px-3 py-1 rounded-lg transition-all hover:bg-sky-700 text-lg font-semibold"
            >
              Gênero
            </Link>
            <Link
              href={`/search`}
              className="p-1 rounded-lg transition-all hover:bg-sky-700"
            >
              <Search size={25} />
            </Link>
          </div>
        </header>

        <section className="flex h-[90vh] items-center gap-5">
          {/* divs que preenchem o fundo */}
          <Popcorn
            className="absolute top-1/4 left-1/3 svg-bg rotate-12"
            size={60}
          />
          <Film
            className="absolute bottom-[15%] left-28 svg-bg-film -rotate-12"
            size={78}
          />
          <div className="absolute top-28 left-0 blue-glowing-circle" />
          <div className="absolute bottom-5 left-1/3 blue-glowing-circle" />
          <div className="absolute top-1/2 -right-10 blue-glowing-circle" />
          {/* -- */}
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-semibold flex flex-col">
              ENCONTRE SEUS
              <span className="text-[5.2rem] bg-linear-to-r from-sky-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent font-semibold">
                FILMES FAVORITOS
              </span>
            </h1>
            <p className="text-xl font-normal w-2/3">
              {' '}
              Explore uma vasta coleção de filmes populares e descubra novos
              favoritos! Encontre filmes por gênero e fique por dentro dos
              lançamentos mais recentes.
            </p>
          </div>
          <div className="bg-red-300 w-1/2 relative flex items-center justify-center">
            <div className="w-full">
              {heroMovies.map((movie, i) =>
                i == 0 ? (
                  <div
                    key={movie.id}
                    className="absolute -bottom-64 z-10 left-0 shadow-2xl shadow-sky-900"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={350}
                      height={550}
                      draggable={false}
                    />
                  </div>
                ) : (
                  <div
                    key={movie.id}
                    className="absolute -bottom-32 -right-16 shadow-2xl shadow-sky-900"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={350}
                      height={550}
                      draggable={false}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
