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
    const navigate = useNavigate();

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

    const getPhaseName = (phaseName) => {
        let parts = phaseName.split(':');
        console.log(parts);
        parts = parts[1].split(' ');
        return parts.length > 1 ? parts[1] : phaseName;
    };

    return (
        <div className="modulo-card">
            <div className="modulo-card-content">
                <h2 className="card-title">{getPhaseName((modulo.phaseName).toUpperCase())}</h2>
                <p className="description">{modulo.description}</p>
                <div className="details">
                    <div className="detail-item-title">
                        <p className="detail-title">Objetivo</p>
                        <p className="detail-content">{modulo.objetive}</p>
                    </div>
                    <div className="detail-item-duration">
                        <p className="detail-title">Duración</p>
                        <p className="detail-content">{modulo.duration}</p>
                    </div>
                </div>
            </div>
            <div className="learn-more-container">
                <button className="learn-more-button">Quiero saber más</button>
            </div>
        </div>
    );
};

export default TarjetaModulo;
