import {useContext, ReactNode} from 'react'
import { AuthContext } from '@/contexts/AuthContext/auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children} : {children: ReactNode}) => {
    const {isLoggedIn} = useContext(AuthContext)

    if (isLoggedIn) {
        return children
    }

    return <Navigate to={'/login'} />
}

export default ProtectedRoutes