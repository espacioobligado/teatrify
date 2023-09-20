import React, { useState,useEffect  } from 'react';
import './Footer.css';
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


const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);  
  };
 
  return (
      <>
      <div className='footer'>
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

        <div className="grid-Footer2">
            <div className="item1footer2">
                <ul className="list-unstyled">
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                    <li>Cookies Policy</li>
                </ul>
            </div>
            
            <div className="item2footer2">
                <ul className="list-unstyled">
                    <li>Manage Cookies</li>
                    <li>Accessibility</li>
                </ul>
            </div>

            <div className="item3footer2">
              <ul className="list-unstyled social-icons">
                <li>
                  <a href="https://www.facebook.com" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>  

            <div className="item4footer2">
                <h6>Subscribite y mantenete informado de las noticias actuales</h6>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer</p>
            </div>

            <div className="item5footer2 btnSubscribe">
                <button className="btn">Subscribe</button>
            </div>
         </div>
      </>
  );
};

export default Footer;
