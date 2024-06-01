import { useState, useRef } from "react";
import Header from "./Header";
import { validateSignIn, validateSignUp } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_ICON } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = () => {
    const msg = isSignIn
      ? validateSignIn(email.current.value, password.current.value)
      : validateSignUp(
          name.current.value,
          email.current.value,
          password.current.value
        );
    setErrorMessage(msg);

    if (msg) return;

    if (isSignIn) {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    } else {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_ICON,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " --> " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="flex justify-center">
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black text-white absolute w-3/12 p-12 rounded-lg flex flex-col mt-[8%] bg-opacity-80"
      >
        <h1 className="text-3xl py-4 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-4 rounded-lg w-full bg-gray-700 opacity-80"
            placeholder="Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 rounded-lg w-full bg-gray-700 opacity-80"
          placeholder="Email address"
          type="email"
        />
        <input
          ref={password}
          className="p-4 my-4 rounded-lg w-full bg-gray-700 opacity-80"
          placeholder="Password"
          type="password"
        />

        <p className="text-red-500">{errorMessage}</p>

        <button
          onClick={handleClick}
          className="bg-red-800 rounded-lg w-full p-4 my-6"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
