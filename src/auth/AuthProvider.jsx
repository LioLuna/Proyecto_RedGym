import { useState } from "react";

import AuthContext from "@/auth/AuthContext";
import authService, { getStoredSession, saveStoredSession } from "@/services/authService";

export default function AuthProvider({ children }) {
  const storedSession = getStoredSession();
  const [user, setUser] = useState(storedSession?.user ?? null);
  const [token, setToken] = useState(storedSession?.token ?? null);

  const saveSession = (session) => {
    saveStoredSession(session);
    setUser(session.user);
    setToken(session.token ?? null);
  };

  const login = async (credentials) => {
    const session = await authService.login(credentials);
    saveSession(session);
    return session;
  };

  const register = async (payload) => {
    const session = await authService.register(payload);
    saveSession(session);
    return session;
  };

  const logout = async () => {
    try {
      await authService.logout(token);
    } finally {
      saveStoredSession(null);
      setUser(null);
      setToken(null);
    }
  };

  const value = {
    user,
    token,
    login,
    logout,
    register,
    isAdmin: user?.role === "admin",
    isAuthenticated: Boolean(user),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
