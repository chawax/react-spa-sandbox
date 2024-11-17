import { Link } from "@tanstack/react-router";

export default function Header() {
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
          <Link to="/movies/search" className="hover:text-gray-400 mx-4">
            Recherche
          </Link>
        </nav>

        {/* <div className="flex-none">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Connexion
          </button>
        </div> */}
      </div>
    </header>
  );
}
