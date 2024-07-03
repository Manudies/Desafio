import { createBrowserRouter, redirect } from "react-router-dom";

import {getPacks, getUsers, getByProperty} from "./utils/fetch";

import Register from "./pages/register/Register";
import ErrorPage from "./pages/ErrorPage";

import Textbox from "./components/textbox/Textbox";
import FormularioPack from "./components/formularioPack/FormularioPack";
import FormularioModulo from "./components/formularioModulos/formularioModulo";

import PacksList from "./components/packs/PacksList";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";

import Root from "./pages/Root";

// async function fetchUsers() {
//   const result = await getUsers();
//   if (result.error) {
//     return redirect ("/register");
//   }
//   return result.data;
// }

async function fetchPacks() {
  const result = await getPacks();
  if (result.error) {
    return redirect ("/register");
  }
  return result.data;
}

async function fetchPacksByProperty(packName) {
  const result = await getByProperty(packName);
  if (result.error) {
    return redirect ("/register");
  }
  return result.data;
}


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
        path: "/formularioPack",
        element: <FormularioPack />,
      },
      {
        path: "/formularioModulo",
        element: <FormularioModulo />,
      },
      {
        path: "/packs",
        element: <PacksList />,
        loader: () => fetchPacks(),
      },
      {
        path: "/packs/:packName",
        element: <PacksList />,
        loader: ({ params }) => fetchPacksByProperty(params.packName),
      },
      {
        path: "/formularioPack",
        element: <FormularioPack />,
      },
      {
        path: "/formularioModulo",
        element: <FormularioModulo />,
      },
      {
        path: "/packs",
        element: <PacksList />,
        loader: () => fetchPacks(),
      },
      {
        path: "/packs/:packName",
        element: <PacksList />,
        loader: ({ params }) => fetchTripsByProperty(params.packName),
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],

  }

]);

export default router;
