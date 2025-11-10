import { createFileRoute } from "@tanstack/react-router";

import ErrorComponent from "@/components/error-component/ErrorComponent";
import Loader from "@/components/loader/Loader";
import MoviesList from "@/components/movies-list/MoviesList";
import { fetchTrendingMovies } from "@/services/movies";

function TrendingMoviesPage() {
  const movies = Route.useLoaderData();
  return movies.length > 0 ? <MoviesList movies={movies} /> : <p>Aucun film</p>;
}

export const Route = createFileRoute("/movies/trending")({

  // Components
  component: TrendingMoviesPage,
  pendingComponent: Loader,
  errorComponent: ErrorComponent,

  // Data loading
  loader: fetchTrendingMovies,
  staleTime: 1000 * 60 * 5, // 5 minutes
});

