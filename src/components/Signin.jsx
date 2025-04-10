import React, { useState } from "react";
import { Header } from "./Header";
import { signInBgUrl } from "../utils/data";
import Form from "./Form";

export const Signin = () => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute top-0">
        <img src={signInBgUrl} alt="no Image" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>
      <Form/>
    </div>
  );
};
