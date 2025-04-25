import React, { useEffect } from "react";
import { logoUrl } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { updateAuth } from "../utils/authSlice";
import { useNavigate } from "react-router";

export const Header = () => {
  const user = useSelector((state) => state.auth);

  //dispatch
  const dispatch = useDispatch();

  //navigate
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      if (User) {
        const { displayName, email, uid, photoURL } = User;
        dispatch(
          updateAuth({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div
      className="absolute top-0 px-6 py-2 z-50 flex justify-between items-center"
      style={{ width: "100%" }}
    >
      <img src={logoUrl} alt="noImage" loading="lazy" className="w-48" />
      {user != null && <Dropdown />}
    </div>
  );
};
