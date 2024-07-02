import { createBrowserRouter, redirect } from "react-router-dom";

import Register from "./pages/register/Register";
import Textbox from "./components/textbox/Textbox";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";

import Root from "./pages/Root";
// import TripsList from "./pages/trips/tripList";
// import TripsListAdmin from "./pages/trips/tripListAdmin";
// import UserList from "./pages/User/UserList";
// import Bienvenida from "./components/bienvenida/bienvenida";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: () => handleUserData(),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/textbox",
        element: <>
                  <Textbox  label="Email" error={"error"} placeholder={"placeholder"}/>
                  <Footer/>
        </>,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],

  }

]);

export default router;
