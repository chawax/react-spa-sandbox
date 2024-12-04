import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Header from "@/components/Header";
import Main from "@/components/Main";
import { RouterContext } from "@/context";

export const Route = createRootRouteWithContext<RouterContext>()({
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
