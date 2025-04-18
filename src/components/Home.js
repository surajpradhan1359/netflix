import React, { useEffect } from "react";
import { Signin } from "./Signin";
import { useNavigate } from "react-router";
import {  useSelector } from "react-redux";
// import LoadingCircleSpinner from './Loader';

const User = () => {
  //navigate
  let navigate = useNavigate();
  //subscribing to the redux store
  let user = useSelector((state) => state.auth);

  useEffect(() => {
    if (user != null) {
      navigate("/browse");
    }
  }, [user]);

  return (
    <div>
      {user != null ? (
        <div className="bg-black pt-10 h-[100vh]">
          <h3 className="text-center text-4xl text-pink-600 ">Loading....</h3>
        </div>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default User;
