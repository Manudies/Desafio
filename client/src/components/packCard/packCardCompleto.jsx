import { useState, useContext } from "react";
import "./packCardCompleto.css";

import UserContext from "../../context/userContext";
import { useNavigate } from "react-router";

import ActionButton from '../actionButton/actionButton';
import { addPack, sendMail } from '../../utils/fetch';

import Swal from 'sweetalert2';


const classNameCompleto = {
  0: "pack1Completo",
  1: "pack2Completo",
  2: "pack3Completo",
  3: "pack4Completo",
};

const TarjetaPack = ({ pack, index }) => {
  const { user, handlefetchUserData } = useContext(UserContext);
  const [isContratar, setIsContratar] = useState(false);
  const [activeName, setActiveName] = useState(null);
  const [isDeliverablesVisible, setIsDeliverablesVisible] = useState(false);

  const navigate = useNavigate();

  const handleBuyPack = async (pack) => {
    if (user) {
      try {
        Swal.fire({
          title: 'Recopilando información necesaria',
          text: 'En unos momentos, recibiras un correo de confirmación.',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
          });
        
        const response = await sendMail( {

          to: user.email,
          subject: 'Envio de información solicitada',
          text: "holaaaaaa"
          // text: `Hola ${user.username},\n\nGracias por comprar el viaje a ${pack.packName}. Disfruta de tu aventura!\n\nSaludos,\nEl equipo de Horizontes Lejanos`
        });
        await addPack(user._id, pack._id);
        await handlefetchUserData();

        Swal.fire({
          icon: 'success',
          title: 'Envio realizado',
          text: 'Te hemos enviado un correo de confirmación. Por favor revisa tu correo electronico.',
        });

      } catch (error) {
        console.error("Error enviando el correo de confirmación", error);
        // alert("Hubo un error al enviar el correo de confirmación.");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error al enviar el correo de confirmación.',
        });
      }
    } else {
      // alert("Debes iniciar sesión");
      Swal.fire({
        icon: 'warning',
        title: 'Debes iniciar sesión',
        text: 'Para solicitar información de un paquete, debes iniciar sesión.',
      }).then (() => {
        navigate("/register");
      })
    }
  };

  // const handledeleteContratar = async (pack) => {
  //   if (user) {
  //     await removePack(user._id, pack._id);
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
    setActiveName(isDeliverablesVisible ? null : "Entregables");
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
        {/* <div alt="photo" className={classNameCompleto[1]} /> */}

         <img src={"./packs/pack"+(index+1)+".png"} alt="photo" className="photo-pack" /> 
      </div>

      <div className="card-body">
        <div className="pack-card-body">
          <p>{pack.description}</p>
          <ActionButton
            label={isContratar ? "Cancelar" : "Solicitar presupuesto"}
            className={"contratar"}
            onClick={() => handleBuyPack(pack)}
          />
        </div>
        <div className="card-includes">
          <p className="packIncluye">Este pack incluye:</p>
          <ul>
            {pack.include.map((item, index) => (
              <li key={index} onClick={() => toggleInclude(index)}>
                {item.nombre}
                {activeName === index && (
                  <p className="definition">{item.definition}</p>
                )}
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
