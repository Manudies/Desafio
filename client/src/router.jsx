import { createBrowserRouter, redirect } from "react-router-dom";

import {getPacks, getUsers, getByProperty, getModulos} from "./utils/fetch";

import Register from "./pages/register/Register";
import ErrorPage from "./pages/ErrorPage";

import Textbox from "./components/textbox/Textbox";
import FormularioPack from "./components/formularioPack/FormularioPack";
import FormularioModulo from "./components/formularioModulos/formularioModulo";

import PacksList from "./components/packs/PacksList";
import Timeline from "./components/timeLine/Timeline";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import Consultoria from "./pages/consultoria/Consultoria";
import Contacto from "./pages/contacto/contacto";

import Root from "./pages/Root";

// async function fetchUsers() {
//   const result = await getUsers();
//   if (result.error) {
//     return redirect ("/register");
//   }
//   return result.data;
// }

//Funciones de Packs
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

//Funciones de Modulos

async function fetchModulos() {
  const result = await getModulos();
  if (result.error) {
    return redirect ("/register");
  }
  return result.data;
}

async function fetchModulosByProperty(moduloName) {
  const result = await getByProperty(moduloName);
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
        path: "/consultoria",
        element: <Consultoria />,
        loader: () => fetchPacks(),
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
        path: "/modulos",
        element: <Timeline />,
        loader: () => fetchModulos(),
      },
      // {
      //   path: "/packs/:packName",
      //   element: <PacksList />,
      //   loader: ({ params }) => fetchTripsByProperty(params.packName),
      // },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      }
    ],

  }

]);

export default router;
