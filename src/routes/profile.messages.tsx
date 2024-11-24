import { createFileRoute } from "@tanstack/react-router";

function ProfileMessagesPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Mes Messages</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <div className="font-medium">Support Technique</div>
          <div className="text-sm text-gray-600">
            Bonjour, voici la réponse à votre question...
          </div>
          <div className="text-xs text-gray-400 mt-1">Il y a 2 jours</div>
        </div>
        <div className="p-4 border rounded">
          <div className="font-medium">Newsletter</div>
          <div className="text-sm text-gray-600">
            Découvrez les nouveaux films du mois...
          </div>
          <div className="text-xs text-gray-400 mt-1">Il y a 5 jours</div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/profile/messages")({
  component: ProfileMessagesPage,
});
