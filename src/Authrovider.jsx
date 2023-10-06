import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithEmailLink, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './Authentication';

 export const Authcontext=createContext(null);
const googleprovider=new GoogleAuthProvider();
const githubprovider=new GithubAuthProvider();



const Authrovider = ({children}) => {
  const [loader,setloader]=useState(true);
  const [user,setuser]=useState(null);
  const createuser=(email,password)=>{
    setloader(true);
    return createUserWithEmailAndPassword(auth,email,password)
    }
    const userlogin=(email,password)=>{
      setloader(true);
    return signInWithEmailAndPassword(auth,email,password)
    }

    const googlelogin=()=>{
      setloader(true);
     return signInWithPopup(auth,googleprovider)
    }
    const githublogin=()=>{
      setloader(true);
     return signInWithPopup(auth,githubprovider)
    }

   const logout=()=>{
    setloader(true);
    return signOut(auth)
   }

  useEffect(()=>{
   
    onAuthStateChanged(auth, (user) => {
      setuser(user)
      setloader(false);
    });

  },[]);
  
  const Authinfo={
    createuser,
    userlogin,
    user,
    googlelogin,
    logout,githublogin,loader
   }
  console.log(user);
    return (
        <Authcontext.Provider value={Authinfo}>
         {children}
        </Authcontext.Provider>
    );
};

export default Authrovider;