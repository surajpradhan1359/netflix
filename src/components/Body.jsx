import React from "react";
import { Signin } from "./Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Browse } from "./Browse";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "../utils/store.js";

export const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};
