import { useState , useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import UserContext from "./context/userContext";
import {fetchUserData} from "./utils/fetch"
import "./App.css";
import Navbar from "./components/navbar/navbar";

function App() {
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState(null);
      useEffect(() => {
        handlefetchUserData()
    }, [])

  async function handlefetchUserData() {
    const result = await fetchUserData();
    setLoadingUser(false);
    console.log("user",result)
    if (result.error) {
      return null;
    }
    setUser(result.data); 
  }
  const logOut = () => {
    deleteToken()
    setUser(null)

  }

  return (
    <>
    <Navbar/>
      <div>
        <UserContext.Provider
          value={{ user, handlefetchUserData, logOut, loadingUser }}
        >
          <RouterProvider router={router} />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
