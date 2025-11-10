import * as React from "react";
import { AuthContextType } from "@/auth";

export const AuthContext = React.createContext<AuthContextType | null>(null);

