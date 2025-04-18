import React, { useEffect } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Nowplaying from "./Nowplaying";

export const Browse = () => {
  const navigate = useNavigate();
  //auth
  const authStatus = useSelector((state)=>state.auth);
  //navigate to signup if auth is null
  useEffect(()=>{
    if(authStatus == null){
      navigate("/")
    }
  },[]);

  return (
    <div className="" style={{height:'100vh'}}>
      <div className="relative h-[100px] bg-gradient-to-b from-black">
        <Header/>
      </div>
      <Nowplaying/>
    </div>
  );
};
