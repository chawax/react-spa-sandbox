import { useState } from "react";

import { createFileRoute, useBlocker } from "@tanstack/react-router";

import { Input } from "@/components/input/Input";
import { ConfirmDialog } from "@/components/confirm-dialog/ConfirmDialog";

function ProfileInfosPage() {
  // Manage the form data

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isDirty, setIsDirty] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setIsDirty(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDirty(false);
  };

  // Blocker to prevent the user from leaving the page with unsaved changes

  const { proceed, reset, status } = useBlocker({ condition: isDirty });

  return (
    <>
      <ConfirmDialog
        isOpen={status === "blocked"}
        message="Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?"
        onConfirm={proceed || (() => {})}
        onCancel={reset || (() => {})}
      />
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Mes informations</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label="Nom"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sauvegarder
          </button>
        </form>
      </div>
    </>
  );
}

export const Route = createFileRoute("/(profile)/profile/infos")({
  component: ProfileInfosPage,
});
