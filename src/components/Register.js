import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
//   onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebase-config";

const Register = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
//   const [user, setUser] = useState({});

//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3> Register User </h3>
        <input
            placeholder="Email..."
            onChange={(event) => {
            setRegisterEmail(event.target.value);
            }}
        />
        <input
            placeholder="Password..."
            onChange={(event) => {
            setRegisterPassword(event.target.value);
            }}
        />
      <button onClick={register}> Create User</button>
    </div>
  );
};

export default Register;
