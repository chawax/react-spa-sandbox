import { createFileRoute } from "@tanstack/react-router";

import ErrorComponent from "@/components/ErrorComponent";
import Loader from "@/components/Loader";
import MoviesList from "@/components/MoviesList";
import { fetchTrendingMovies } from "@/services/movies";

export const Route = createFileRoute("/movies/trending")({

  // Components
  component: TrendingMoviesPage,
  pendingComponent: Loader,
  errorComponent: ErrorComponent,

  // Data loading
  loader: fetchTrendingMovies,
  staleTime: 1000 * 60 * 5, // 5 minutes
});

function TrendingMoviesPage() {
  const movies = Route.useLoaderData();
  return movies.length > 0 ? <MoviesList movies={movies} /> : <p>Aucun film</p>;
}
