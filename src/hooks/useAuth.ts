import { useSessionStorage } from "@uidotdev/usehooks";

interface AuthState {
  isAuthenticated: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useSessionStorage<AuthState>("auth", {
    isAuthenticated: false,
  });

  const login = () => {
    setAuthState({ isAuthenticated: true });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false });
  };

  return {
    isAuthenticated: authState.isAuthenticated,
    login,
    logout,
  };
}
