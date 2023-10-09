import React, { ReactNode, createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

type AuthToken = string | null;

type AuthContextType = {
  isLoggedIn: boolean;
  login: (token: AuthToken) => void;
  logout: () => void;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
  });

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<AuthToken>(null);

  // Check for an existing token in cookies when the component mounts
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      login(token);
    }
  }, []);

  const login = (token: AuthToken) => {
    Cookies.set('token', token, { expires: 7 });
    setAuthToken(token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    Cookies.remove('token');
    setAuthToken(null);
    setIsLoggedIn(false);
  };

  const authContextValue: AuthContextType = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
