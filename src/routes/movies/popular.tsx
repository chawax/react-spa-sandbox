import { createFileRoute } from '@tanstack/react-router'

import { fetchPopularMovies } from '@/services/movies'

export const Route = createFileRoute('/movies/popular')({
  loader: fetchPopularMovies,
})
