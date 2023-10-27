import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidation from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const formRef = useRef();
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const handleForm = (e) => {
    e.preventDefault();

    const message = checkValidation(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  return (
    <section className="bg-netflix-img h-screen">
      <Header />
      <div className="pb-24">
        <div className="max-w-md w-full mx-auto bg-black bg-opacity-70 p-12">
          <form onSubmit={handleForm} action="" ref={formRef}>
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
