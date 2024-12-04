import { createFileRoute } from "@tanstack/react-router";

import { fetchPopularMovies } from "@/services/movies";

export const Route = createFileRoute("/movies/popular")({
  loader: fetchPopularMovies,
  staleTime: 1000 * 60 * 5, // 5 minutes
});
