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

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  
  const authentication = getAuth(app);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function logIn(email, password) {
      return signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/Homepage');
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        })
        .catch((error) => {
          //console.log(error);
          if(error.code === 'auth/wrong-password') {
            toast.error('Password is incorrect');
          }
          if(error.code === 'auth/user-not-found') {
            toast.error('Email is incorrect');
          }   
        })
    }
    
    function signUp(email, password) {
      return createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/home');
        //console.log(response));
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          toast.error('This email is allready registered');
        }
      })
    }

    const logOut = () => {
      signOut(authentication);
      sessionStorage.removeItem('Auth Token');
      navigate('/login');
    }
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };

  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut }}
    >
      {children}
    </userAuthContext.Provider>
  );

  }

export function useUserAuth() {
  return useContext(userAuthContext);
}
