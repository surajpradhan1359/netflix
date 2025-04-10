import React from "react";
import { useState } from "react";

const Form = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const toogleClick = () => {
    setIsSigninForm(!isSigninForm);
  };

  return (
    <form className="bg-black opacity-80 rounded-lg p-2 sm:p-8 w-4/12 sigin_form mt-50">
      <h1 className="text-white text-3xl mb-3 font-bold">
        {isSigninForm ? "Sign in" : "Sign up"}
      </h1>
      <input
        type="text"
        placeholder="Email or mobile number"
        className="px-2 py-3 border-white border rounded-xl text-white w-full mb-3"
      />
      {isSigninForm != true && (
        <input
          type="text"
          placeholder="Full name"
          className="px-2 py-3 border-white border rounded-xl text-white w-full mb-3"
        />
      )}
      <input
        type="password"
        placeholder="Password"
        className="px-2 py-3 border-white border rounded-xl text-white w-full mb-3"
      />
      <button className="bg-red-700 text-white text-center rounded-xl w-full py-2 cursor-pointer mb-3">
        {isSigninForm ? "Sign in" : "Sign up"}
      </button>
      <p className="text-center uppercase text-lg text-white mb-3">or</p>
      {isSigninForm && (
        <p className="text-center  text-lg text-white cursor-pointer hover:underline mb-3">
          Forgot password?
        </p>
      )}
      <p className="text-white text-center cursor-pointer">
        {isSigninForm ? "New to Netflix?" : "Already have an account?"}
        <span
          className="text-white font-bold hover:underline"
          onClick={toogleClick}
        >
          {isSigninForm ? "Sign up now." : "Login now."}
        </span>
      </p>
    </form>
  );
};

export default Form;
