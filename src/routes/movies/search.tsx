import {
  createFileRoute,
  ErrorComponent,
  useNavigate,
} from "@tanstack/react-router";
import { useState } from "react";

import Loader from "@/components/Loader";
import MoviesList from "@/components/MoviesList";
import { searchMovies } from "@/services/movies";

type MoviesFilters = {
  query: string;
};

export const Route = createFileRoute("/movies/search")({
  component: SearchMoviesPage,
  validateSearch: (search: Record<string, unknown>): MoviesFilters => {
    return {
      query: search.query as string,
    };
  },
  loaderDeps: ({ search: { query } }) => ({ query }),
  loader: ({ deps }) =>
    deps.query !== undefined ? searchMovies(deps.query) : [],
  pendingComponent: Loader,
  errorComponent: ErrorComponent,
});

function SearchMoviesPage() {
  const movies = Route.useLoaderData();
  const navigate = useNavigate({ from: Route.fullPath });
  const { query } = Route.useSearch();

  const [searchString, setSearchString] = useState(query);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const handleSearch = () => {
    navigate({ search: { query: searchString } });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
          <input
            type="text"
            value={searchString}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-96"
            placeholder="Rechercher un film..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Rechercher
          </button>
        </form>
      </div>
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <p>Aucun film trouvé !</p>
      )}
    </>
  );
}
