import { useState, useEffect, useContext } from 'react';
import './packCard.css';

import UserContext from '../../context/userContext';
import { useNavigate } from 'react-router';

import Modal from '../modal/modal';

import ActionButton from '../actionButton/actionButton';
import { addPack, removePack } from '../../utils/fetch';

const photoPack = {
    0: "./packs/pack1.png",
    1: "./packs/pack2.png",
    2: "./packs/pack3.png",
    3: "./packs/pack4.png",
}

const className = {
    0: "pack1",
    1: "pack2",
    2: "pack3",
    3: "pack4",
}

const TarjetaPack = ({ pack, onClick, cardClassName, index, id }) => {
    const { user, handlefetchUserData } = useContext(UserContext);
    const [isContratar, setIsContratar] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [packData, setPackData] = useState(null);
    const navigate = useNavigate();

    // function openModal() {
    //     setIsModalOpen(true);
    // }

    // const handleContratar = async () => {
    //     if (user) {
    //         const newContratar = await addPack(pack._id, user._id);
    //         if (isContratar) {
    //             await handledeleteContratar(packData);
    //             setIsContratar(!isContratar);
    //             handlefetchUserData();
    //         }
    //     } else {
    //         alert("Debes iniciar sesión")
    //         navigate("/register");
    //     };
    // };

    // const handledeleteContratar = async (pack) => {
    //     if (user) {
    //         const deleteContratar = await removePack(pack._id, user._id);
    //     }
    // };

    return (
        <button className={cardClassName} onClick={onClick} id={id} >
            <div className="pack-card-image">
                <img src={photoPack[index]} alt="photo" className={className[index]}  />
            </div>
            <div className="pack-card-content">
                <h2 className="card-titlePack">{pack.packName}</h2>
            </div>
        </button>
    );
}

export default TarjetaPack;
