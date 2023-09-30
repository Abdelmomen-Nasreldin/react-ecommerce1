import React, { ReactNode, createContext, useState } from "react";
type AuthContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
export const authContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setIsLoggedIn: ()=>{}
});

 const AuthProvider = ({ children } : {children:ReactNode}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
    <authContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </authContext.Provider>
    )
}
export default AuthProvider;
