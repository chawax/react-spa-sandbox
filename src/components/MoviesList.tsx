import { MovieResume } from "@/types";
import { Link } from "@tanstack/react-router";
import MovieCard from "./MovieCard";

type MoviesListProps = {
  movies: MovieResume[];
};

export default function MoviesList({ movies }: MoviesListProps) {
  return (
    <section className="flex flex-row flex-wrap justify-between">
      {movies.map((movie) => {
        return (
          <Link
            to={`/movies/$movieId`}
            params={{ movieId: movie.id }}
            key={movie.id}
            className="w-full sm:basis-1/4 sm:w-20"
          >
            <MovieCard movie={movie} />
          </Link>
        );
      })}
    </section>
  );
}
