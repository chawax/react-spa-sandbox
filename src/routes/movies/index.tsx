import { createFileRoute } from "@tanstack/react-router";
import { MoviesListPage } from "../../pages/MoviesListPage";

export const Route = createFileRoute("/movies/")({
  component: MoviesListPage,
});
