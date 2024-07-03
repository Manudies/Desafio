import { useState, useEffect, useContext } from 'react';
import './moduloCard.css';

import UserContext from '../../context/userContext';
import { useNavigate } from 'react-router';

import Modal from '../modal/modal';

import ActionButton from '../actionButton/actionButton';
import { addModulo, removeModulo } from '../../utils/fetch';

const TarjetaModulo = ({ modulo }) => {
    const { user, handlefetchUserData } = useContext(UserContext);
    const [isContratar, setIsContratar] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [packData, setPackData] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     setIsContratar(userHadPack());
    // }, [modulo, user]);

    function openModal() {
        setIsModalOpen(true);
    }

    const handleContratar = async () => {
        if (user) {
            const newContratar = await addModulo(modulo._id, user._id);
            if (isContratar) {
                await handledeleteContratar(packData);
                setIsContratar(!isContratar);
                handlefetchUserData();
            }
        } else {
            alert("Debes iniciar sesión")
            navigate("/register");
        };
    };

    const handledeleteContratar = async (modulo) => {
        if (user) {
            const deleteContratar = await removeModulo(modulo._id, user._id);
        }
    };

    // const userHadPack = () => {
    //     if (!user) {
    //         return false;
    //     }
    //     return user.packs.some(userPack => userPack._id === packData._id);
    // };


    return (
        <div className="modulo-card">
            {/* <img src={packData.image} alt={packData.packName} className="modulo-card-image" /> */}
            <div className="modulo-card-content">
                <h2 className="card-title">{modulo.phaseName}</h2>
                <p className="description">{modulo.description}"</p>
            </div>
        </div>
    );
};

export default TarjetaModulo;
