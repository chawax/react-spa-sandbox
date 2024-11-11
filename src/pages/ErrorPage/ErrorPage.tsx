import { ErrorComponentProps } from "@tanstack/react-router";

export default function ErrorPage({ error }: ErrorComponentProps) {
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
