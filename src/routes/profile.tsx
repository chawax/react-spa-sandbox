import { createFileRoute, redirect } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";

function ProfilePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mon Profil</h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Informations</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Identifiant :</span> admin
            </p>
            <p>
              <span className="font-medium">Rôle :</span> Utilisateur
            </p>
          </div>
        </div>

        <div className="border-t pt-4">
          <h2 className="text-xl font-semibold mb-2">Préférences</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Langue :</span> Français
            </p>
            <p>
              <span className="font-medium">Thème :</span> Clair
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  beforeLoad: ({ context }) => {
    // Redirection si l'utilisateur n'est pas connecté
    const auth = sessionStorage.getItem("auth");
    const isAuthenticated = auth ? JSON.parse(auth).isAuthenticated : false;

    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
});
