import { createRootRoute, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Header from "@/components/Header";
import Main from "@/components/Main";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Main>
        <ScrollRestoration />
        <Outlet />
      </Main>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
