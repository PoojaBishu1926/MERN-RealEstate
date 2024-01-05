import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
