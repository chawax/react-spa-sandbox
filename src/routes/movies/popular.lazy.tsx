import { createLazyFileRoute } from '@tanstack/react-router'

import ErrorComponent from '@/components/ErrorComponent'
import Loader from '@/components/Loader'
import MoviesList from '@/components/MoviesList'

export const Route = createLazyFileRoute('/movies/popular')({
  component: PopularMoviesPage,
  pendingComponent: Loader,
  errorComponent: ErrorComponent,
})

function PopularMoviesPage() {
  const movies = Route.useLoaderData()
  return movies.length > 0 ? <MoviesList movies={movies} /> : <p>Aucun film</p>
}
