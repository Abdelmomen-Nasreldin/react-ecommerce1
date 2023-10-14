import React, { ReactNode, createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';
import axios, { AxiosResponse } from "axios";
const baseURL = "https://ecommerce.routemisr.com";

type CartContextType = {
  cartItems : number,
  setCartItems : React.Dispatch<React.SetStateAction<number>>
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType>({
    cartItems : 0,
    setCartItems : () =>{}
  });
  export const getLoggedUserCart = async ()=>{
    const authToken = Cookies.get("token") as string;
    const response: AxiosResponse = await axios.get(`${baseURL}/api/v1/cart`, {
        headers: {
            token: authToken,
        },
    });
    console.log(response.data.data.products.length);

    return response.data.data.products.length;
}
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

  const [cartItems, setCartItems] = useState<number>(0);

  // Check for an existing token in cookies when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      const cartItemsFromApi = await getLoggedUserCart();
      setCartItems(cartItemsFromApi);
    };

    fetchCartItems();
  }, []);

   
  const cartContextValue: CartContextType = {
    cartItems,
    setCartItems
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
