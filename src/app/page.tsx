'use client';

import { usePopularMovies } from '@/hooks/popular-movies.hook';
import { Movie } from '@/types/movie';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const { handleGetPopularMovies } = usePopularMovies();
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleGetPopularMovies(page).then((data) => {
      setPopularMovies(data.results);
    });
  }, [page]);

  return (
    <div className="bg-zinc-950">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {popularMovies.map((movie) => (
          <div key={movie.id} className="flex flex-col gap-4 items-center">
            <Image
              className="w-full h-auto rounded-lg shadow-md"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
            />
            <h2 className="text-lg font-bold text-zinc-50">{movie.title}</h2>
          </div>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          className="absolute left-1/2 border bg-white"
        >
          Increase
        </button>
      </main>
    </div>
  );
}
