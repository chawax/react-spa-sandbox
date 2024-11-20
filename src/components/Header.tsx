import { Link } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-black p-4 sticky top-0">
      <div className="flex">
        <div className="mr-8">
          <Link to="/">
            <h1 className="text-3xl text-white font-bold">My Movies</h1>
          </Link>
        </div>

        <nav className="grow text-white self-center">
          <Link to="/movies/trending" className="hover:text-gray-400 mx-4">
            Tendance
          </Link>
          &nbsp;|&nbsp;
          <Link to="/movies/popular" className="hover:text-gray-400 mx-4">
            Populaires
          </Link>
          &nbsp;|&nbsp;
          <Link
            to="/movies/search"
            search={{ query: "" }}
            className="hover:text-gray-400 mx-4"
          >
            Recherche
          </Link>
        </nav>

        <div className="flex-none self-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="text-white hover:text-gray-400">
                Mon Profil
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <Link
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              to="/login"
            >
              Connexion
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
