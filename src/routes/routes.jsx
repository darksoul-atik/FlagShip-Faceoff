import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "./Home/Home";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <p>404 Error</p>,
    children: [
      {
        index:true,
        element: <Home></Home>
      },
      {
        path: "/favourites",
        element: <p>favourites items</p>,
      },
      {
        path: "/about",
        element: <p>about pages</p>,
      },
    ],
  },
  

]);
