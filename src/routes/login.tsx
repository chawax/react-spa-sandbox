import { FormEvent, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { useAuth } from "@/hooks/useAuth";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const search = Route.useSearch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("login") as string;
    const password = formData.get("password") as string;

    // Simulation d'une validation simple
    if (username === "admin" && password === "password") {
      await login();
      if (search.redirect) {
        navigate({ to: search.redirect });
      } else {
        navigate({ to: "/" });
      }
    } else {
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form className="max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="login">
            Identifiant
          </label>
          <input
            type="text"
            id="login"
            name="login"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}

export const Route = createFileRoute("/login")({
  component: LoginPage,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      redirect: search.redirect as string | undefined,
    };
  },
});
