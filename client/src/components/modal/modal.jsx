import "./modal.css"
const Modal = ({children,onClose, className="modal-body"}) =>{
    
    const handleStopPropagation = (e)=>{
        e.stopPropagation();
    }
    return (
        <div className="modal" onClick={onClose}>
            <div className={className} onClick={handleStopPropagation}>
                <div className="modal-header">
                    <button onClick={onClose} className="absolute_right_top">X</button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;


/*
  const[isModalOpen, setIsModalOpen] = useState(false)
  function openModal(){
    setIsModalOpen(true)
  }



  {isModalOpen &&
          <Modal isOpen={true} onClose={()=> {
            setIsModalOpen(false)
            }}>
            <div id="modalNombre">
              <div id="divModalNombre">
              </div>
              <div id='modalInferior'>
                <div id="divModalIMG">
                  <img />
                </div>
              </div>
            </div>
          </Modal>
        }


*/