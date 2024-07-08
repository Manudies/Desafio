import React, { createContext, useState, useEffect } from 'react';
import { fetchUserData } from '../utils/fetch';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handlefetchUserData = async () => {
        const data = await fetchUserData(); // Suponiendo que fetchUserData devuelve los datos del usuario
        setUser(data);
    };

    useEffect(() => {
        handlefetchUserData();
    }, []);

    const logOut = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, handlefetchUserData, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
