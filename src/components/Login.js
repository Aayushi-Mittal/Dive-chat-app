import React from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase-config";

// const provider = new GoogleAuthProvider();

// function loginWithGoogle() {
//   const auth = getAuth();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//     //   const credential = GoogleAuthProvider.credentialFromResult(result);
//     //   const token = credential.accessToken;
//     //   const user = result.user;
//         console.log(result);
//     })
//     .catch((error) => {
//     //   const errorCode = error.code;
//     //   const errorMessage = error.message;
//     //   const email = error.email;
//     //   const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log(error);
//     });
// }

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {/* <button onClick={loginWithGoogle}>Login with Google</button> */}
      <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
};

export default Login;
