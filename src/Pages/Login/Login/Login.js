/** @format */

import React from "react";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import { Alert } from "react-bootstrap";

const Login = () => {
  const { user, authError, signInWithGoogle } = useAuth();
  // console.log(user);
  return (
    <div>
      <h2>I'm From Login Page</h2>
      <button onClick={signInWithGoogle} type='button' className='btn btn-info'>
        Sign In With Google
      </button>
      {user?.email && <Alert variant='success'>{user.email}</Alert>}
      <p className='text-danger fw-bolder'>{authError}</p>
    </div>
  );
};

export default Login;
