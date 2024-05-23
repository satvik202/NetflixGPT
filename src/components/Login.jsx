import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="flex justify-center">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="bg-black text-white absolute w-3/12 p-12 rounded-lg flex flex-col justify-center items-center mt-[10%] bg-opacity-80">
        <h1 className="text-3xl py-4 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-4 my-4 rounded-lg w-full bg-gray-700 opacity-80"
            placeholder="Name"
            type="text"
          />
        )}
        <input
          className="p-4 my-4 rounded-lg w-full bg-gray-700 opacity-80"
          placeholder="Email address"
          type="email"
        />
        <input
          className="p-4 my-4 rounded-lg w-full bg-gray-700 opacity-80"
          placeholder="Password"
          type="password"
        />

        <button className="bg-red-800 rounded-lg w-full p-4 my-6">
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
