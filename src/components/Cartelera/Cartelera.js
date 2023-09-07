import React from 'react';
import './Cartelera.css'; // Importa los estilos CSS si los tienes

// Importa la imagen y el título
import carteleraImage from '../../assets/r.png'; // Ajusta la ruta de la imagen
import carteleraImage2 from '../../assets/OIP.jpeg'; // Ajusta la ruta de la imagen

const titulo = "El Pela Sappe"; // Ajusta el título
const subtitulo = (
    <>
        Aniversario de la <br />
        ostia tío, joder, vale cumpa
    </>
);
const oracion = (
    <pre>
        En el cuello tengo, H I E L  O
    </pre>
);
const titulo2 = "Clickeame"; // Ajusta el título
const subtitulo2 = (
    <>
        Ariel Gomez Segundo<br />
        "Los chicos al pelotero"
    </>
);
const oracion2 = (
    <pre>
       Se busca convicto de barcelona 
    </pre>
);

export const Cartelera = () => {

    return (
        <div className="cartelera-container">
             <div className="cartelera-title">
                <h6 className="we">{titulo}</h6>
            </div>
            <div className="cartelera-image">
                <img src={carteleraImage} alt="Cartelera" />
            </div>
            <div className="cartelera-subtitulo">
                <h4 className="we">{subtitulo}</h4>
            </div>
            <div className="cartelera-oracion">
                <h5 className="we">{oracion}</h5>
            </div>
            <div className="cartelera-title2">
                <h6 className="we">{titulo2}</h6>
            </div>
            <div className="cartelera-image2">
                <img src={carteleraImage2} alt="Cartelera2" />
            </div>
            <div className="cartelera-subtitulo">
                <h4 className="we">{subtitulo2}</h4>
            </div>
            <div className="cartelera-oracion">
                <h5 className="we">{oracion2}</h5>
            </div>
            <p className='tiempo'>25 Feb 2024</p>
           
            
        </div>
    )
}

export default Cartelera;