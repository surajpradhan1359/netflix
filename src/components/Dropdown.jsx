import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../utils/popupSlice";
import { getAuth,signOut  } from "firebase/auth";
import { signout } from "../utils/authSlice.js";

const Dropdown = () => {
  const auth = useSelector((state) => state.auth);

  //dispatch
  const dispatch = useDispatch();

  //signOut
  const handleSignout = () => {
    // Get the auth instance
    const auth = getAuth();

    // Sign out the user
    signOut(auth)
      .then(() => {
        console.log("");
        dispatch(signout());
        dispatch(show("User signed out successfully"));
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  return (
    <div>
      <ul>
        <li className="text-2xl text-red-500 font-bold cursor-pointer tracking-wider relative group transition delay-100 hover:text-white">
          User
          <ul className="absolute top-full right-8 bg-red-400 p-2 rounded-xl min-w-[100px] hidden group-hover:block transition duration-500 ease-in">
            <li className="text-sm text-white hover:text-black transition delay-75">
              {auth.displayName}
            </li>
            <li
              className="text-sm text-white hover:text-black transition delay-75"
              onClick={handleSignout}
            >
              Signout
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
