import "../App.css";
import { Outlet, Link, useNavigate, useLoaderData, useActionData } from "react-router-dom";
import {getToken} from "../utils/local";
import { useEffect, useContext } from "react";
import UserContext from "../context/userContext";
// import Footer from "../components/footer/footer";
// import Navbar from "../components/navbar/Navbar";
// import TripCard from "../components/trips/tripCard";


const Root = () => {

    return (
        <>
            
                {/* <Navbar /> */}

            <Outlet />
            {/* <Footer/> */}
        </>
    )
};

export default Root;