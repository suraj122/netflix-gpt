import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidation from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [submissionError, setSubmissionError] = useState("");
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const message = checkValidation(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // Sign in / Signup logic
    if (message) return;

    if (!isSignIn) {
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
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSubmissionError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSubmissionError(errorMessage);
        });
    }
  };
  return (
    <section className="bg-netflix-img h-screen pt-28">
      <Header />
      <div className="pb-24">
        <div className="max-w-md w-full mx-auto bg-black bg-opacity-70 p-12">
          <form onSubmit={handleForm}>
            <legend className="font-semibold text-3xl text-white mb-12">
              {isSignIn ? "Sign In" : "Sign Up"}
            </legend>
            {!isSignIn && (
              <fieldset className="mb-5">
                <input
                  className="block w-full bg-gray-400 text-white placeholder:text-gray-300 py-2 px-3 rounded-md text-xl"
                  type="text"
                  placeholder="Full Name"
                  ref={name}
                />
                <p className="text-red-500 mt-1">
                  {errorMessage && errorMessage.name}
                </p>
              </fieldset>
            )}

            <input
              className="block w-full bg-gray-400 text-white placeholder:text-gray-300 py-2 px-3 rounded-md text-xl"
              type="text"
              placeholder="Email"
              ref={email}
            />
            <p className="text-red-500 mt-1">
              {errorMessage && errorMessage.email}
            </p>
            <input
              className="block w-full bg-gray-400 text-white placeholder:text-gray-300 py-2 px-3 rounded-md text-xl mt-5"
              type="password"
              placeholder="Password"
              ref={password}
            />
            <p className="text-red-500 mt-1">
              {errorMessage && errorMessage.password}
            </p>
            <p className="text-red-500 mt-1">{submissionError}</p>
            <button className="text-white bg-red-500 rounded-md w-full text-center py-2 px-3 text-xl mt-8">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="mt-4">
            <span className="text-gray-300">
              {isSignIn ? "New to Netflix?" : "Already Registered?"}
            </span>{" "}
            <strong
              className="text-white cursor-pointer"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? "Sign up now." : "Sign in now"}
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
