import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Favourites from "../Pages/Favourites";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";
import Home from "../Pages/home";
import ErrorPage from "../Pages/ErrorPage";
import Cart from "../Pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index:true,
        element: <Home></Home>,
        hydrateFallbackElement: <p>Loading</p>,
        loader: () =>  fetch('phones.json'),
      },
      {
        path: "/favourites",
        element: <Favourites></Favourites>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/phone-details",
        element: <PhoneDetails></PhoneDetails>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
    ],
  },
  

]);
