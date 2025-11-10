import { createLazyFileRoute } from '@tanstack/react-router'

import ErrorComponent from '@/components/error-component/ErrorComponent'
import Loader from '@/components/loader/Loader'
import MoviesList from '@/components/movies-list/MoviesList'

function PopularMoviesPage() {
  const movies = Route.useLoaderData()
  return movies.length > 0 ? <MoviesList movies={movies} /> : <p>Aucun film</p>
}

export const Route = createLazyFileRoute('/movies/popular')({
  component: PopularMoviesPage,
  pendingComponent: Loader,
  errorComponent: ErrorComponent,
})
