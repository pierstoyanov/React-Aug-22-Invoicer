import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


const initialAuth = {
    _id: '',
    email: '',
    accessToken: '',
    refreshToken: '',
};

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuth);
    
    const login = (authData) => {
        setUser(authData);
    }
    
    const logout = () => {
        setUser(initialAuth);
    };
    
    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user.email }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}
