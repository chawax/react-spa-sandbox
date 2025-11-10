import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
} from "@tanstack/react-router";

type NavLinkProps = { to: string; children: React.ReactNode };

function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="p-2 rounded hover:bg-gray-200 transition-colors"
      activeProps={{ className: "bg-gray-200 font-bold" }}
    >
      {children}
    </Link>
  );
}

function ProfileLayout() {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4 rounded-lg h-[calc(100vh-120px)] sticky top-20">
        <nav className="flex flex-col space-y-2">
          <NavLink to="/profile/infos">Mes informations</NavLink>
          <NavLink to="/profile/settings">Mes paramètres</NavLink>
          <NavLink to="/profile/messages">Mes messages</NavLink>
        </nav>
      </aside>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export const Route = createFileRoute("/(profile)/profile")({
  component: ProfileLayout,
  beforeLoad: ({ context }) => {
    if (!context.auth?.isAuthenticated) {
      throw redirect({ to: "/login", search: { redirect: location.pathname } });
    }
  },
});
