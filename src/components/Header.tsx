import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="bg-black p-4 sticky top-0">
      <Link to="/">
        <h1 className="text-3xl text-white font-bold">My Movies</h1>
      </Link>
    </header>
  );
}
