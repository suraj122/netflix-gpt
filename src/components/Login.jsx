import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <section className="bg-netflix-img h-screen">
      <Header />
      <div className="pb-24">
        <div className="max-w-md w-full mx-auto bg-black bg-opacity-70 p-12">
          <form action="">
            <legend className="font-semibold text-3xl text-white mb-12">
              {isSignIn ? "Sign In" : "Sign Up"}
            </legend>
            {!isSignIn && (
              <input
                className="block w-full bg-gray-400 text-white placeholder:text-gray-300 py-2 px-3 rounded-md text-xl mb-5"
                type="text"
                placeholder="Full Name"
              />
            )}

            <input
              className="block w-full bg-gray-400 text-white placeholder:text-gray-300 py-2 px-3 rounded-md text-xl"
              type="email"
              placeholder="Email"
            />
            <input
              className="block w-full bg-gray-400 text-white placeholder:text-gray-300 py-2 px-3 rounded-md text-xl my-5"
              type="password"
              placeholder="Password"
            />
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
