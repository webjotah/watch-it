export const usePopularMovies = () => {
  const handleGetPopularMovies = async (page: number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?language=pt-BR&page=${page}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  return { handleGetPopularMovies };
};
