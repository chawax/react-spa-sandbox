import { createFileRoute } from "@tanstack/react-router";

function ProfileSettingsPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Mes Paramètres</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Langue</label>
          <select className="w-full p-2 border rounded">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Recevoir des notifications</span>
          </label>
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

export const Route = createFileRoute("/profile/settings")({
  component: ProfileSettingsPage,
});
