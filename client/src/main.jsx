import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";
import App from "./App";
import "./index.css";
import SignUp from "./components/SignUp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
