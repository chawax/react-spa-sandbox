import { useAuth } from "@/hooks/useAuth";
import { Link } from "@tanstack/react-router";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  search?: { query: string };
};

function NavLink({ to, children, search }: NavLinkProps) {
  const baseClasses = "mx-4 hover:text-gray-400 transition-all";
  const activeClasses = "text-lg font-bold text-gray-400";
  return (
    <Link
      to={to}
      search={search}
      className={baseClasses}
      activeProps={{ className: activeClasses }}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-black p-4 sticky top-0">
      <div className="flex text-white">
        <div className="mr-8">
          <Link to="/">
            <h1 className="text-3xl text-white font-bold">My Movies</h1>
          </Link>
        </div>

        <nav className="grow self-center">
          <NavLink to="/movies/trending">Tendance</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/movies/popular">Populaires</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/movies/search" search={{ query: "" }}>
            Recherche
          </NavLink>
          {isAuthenticated && (
            <>
              &nbsp;|&nbsp;
              <NavLink to="/profile/infos">Mon Profil</NavLink>
            </>
          )}
        </nav>

        <div className="flex-none self-center space-x-4">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Déconnexion
            </button>
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
