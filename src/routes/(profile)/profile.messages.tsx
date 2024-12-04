import { createFileRoute } from '@tanstack/react-router'

type MessageItemProps = {
  title: string
  content: string
  date: string
}

function MessageItem({ title, content, date }: MessageItemProps) {
  return (
    <div className="p-4 border rounded">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-600">{content}</div>
      <div className="text-xs text-gray-400 mt-1">{date}</div>
    </div>
  )
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
        <MessageItem
          title="Mise à jour du compte"
          content="Votre compte a été mis à jour avec succès..."
          date="Il y a 1 heure"
        />
        <MessageItem
          title="Recommandations"
          content="Basé sur vos goûts, voici une sélection de films..."
          date="Il y a 3 jours"
        />
        <MessageItem
          title="Confirmation d'abonnement"
          content="Merci d'avoir souscrit à notre service premium..."
          date="Il y a 1 semaine"
        />
        <MessageItem
          title="Sécurité"
          content="Une nouvelle connexion a été détectée sur votre compte..."
          date="Il y a 4 jours"
        />
        <MessageItem
          title="Événement spécial"
          content="Invitation à l'avant-première du film 'Avatar 3'..."
          date="Il y a 2 semaines"
        />
        <MessageItem
          title="Maintenance planifiée"
          content="Notre site sera en maintenance le 15 mars de 2h à 4h..."
          date="Hier"
        />
        <MessageItem
          title="Sondage utilisateur"
          content="Donnez-nous votre avis sur notre nouvelle interface..."
          date="Il y a 6 jours"
        />
        <MessageItem
          title="Mise à jour des CGU"
          content="Nos conditions générales d'utilisation ont été mises à jour..."
          date="Il y a 8 jours"
        />
        <MessageItem
          title="Programme fidélité"
          content="Félicitations ! Vous avez atteint le niveau Gold..."
          date="Il y a 12 jours"
        />
        <MessageItem
          title="Notification système"
          content="La synchronisation de votre compte est terminée..."
          date="Il y a 15 jours"
        />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/(profile)/profile/messages')({
  component: ProfileMessagesPage,
})
