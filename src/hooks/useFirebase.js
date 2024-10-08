/** @format */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useState } from "react";

// Initialize firebase App
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState(" ");

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  return {
    user,
    authError,
    signInWithGoogle,
  };
};

export default useFirebase;
