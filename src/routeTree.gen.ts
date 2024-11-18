/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as MoviesTrendingImport } from './routes/movies/trending'
import { Route as MoviesSearchImport } from './routes/movies/search'
import { Route as MoviesPopularImport } from './routes/movies/popular'
import { Route as MoviesMovieIdImport } from './routes/movies/$movieId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const MoviesTrendingRoute = MoviesTrendingImport.update({
  id: '/movies/trending',
  path: '/movies/trending',
  getParentRoute: () => rootRoute,
} as any)

const MoviesSearchRoute = MoviesSearchImport.update({
  id: '/movies/search',
  path: '/movies/search',
  getParentRoute: () => rootRoute,
} as any)

const MoviesPopularRoute = MoviesPopularImport.update({
  id: '/movies/popular',
  path: '/movies/popular',
  getParentRoute: () => rootRoute,
} as any)

const MoviesMovieIdRoute = MoviesMovieIdImport.update({
  id: '/movies/$movieId',
  path: '/movies/$movieId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/movies/$movieId': {
      id: '/movies/$movieId'
      path: '/movies/$movieId'
      fullPath: '/movies/$movieId'
      preLoaderRoute: typeof MoviesMovieIdImport
      parentRoute: typeof rootRoute
    }
    '/movies/popular': {
      id: '/movies/popular'
      path: '/movies/popular'
      fullPath: '/movies/popular'
      preLoaderRoute: typeof MoviesPopularImport
      parentRoute: typeof rootRoute
    }
    '/movies/search': {
      id: '/movies/search'
      path: '/movies/search'
      fullPath: '/movies/search'
      preLoaderRoute: typeof MoviesSearchImport
      parentRoute: typeof rootRoute
    }
    '/movies/trending': {
      id: '/movies/trending'
      path: '/movies/trending'
      fullPath: '/movies/trending'
      preLoaderRoute: typeof MoviesTrendingImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/movies/$movieId': typeof MoviesMovieIdRoute
  '/movies/popular': typeof MoviesPopularRoute
  '/movies/search': typeof MoviesSearchRoute
  '/movies/trending': typeof MoviesTrendingRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/movies/$movieId': typeof MoviesMovieIdRoute
  '/movies/popular': typeof MoviesPopularRoute
  '/movies/search': typeof MoviesSearchRoute
  '/movies/trending': typeof MoviesTrendingRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/movies/$movieId': typeof MoviesMovieIdRoute
  '/movies/popular': typeof MoviesPopularRoute
  '/movies/search': typeof MoviesSearchRoute
  '/movies/trending': typeof MoviesTrendingRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/movies/$movieId'
    | '/movies/popular'
    | '/movies/search'
    | '/movies/trending'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/movies/$movieId'
    | '/movies/popular'
    | '/movies/search'
    | '/movies/trending'
  id:
    | '__root__'
    | '/'
    | '/movies/$movieId'
    | '/movies/popular'
    | '/movies/search'
    | '/movies/trending'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MoviesMovieIdRoute: typeof MoviesMovieIdRoute
  MoviesPopularRoute: typeof MoviesPopularRoute
  MoviesSearchRoute: typeof MoviesSearchRoute
  MoviesTrendingRoute: typeof MoviesTrendingRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MoviesMovieIdRoute: MoviesMovieIdRoute,
  MoviesPopularRoute: MoviesPopularRoute,
  MoviesSearchRoute: MoviesSearchRoute,
  MoviesTrendingRoute: MoviesTrendingRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/movies/$movieId",
        "/movies/popular",
        "/movies/search",
        "/movies/trending"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/movies/$movieId": {
      "filePath": "movies/$movieId.tsx"
    },
    "/movies/popular": {
      "filePath": "movies/popular.tsx"
    },
    "/movies/search": {
      "filePath": "movies/search.tsx"
    },
    "/movies/trending": {
      "filePath": "movies/trending.tsx"
    }
  }
}
ROUTE_MANIFEST_END */