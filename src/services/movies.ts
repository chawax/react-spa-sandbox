import { MovieDetails, MovieResume } from "@/types";

const getHeaders = (): HeadersInit => {
  const key = import.meta.env.VITE_API_KEY;
  if (!key) {
    throw new Error("No API key configured on server !");
  }
  return {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  };
};

export const fetchOneMovie = async (id: string): Promise<MovieDetails> => {
  // We load queries to get details and credits

  const detailsUrl = `${
    import.meta.env.VITE_API_URL
  }/movie/${id}?language=fr-FR`;

  const creditsUrl = `${
    import.meta.env.VITE_API_URL
  }/movie/${id}/credits?language=fr-FR`;

  console.log(`Fetching ${detailsUrl} ...`);
  console.log(`Fetching ${creditsUrl} ...`);
  const promises = [
    fetch(detailsUrl, {
      headers: getHeaders(),
    }),
    fetch(creditsUrl, {
      headers: getHeaders(),
    }),
  ];
  const responses = await Promise.all(promises);

  if (!responses[0].ok || !responses[1].ok) {
    throw new Error(`Failed to fetch details for movie ${id}`);
  }

  const details = await responses[0].json();
  const credits = await responses[1].json();

  return {
    id: details.id,
    title: details.title,
    overview: details.overview,
    releaseDate: details.release_date,
    voteAverage: details.vote_average,
    posterPath: details.poster_path,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    genres: details.genres.map((genre: any) => genre.name),
    originalTitle: details.original_title,
    tagline: details.tagline,
    actors: credits.cast
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((c: any) => c.known_for_department === "Acting")
      .slice(0, 10)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((a: any) => ({
        id: a.id,
        name: a.name,
        profilePath: a.profile_path,
      })),
  };
};

export const fetchTrendingMovies = async (): Promise<Array<MovieResume>> => {
  const url = `${
    import.meta.env.VITE_API_URL
  }/trending/movie/week?language=fr-FR`;
  console.log(`Fetching ${url} ...`);
  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies data");
  }
  const { results } = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return results.map((result: any) => ({
    id: result.id,
    title: result.title,
    overview: result.overview,
    releaseDate: result.release_date,
    popularity: result.popularity,
    voteAverage: result.vote_average,
    posterPath: result.poster_path,
  }));
};

export const fetchPopularMovies = async (): Promise<Array<MovieResume>> => {
  const url = `${import.meta.env.VITE_API_URL}/movie/popular?language=fr-FR`;
  console.log(`Fetching ${url} ...`);
  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies data");
  }
  const { results } = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return results.map((result: any) => ({
    id: result.id,
    title: result.title,
    overview: result.overview,
    releaseDate: result.release_date,
    popularity: result.popularity,
    voteAverage: result.vote_average,
    posterPath: result.poster_path,
  }));
};

export const searchMovies = async (
  query: string,
): Promise<Array<MovieResume>> => {
  const url = `${import.meta.env.VITE_API_URL}/search/movie?language=fr-FR&query=${query}`;
  console.log(`Fetching ${url} ...`);
  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }
  const { results } = await response.json();
  return (
    results
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // .filter((movie: any) => {
      //   // We remove movies with no release date
      //   return movie.release_date !== "";
      // })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((result: any) => {
        return {
          id: result.id,
          title: result.title,
          overview: result.overview,
          releaseDate: result.release_date,
          popularity: result.popularity,
          voteAverage: result.vote_average,
          posterPath: result.poster_path,
        };
      })
  );
};
