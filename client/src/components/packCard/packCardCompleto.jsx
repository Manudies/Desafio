import { useState, useEffect, useContext } from 'react';
import './packCardCompleto.css';

import UserContext from '../../context/userContext';
import { useNavigate } from 'react-router';

import Modal from '../modal/modal';

import ActionButton from '../actionButton/actionButton';
import { addPack, removePack, sendMail } from '../../utils/fetch';

const classNameCompleto = {
  0: "pack1Completo",
  1: "pack2Completo",
  2: "pack3Completo",
  3: "pack4Completo",
}

const TarjetaPack = ({ pack, index }) => {
  const { user, handlefetchUserData } = useContext(UserContext);
  const [isContratar, setIsContratar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packData, setPackData] = useState(null);
  const [activeName, setActiveName] = useState(null);
  const [isDeliverablesVisible, setIsDeliverablesVisible] = useState(false);


  const navigate = useNavigate();

  const handleBuyPack = async (pack) => {
    if (user) {
      try {
        const response = await sendMail( {

          to: user.email,
          subject: 'Confirmación de compra',
          text: `Hola ${user.username},\n\nGracias por comprar el viaje a ${pack.packName}. Disfruta de tu aventura!\n\nSaludos,\nEl equipo de Horizontes Lejanos`
        });
        alert(`Correo de confirmación enviado a ${user.email}!`);
        await handledeleteContratar(pack);
      } catch (error) {
        console.error("Error enviando el correo de confirmación", error);
        alert("Hubo un error al enviar el correo de confirmación.");
      }
    } else {
      alert("Debes iniciar sesión");
      navigate("/register");
    }
  };

  // const handledeleteContratar = async (pack) => {
  //   if (user) {
  //     // await removePack(user._id, pack._id);
  //     await handlefetchUserData();
  //     const deleteContratar = await removePack(user._id, pack._id);
  //   } else {
  //     alert("Debes iniciar sesión");
  //     navigate("/register");
  //   }
  // };

  // const userHadPack = () => {
  //     if (!user) {
  //         return false;
  //     }
  //     return user.packs.some(userPack => userPack._id === packData._id);
  // };

  const toggleDeliverables = () => {
    setIsDeliverablesVisible(!isDeliverablesVisible);
    setActiveName(isDeliverablesVisible ? null : 'Entregables');
  };

  const toggleInclude = (index) => {
    if (isDeliverablesVisible) {
      setIsDeliverablesVisible(false);
    }
    setActiveName(activeName === index ? null : index);
  };

  return (
    <div className="packCompleto">
      <div className="pack-card-header">
        <h2 className="card-title">{pack.packName}</h2>
        <div alt="photo" className={classNameCompleto[1]} />

        {/* <img src="./packs/pack1.png" alt="photo" className="photo-pack" /> */}
      </div>

      <div className='card-body'>
        <div className="pack-card-body">
          <p >{pack.description}</p>
          <ActionButton label={isContratar ? "Cancelar" : "Solicitar presupuesto"} className={"contratar"} onClick={() => handleBuyPack(pack)} />
        </div>
        <div className="card-includes">
          <p className='packIncluye'>Este pack incluye:</p>
          <ul>
            {pack.include.map((item, index) => (
              <li key={index} onClick={() => toggleInclude(index)}>
                {item.nombre}
                {activeName === index && <p className="definition">{item.definition}</p>}
              </li>
            ))}
          </ul>
          <div className="card-deliverables">
            <p onClick={toggleDeliverables}>Entregables</p>
            {isDeliverablesVisible && (
              <ul>
                {pack.deliverables?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaPack;
