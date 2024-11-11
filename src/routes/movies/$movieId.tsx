import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components";
import { ErrorPage } from "@/pages/ErrorPage";
import { MovieDetailsPage } from "@/pages/MovieDetailsPage";
import { fetchOneMovie } from "@/services";

export const Route = createFileRoute("/movies/$movieId")({
  component: MovieDetailsPage,
  loader: async ({ params: { movieId } }) => fetchOneMovie(movieId),
  pendingComponent: Loader,
  errorComponent: ErrorPage,
});
