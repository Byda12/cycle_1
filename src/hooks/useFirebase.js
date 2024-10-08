/** @format */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useState } from "react";

// Initialize firebase App
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading] = useState();
  const [authError, setAuthError] = useState(" ");


  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
  };

  return {
    user,
    isLoading,
    authError,
    signInWithGoogle,
  };
};

export default useFirebase;
