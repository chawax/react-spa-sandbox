export type MovieResume = {
  id: string;
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  posterPath: string;
};

export type MovieDetails = MovieResume & {
  genres: Array<string>;
  originalTitle: string;
  tagline: string;
  actors: Array<Actor>;
};

export type Actor = {
  id: string;
  name: string;
  profilePath: string;
};
