import React from "react";
import { Signin } from "./Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Browse } from "./Browse";
import Home from "./Home";

export const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};
