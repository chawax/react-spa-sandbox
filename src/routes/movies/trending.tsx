import { Loader } from "@/components";
import MoviesList from "@/components/MoviesList";
import { ErrorPage } from "@/pages/ErrorPage";
import { fetchMovies } from "@/services";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/movies/trending")({
  component: TrendingMoviesPage,
  loader: fetchMovies,
  pendingComponent: Loader,
  errorComponent: ErrorPage,
});

function TrendingMoviesPage() {
  const movies = Route.useLoaderData();
  return movies.length > 0 ? <MoviesList movies={movies} /> : <p>Aucun film</p>;
}
