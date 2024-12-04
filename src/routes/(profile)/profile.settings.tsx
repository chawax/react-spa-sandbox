import { createFileRoute, useBlocker } from '@tanstack/react-router'
import { useState } from 'react'
import { ConfirmDialog } from '@/components/ConfirmDialog'

function ProfileSettingsPage() {
  const [formData, setFormData] = useState({
    language: 'fr',
    notifications: false,
  })
  const [isDirty, setIsDirty] = useState(false)

  const { proceed, reset, status } = useBlocker({
    condition: isDirty,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const value =
      e.target.type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }))
    setIsDirty(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsDirty(false)
  }

  return (
    <>
      <ConfirmDialog
        isOpen={status === 'blocked'}
        message="Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?"
        onConfirm={proceed}
        onCancel={reset}
      />
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Mes Paramètres</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Langue</label>
            <select
              className="w-full p-2 border rounded"
              name="language"
              value={formData.language}
              onChange={handleChange}
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
              />
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
    </>
  )
}

export const Route = createFileRoute('/(profile)/profile/settings')({
  component: ProfileSettingsPage,
})
