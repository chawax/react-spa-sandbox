import { createFileRoute } from "@tanstack/react-router";
import { MovieDetailsPage } from "../../pages/MovieDetailsPage";
import { fetchOneMovie } from "../../services";
import { Loader } from "../../components";

export const Route = createFileRoute("/movies/$movieId")({
  component: MovieDetailsPage,
  loader: async ({ params: { movieId } }) => fetchOneMovie(movieId),
  pendingComponent: Loader,
});
