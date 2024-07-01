import { createBrowserRouter, redirect } from "react-router-dom";

import Register from "./pages/register/Register";
import Textbox from "./components/textbox/Textbox";
import FormularioPack from "./components/formularioPack/formularioPack";
import ErrorPage from "./pages/ErrorPage";

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
        element: 
        <div>
          <h1>Hola Silver</h1>
        </div>,
      },
      {
        path: "/textbox",
        element: <Textbox />,
      },
      {
        path: "/formularioPack",
        element: <FormularioPack />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],

  }

]);

export default router;
