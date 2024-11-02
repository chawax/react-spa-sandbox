import { Link } from "@tanstack/react-router";
import { MovieCard } from "../../components";
import { Route } from "../../routes/movies";

export default function MoviesListPage() {
  const movies = Route.useLoaderData();

  return movies.length > 0 ? (
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
  ) : (
    <p>Aucun film</p>
  );
}
