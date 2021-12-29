import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

import { useAuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    
    const authentication = getAuth();

    useEffect(() => {
        signOut(authentication)
        .then(() => {
            logout();
    
            navigate('/')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    })

    return null;

};

export default Logout;
