import { createBrowserRouter } from "react-router";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
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
