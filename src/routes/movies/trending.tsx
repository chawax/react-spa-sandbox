import { createFileRoute } from "@tanstack/react-router";

import { Loader } from "@/components";
import MoviesList from "@/components/MoviesList";
import { ErrorPage } from "@/pages/ErrorPage";
import { fetchTrendingMovies } from "@/services";

export const Route = createFileRoute("/movies/trending")({
  component: TrendingMoviesPage,
  loader: fetchTrendingMovies,
  pendingComponent: Loader,
  errorComponent: ErrorPage,
});

function TrendingMoviesPage() {
  const movies = Route.useLoaderData();
  return movies.length > 0 ? <MoviesList movies={movies} /> : <p>Aucun film</p>;
}
