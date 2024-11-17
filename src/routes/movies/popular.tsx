import { createFileRoute } from "@tanstack/react-router";

import ErrorComponent from "@/components/ErrorComponent";
import Loader from "@/components/Loader";
import MoviesList from "@/components/MoviesList";
import { fetchPopularMovies } from "@/services/movies";

export const Route = createFileRoute("/movies/popular")({
  component: PopularMoviesPage,
  loader: fetchPopularMovies,
  pendingComponent: Loader,
  errorComponent: ErrorComponent,
});

function PopularMoviesPage() {
  const movies = Route.useLoaderData();
  return movies.length > 0 ? <MoviesList movies={movies} /> : <p>Aucun film</p>;
}
