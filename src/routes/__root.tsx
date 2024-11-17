import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="bg-black p-4 sticky top-0">
        <Link to="/">
          <h1 className="text-3xl text-white font-bold">My Movies</h1>
        </Link>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
