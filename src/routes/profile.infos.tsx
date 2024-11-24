import { createFileRoute } from "@tanstack/react-router";

function ProfileInfosPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Mes Informations</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="votre@email.com"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sauvegarder
        </button>
      </form>
    </div>
  );
}

export const Route = createFileRoute("/profile/infos")({
  component: ProfileInfosPage,
});
