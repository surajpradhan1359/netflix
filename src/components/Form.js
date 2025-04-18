import React, { useRef } from "react";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import { app } from "../utils/Firebase-config.js";
import { show } from "../utils/popupSlice.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateAuth } from "../utils/authSlice.js";



const Form = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const [message, setMessage] = useState(null);

  const [fullname,setFullname] = useState("")

  //navigate
  const navigate = useNavigate();

  const toogleClick = () => {
    setIsSigninForm(!isSigninForm);
  };

  //firebase createuser with email and password

  //ref to the particular element
  const email = useRef(null);
  const password = useRef(null);
  const heading = useRef(null);
  //firebase auth
  const auth = getAuth();
  //Dispatch
  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    e.preventDefault();
    //validating the input field
    let validationMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    //setting the state for validate message
    setMessage(validationMessage);
    //logic for firebase
    if (validationMessage == null) {
      if (heading.current.innerText == "Sign up") {
        //Sign up firebase callback function
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...

            return updateProfile(auth.currentUser, {
              displayName: fullname, photoURL: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
            });
          }).then(()=>{
            const {uid,email,displayName,photoURL} =auth.currentUser;
            dispatch(updateAuth({email:email,uid:uid,displayName:displayName,photoURL:photoURL}))
            dispatch(show("Signed up successfully"))
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            dispatch(show('Unable to signup'))
            console.log(error)
          });
      } else {
        //firebase signIn promise
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // dispatch(updateAuth(user.uid));
            dispatch(show("Logged in successfully"));
            // ...
          })
          .catch((error) => {
            console.log('the error obj is',error)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,' ',errorMessage);
          });
      }
    }
  };

  return (
    <form className="bg-black opacity-80 rounded-lg p-2 sm:p-8 w-4/12 sigin_form mt-50">
      <h1 className="text-white text-3xl mb-3 font-bold" ref={heading}>
        {isSigninForm ? "Sign in" : "Sign up"}
      </h1>
      <input
        type="text"
        ref={email}
        placeholder="Email or mobile number"
        className="px-2 py-3 border-white border rounded-xl text-white w-full mb-3"
      />
      {isSigninForm != true && (
        <input
          type="text"
          placeholder="Full name"
          onChange={(e)=>{
            setFullname(e.target.value)
          }}
          className="px-2 py-3 border-white border rounded-xl text-white w-full mb-3"
        />
      )}
      <input
        type="password"
        ref={password}
        placeholder="Password"
        className="px-2 py-3 border-white border rounded-xl text-white w-full mb-3"
      />
      {message != null && (
        <p className="text-center text-lg text-red-500 mb-3 font-bold">
          {message}
        </p>
      )}
      <button
        className="bg-red-700 text-white text-center rounded-xl w-full py-2 cursor-pointer mb-3"
        onClick={handleButtonClick}
      >
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
