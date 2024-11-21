import { useNavigate } from "@tanstack/react-router";
import { useSessionStorage } from "@uidotdev/usehooks";

interface AuthState {
  isAuthenticated: boolean;
}

export function useAuth() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useSessionStorage<AuthState>("auth", {
    isAuthenticated: false,
  });

  const login = async () => {
    setAuthState({ isAuthenticated: true });
  };

  const logout = async () => {
    setAuthState({ isAuthenticated: false });
    navigate({ to: "/" });
  };

  return {
    isAuthenticated: authState.isAuthenticated,
    login,
    logout,
  };
}
