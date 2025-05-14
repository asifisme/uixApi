import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isSignedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isSignedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    setIsSignedIn(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("access", token);
    setIsSignedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("access");
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
