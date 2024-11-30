/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileSettingsImport } from './routes/profile.settings'
import { Route as ProfileMessagesImport } from './routes/profile.messages'
import { Route as ProfileInfosImport } from './routes/profile.infos'
import { Route as MoviesTrendingImport } from './routes/movies/trending'
import { Route as MoviesSearchImport } from './routes/movies/search'
import { Route as MoviesPopularImport } from './routes/movies/popular'
import { Route as MoviesMovieIdImport } from './routes/movies/$movieId'

// Create/Update Routes

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileSettingsRoute = ProfileSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => ProfileRoute,
} as any)

const ProfileMessagesRoute = ProfileMessagesImport.update({
  id: '/messages',
  path: '/messages',
  getParentRoute: () => ProfileRoute,
} as any)

const ProfileInfosRoute = ProfileInfosImport.update({
  id: '/infos',
  path: '/infos',
  getParentRoute: () => ProfileRoute,
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
} as any).lazy(() =>
  import('./routes/movies/popular.lazy').then((d) => d.Route),
)

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
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
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
    '/profile/infos': {
      id: '/profile/infos'
      path: '/infos'
      fullPath: '/profile/infos'
      preLoaderRoute: typeof ProfileInfosImport
      parentRoute: typeof ProfileImport
    }
    '/profile/messages': {
      id: '/profile/messages'
      path: '/messages'
      fullPath: '/profile/messages'
      preLoaderRoute: typeof ProfileMessagesImport
      parentRoute: typeof ProfileImport
    }
    '/profile/settings': {
      id: '/profile/settings'
      path: '/settings'
      fullPath: '/profile/settings'
      preLoaderRoute: typeof ProfileSettingsImport
      parentRoute: typeof ProfileImport
    }
  }
}

// Create and export the route tree

interface ProfileRouteChildren {
  ProfileInfosRoute: typeof ProfileInfosRoute
  ProfileMessagesRoute: typeof ProfileMessagesRoute
  ProfileSettingsRoute: typeof ProfileSettingsRoute
}

const ProfileRouteChildren: ProfileRouteChildren = {
  ProfileInfosRoute: ProfileInfosRoute,
  ProfileMessagesRoute: ProfileMessagesRoute,
  ProfileSettingsRoute: ProfileSettingsRoute,
}

const ProfileRouteWithChildren =
  ProfileRoute._addFileChildren(ProfileRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRouteWithChildren
  '/movies/$movieId': typeof MoviesMovieIdRoute
  '/movies/popular': typeof MoviesPopularRoute
  '/movies/search': typeof MoviesSearchRoute
  '/movies/trending': typeof MoviesTrendingRoute
  '/profile/infos': typeof ProfileInfosRoute
  '/profile/messages': typeof ProfileMessagesRoute
  '/profile/settings': typeof ProfileSettingsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRouteWithChildren
  '/movies/$movieId': typeof MoviesMovieIdRoute
  '/movies/popular': typeof MoviesPopularRoute
  '/movies/search': typeof MoviesSearchRoute
  '/movies/trending': typeof MoviesTrendingRoute
  '/profile/infos': typeof ProfileInfosRoute
  '/profile/messages': typeof ProfileMessagesRoute
  '/profile/settings': typeof ProfileSettingsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRouteWithChildren
  '/movies/$movieId': typeof MoviesMovieIdRoute
  '/movies/popular': typeof MoviesPopularRoute
  '/movies/search': typeof MoviesSearchRoute
  '/movies/trending': typeof MoviesTrendingRoute
  '/profile/infos': typeof ProfileInfosRoute
  '/profile/messages': typeof ProfileMessagesRoute
  '/profile/settings': typeof ProfileSettingsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/profile'
    | '/movies/$movieId'
    | '/movies/popular'
    | '/movies/search'
    | '/movies/trending'
    | '/profile/infos'
    | '/profile/messages'
    | '/profile/settings'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/profile'
    | '/movies/$movieId'
    | '/movies/popular'
    | '/movies/search'
    | '/movies/trending'
    | '/profile/infos'
    | '/profile/messages'
    | '/profile/settings'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/profile'
    | '/movies/$movieId'
    | '/movies/popular'
    | '/movies/search'
    | '/movies/trending'
    | '/profile/infos'
    | '/profile/messages'
    | '/profile/settings'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRoute
  ProfileRoute: typeof ProfileRouteWithChildren
  MoviesMovieIdRoute: typeof MoviesMovieIdRoute
  MoviesPopularRoute: typeof MoviesPopularRoute
  MoviesSearchRoute: typeof MoviesSearchRoute
  MoviesTrendingRoute: typeof MoviesTrendingRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  ProfileRoute: ProfileRouteWithChildren,
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
        "/login",
        "/profile",
        "/movies/$movieId",
        "/movies/popular",
        "/movies/search",
        "/movies/trending"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx",
      "children": [
        "/profile/infos",
        "/profile/messages",
        "/profile/settings"
      ]
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
    },
    "/profile/infos": {
      "filePath": "profile.infos.tsx",
      "parent": "/profile"
    },
    "/profile/messages": {
      "filePath": "profile.messages.tsx",
      "parent": "/profile"
    },
    "/profile/settings": {
      "filePath": "profile.settings.tsx",
      "parent": "/profile"
    }
  }
}
ROUTE_MANIFEST_END */
