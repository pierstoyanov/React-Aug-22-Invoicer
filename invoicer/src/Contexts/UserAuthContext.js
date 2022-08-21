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
  const [user, setUser] = useState(null);
  const authentication = getAuth(app);
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
  
  function thisCurrentUser () {
    return authentication.currentUser;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (currentuser) => {
      //PRINT CURRENT USER

    });

    return () => {
      unsubscribe();
    };

  }, []);


  return (
    <userAuthContext.Provider
      value={{ user, authentication, logIn, signUp, logOut }}
    >
      {children}
    </userAuthContext.Provider>
  );

  }

export function useUserAuth() {
  return useContext(userAuthContext);
}
