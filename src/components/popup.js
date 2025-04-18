import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../utils/popupSlice.js";

const Popup = () => {
  const isOpen = useSelector((store) => store.popup.isOpen);
  const message = useSelector((store) => store.popup.message);
  //dispatch
  const dispatch = useDispatch();
  //setTimeout
  setTimeout(()=>{
    dispatch(hide())
  },2000)

  return (
    <div
      className={`py-2 px-4 text-center bg-black rounded-xl text-red-600 text-2xl popup z-40 ${
        isOpen ? `popup_active` : `popup_inactive`
      }`}
    >
      {message}
    </div>
  );
};

export default Popup;
