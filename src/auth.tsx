import * as React from "react";
import { AuthContext } from "./context/AuthContext";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string) => Promise<void>;
  logout: () => Promise<void>;
  user: string | null;
}

const key = "tanstack.auth.user";

function getStoredUser() {
  return sessionStorage.getItem(key);
}

function setStoredUser(user: string | null) {
  if (user) {
    sessionStorage.setItem(key, user);
  } else {
    sessionStorage.removeItem(key);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(getStoredUser());
  const isAuthenticated = !!user;

  const logout = React.useCallback(async () => {
    await sleep(250);
    setStoredUser(null);
    setUser(null);
  }, []);

  const login = React.useCallback(async (username: string) => {
    await sleep(250);
    setStoredUser(username);
    setUser(username);
  }, []);

  React.useEffect(() => {
    setUser(getStoredUser());
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
