import { createFileRoute } from "@tanstack/react-router";
import { MoviesListPage } from "../../pages/MoviesListPage";
import { fetchMovies } from "../../services";

export const Route = createFileRoute("/movies/")({
  component: MoviesListPage,
  loader: fetchMovies,
});
