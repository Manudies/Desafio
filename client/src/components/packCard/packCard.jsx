import { useState, useEffect, useContext } from 'react';
import './packCard.css';

import UserContext from '../../context/userContext';
import { useNavigate } from 'react-router';

import Modal from '../modal/modal';

import ActionButton from '../actionButton/actionButton';
import { addPack, removePack } from '../../utils/fetch';

const TarjetaPack = ({ pack }) => {
    const { user, handlefetchUserData } = useContext(UserContext);
    const [isContratar, setIsContratar] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [packData, setPackData] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     setIsContratar(userHadPack());
    // }, [pack, user]);

    function openModal() {
        setIsModalOpen(true);
    }

    const handleContratar = async () => {
        if (user) {
            const newContratar = await addPack(pack._id, user._id);
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

    const handledeleteContratar = async (pack) => {
        if (user) {
            const deleteContratar = await removePack(pack._id, user._id);
        }
    };

    // const userHadPack = () => {
    //     if (!user) {
    //         return false;
    //     }
    //     return user.packs.some(userPack => userPack._id === packData._id);
    // };


    return (
        <button className="pack-card">
            {/* <img src={packData.image} alt={packData.packName} className="pack-card-image" /> */}
            <div className="pack-card-content">
                <h2 className="card-title">{pack.packName}</h2>
                <div className='none'>
                    <p className="card-description">{pack.description}</p>
                    <div className="card-include">
                        <p>Incluye:</p>
                        <ul>
                        {pack.include?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                    </div>
                    <div className="card-deliverables">
                        <p>Entregables:</p>
                        <ul>
                            {pack.deliverables?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* <ActionButton label={isContratar ? "Cancelar" : "Solicitar más información"} onClick={handleContratar} className="pack-card-button" /> */}
        </button>
    );
};

export default TarjetaPack;
