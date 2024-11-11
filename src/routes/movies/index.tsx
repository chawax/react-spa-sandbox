import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components";
import { ErrorPage } from "@/pages/ErrorPage";
import { MoviesListPage } from "@/pages/MoviesListPage";
import { fetchMovies } from "@/services";

export const Route = createFileRoute("/movies/")({
  component: MoviesListPage,
  loader: fetchMovies,
  pendingComponent: Loader,
  errorComponent: ErrorPage,
});
