import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Browse } from "./Browse";
import { Provider } from "react-redux";
import { store } from "../utils/store.js";
import Popup from "./popup.js";
import User from "./Home";

export const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
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
        <Popup/>
      </Provider>
    </div>
  );
};
