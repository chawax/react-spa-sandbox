import { ErrorComponentProps } from "@tanstack/react-router";

export default function ErrorComponent({ error }: ErrorComponentProps) {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Désolé, une erreur inattendue s'est produite.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
