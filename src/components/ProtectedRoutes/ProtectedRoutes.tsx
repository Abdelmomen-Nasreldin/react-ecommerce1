import React, {useContext, ReactNode} from 'react'
import { authContext } from '@/contexts/AuthContext/auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children} : {children: ReactNode}) => {
    const {isLoggedIn} = useContext(authContext)

    if (isLoggedIn) {
        return children
    }

    return <Navigate to={'/login'} />
}

export default ProtectedRoutes