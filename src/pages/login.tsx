import React from 'react';
import type { NextPage } from "next";
import { useAppDispatch } from "../hoc/useAppDispatch";
import { useAppSelector } from "../hoc/useAppSelector";
import { setAuthState } from '../store/authSlice';


const Login: NextPage = () => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth.authState)

  return (
    <div>
      <div>{authState ? "Logged in" : "Not logged in"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Login;