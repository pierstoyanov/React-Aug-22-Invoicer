import { createContext, useContext, useEffect, useState } from "react"

import { app, analytics } from '../Config/firebase.config'
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged } 
  from 'firebase/auth'

import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const userAuthContext = createContext('');

export function UserAuthContextProvider({children}) {
  const authentication = getAuth(app);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();

  function logIn(email, password) {
    return signInWithEmailAndPassword(authentication, email, password)
    }
    
  function signUp(email, password) {
    return createUserWithEmailAndPassword(authentication, email, password)
  }

  const logOut = () => {
    signOut(authentication);
    toast('Logged out successfully!', {position: toast.POSITION.BOTTOM_RIGHT})
    navigate('/login');
  }

  function getAuthenticatedUser() {
    if (!currentUser) {
      return null;
    }
    return currentUser;
  }

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged( (user) => {
      setCurrentUser(user)
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };

  }, []);

  const value = {
    currentUser, logIn, signUp, logOut, getAuthenticatedUser, authentication
  }

  return (
    <userAuthContext.Provider value={value}>
      {!loading && children}
    </userAuthContext.Provider>
  );

  }

export function useUserAuth() {
  return useContext(userAuthContext);
}
