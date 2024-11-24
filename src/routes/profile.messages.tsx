import { createFileRoute } from "@tanstack/react-router";

type MessageItemProps = {
  title: string;
  content: string;
  date: string;
};

function MessageItem({ title, content, date }: MessageItemProps) {
  return (
    <div className="p-4 border rounded">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-600">{content}</div>
      <div className="text-xs text-gray-400 mt-1">{date}</div>
    </div>
  );
}

function ProfileMessagesPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Mes Messages</h2>
      <div className="space-y-4">
        <MessageItem
          title="Support Technique"
          content="Bonjour, voici la réponse à votre question..."
          date="Il y a 2 jours"
        />
        <MessageItem
          title="Newsletter"
          content="Découvrez les nouveaux films du mois..."
          date="Il y a 5 jours"
        />
        <MessageItem
          title="Promotion"
          content="Profitez de nos offres spéciales pour les vacances..."
          date="Aujourd'hui"
        />
        <MessageItem
          title="Autre"
          content="Votre message a été envoyé avec succès..."
          date="Il y a 10 minutes"
        />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/profile/messages")({
  component: ProfileMessagesPage,
});
