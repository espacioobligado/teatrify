import React, { useState,useEffect  } from 'react';
import './CustomModal.css';
import logoImage from '../../assets/logo_preview_rev_2.png';
import Modal from 'react-modal';  

const subscribite = (
  <>
     Subscribite y  <br />mantenete <br />informado de <br />las noticias actuales
  </>
);
const subscribite2 = (
  <>
    Ia tu sabe Ia tu sabe Ia tu sabeIa, tu sabe Ia tsabe Isdda yepoaa r,<br /> tu sabeu sabe u sabe u
  </>
)

const CustomModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);  
  };
 
  return (
        <div>
              <img
                src={logoImage}
                alt="Logo"
                className={`header_logo2 ${modalIsOpen ? 'active' : ''}`}
                onClick={toggleModal}
              />

              <Modal closeTimeoutMS={1000} 
                isOpen={modalIsOpen}
                className={`custom-modal`}
                overlayClassName="custom-modal-overlay"
              >
                <div className="modal-content">
                  <h1 className="subscribite">{subscribite}</h1>
                  <h4 className="subscribite2">{subscribite2}</h4>
                  <button className="subscribe-button" onClick={toggleModal}>
                    <h6>Subscribe</h6>
                  </button>
                </div>
              </Modal>
            </div>
  );
};

export default CustomModal;
