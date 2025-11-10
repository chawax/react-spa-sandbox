import { createFileRoute } from "@tanstack/react-router";
import { format, parse } from "date-fns";

import ActorsList from "@/components/actors-list/ActorsList";
import ErrorComponent from "@/components/error-component/ErrorComponent";
import FavoriteButton from "@/components/favorite-button/FavoriteButton";
import Loader from "@/components/loader/Loader";
import { fetchOneMovie } from "@/services/movies";

const voteFormatter = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 1,
});

function MovieDetailsPage() {
  const movie = Route.useLoaderData();

  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;
  const formattedReleaseDate = format(
    parse(movie.releaseDate, "yyyy-MM-dd", new Date()),
    "dd/MM/yyyy",
  );
  const formattedVote = voteFormatter.format(movie.voteAverage);

  return (
    <article className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">{movie.title}</h2>
      <p className="text-md italic">{movie.tagline}</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <img
          src={imgUrl}
          alt={movie.title}
          width={500}
          className="rounded w-fit sm:basis-1/4 sm:w-[100px]"
        />

        <div className="flex flex-col gap-4 sm:basis-3/4 sm:ml-4">
          <FavoriteButton id={movie.id} />
          <p className="text-md">{movie.overview}</p>
          {movie.genres ? (
            <ul className="list-none">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-sm text-white text-center bg-stone-500 py-2 px-4 rounded-xl mr-1 mb-1 inline-block"
                >
                  {genre}
                </span>
              ))}
            </ul>
          ) : null}
          <p className="text-sm">
            Sortie le <span className="font-bold">{formattedReleaseDate}</span>
          </p>
          <p className="text-sm">
            Note : <span className="font-bold">{formattedVote}</span>
          </p>
          {movie.actors ? <ActorsList actors={movie.actors} /> : null}
        </div>
      </div>
    </article>
  );
}

export const Route = createFileRoute("/movies/$movieId")({
  // Loader function
  loader: async ({ params: { movieId } }) => fetchOneMovie(movieId),

  // Components
  component: MovieDetailsPage,
  pendingComponent: Loader,
  errorComponent: ErrorComponent,
});
