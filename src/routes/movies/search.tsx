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
  loader: ({ deps }) => searchMovies(deps.query),
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

  return (
    <>
      <div className="container">
        <input type="text" value={query} onChange={handleChange} />
        <input type="button" value="Rechercher" onClick={handleSearch} />
      </div>
      {query !== "" && movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <p>Aucun film trouvé !</p>
      )}
    </>
  );
}
