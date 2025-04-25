import React, { useEffect } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Herosection from "./Herosection";
import Browsebody from "./Browsebody";

export const Browse = () => {
  const navigate = useNavigate();
  //auth
  const authStatus = useSelector((state) => state.auth);
  //navigate to signup if auth is null
  useEffect(() => {
    if (authStatus == null) {
      navigate("/");
    }
  }, []);

  return (
    <div className="check">
      <div className="relative w-full aspect-video">
        <Header />
        <Herosection />
      </div>
      <Browsebody />
    </div>
  );
};


