import React, { ReactNode, createContext, useState, useEffect, useContext } from "react";
import Cookies from 'js-cookie';
import { CartContext, getLoggedUserCart } from "./cart";

type AuthToken = string | null;

type AuthContextType = {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  authToken : AuthToken,
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    authToken : null,
  });

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { setCartItems } = useContext(CartContext)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<AuthToken>(null);

  // Check for an existing token in cookies when the component mounts
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      login(token);
    }
  }, []);

  const login = async (token: string) => {
    Cookies.set('token', token, { expires: 7 });
    setAuthToken(token);
    setIsLoggedIn(true);
    try {
      const fetchedCartLength = await getLoggedUserCart();
      setCartItems(fetchedCartLength);
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    }  };

  const logout = () => {
    Cookies.remove('token');    
    setAuthToken(null);
    setIsLoggedIn(false);
    setCartItems(0)
    };

  const authContextValue: AuthContextType = {
    isLoggedIn,
    login,
    logout,
    authToken,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
