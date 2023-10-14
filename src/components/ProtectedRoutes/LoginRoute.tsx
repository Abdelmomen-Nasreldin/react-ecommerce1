import {useContext, ReactNode} from 'react'
import { AuthContext } from '@/contexts/AuthContext/auth';
import { Navigate } from 'react-router-dom';

const LoginRoutes = ({children} : {children: ReactNode}) => {
    const {isLoggedIn} = useContext(AuthContext)

    if (isLoggedIn) {
        return <Navigate to={'/'} />
    }

    return children
}

export default LoginRoutes