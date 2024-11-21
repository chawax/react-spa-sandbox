import { useSessionStorage } from "@uidotdev/usehooks";

interface AuthState {
  isAuthenticated: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useSessionStorage<AuthState>("auth", {
    isAuthenticated: false,
  });

  const login = async () => {
    setAuthState({ isAuthenticated: true });
  };

  const logout = async () => {
    setAuthState({ isAuthenticated: false });
  };

  return {
    isAuthenticated: authState.isAuthenticated,
    login,
    logout,
  };
}
