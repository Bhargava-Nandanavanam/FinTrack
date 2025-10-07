"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getToken, setToken, clearToken } from "@/utils/storage";

export interface User {
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // hydrate from localStorage token (mock)
  useEffect(() => {
    const token = getToken();
    if (token?.email) setUser({ email: token.email });
  }, []);

  const login = async (email: string, _password: string) => {
    // TODO: replace with real API call
    setUser({ email });
    setToken({ email }); // persist minimal mock “token”
  };

  const signup = async (email: string, _password: string) => {
    // TODO: replace with real API call
    setUser({ email });
    setToken({ email });
  };

  const logout = () => {
    setUser(null);
    clearToken();
  };

  const value = useMemo(() => ({ user, login, signup, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
};
