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

const oracion3 = (
    <div>
      <pre style={{ fontFamily: 'Merriweather Light', fontSize: '2vh'}}>
        4 planes obligatorios <br />de temática QUEER en Madrid
      </pre>
    </div>
  );
  
export const Cartelera = () => {

    return (
        <div>
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
            <div className='carteleraLaptop'>
                <div className='container'>
                    <div className='row'>
                            <div className='col-3'>
                                <div className='cuadrado1'>
                                    <h6 className='title'>Lorem ipsum</h6>
                                    <h5 className='subtitle'>4 planes obligatorios de temática QUEER en Madrid</h5>
                                    <p className='textoParrafo'>Lorem ipsum  amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                                    <p className='timePublished ferro'>1 hour ago</p>
                                </div>
                            </div>
                            <div className='col-6 with-border2'>
                                <div className='cuadrado2'>
                                <img className='foto1' src="https://placehold.co/630x320" alt="Marcador de posición"/>
                                </div>
                            </div>
                       
                        <div className='col-3'>
                            <div className='cuadradoComplemento1'>
                                <h6 className='title'>Lorem ipsum</h6>
                                <img className='foto2' src="https://placehold.co/280x130" alt="Marcador de posición"/>
                                <h5 className='subtitle' id="subtitleModified">{oracion3}</h5>
                                <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer</p>
                                <p className='timePublished ferro'>25 Feb 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className='lineaArribaDeArriba'></div>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='cuadrado1b'>
                                <h6 className='title2'>Lorem ipsum</h6>
                                <h5 className='subtitle'>4 planes obligatorios de temática QUEER en Madrid</h5>
                                <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                                <p className='timePublished'>2 hours ago</p>
                            </div>
                        </div>
                        <div className='col-6 with-border shamouna'>
                                <div className='cuadrado2b'>
                                    <img className='foto3' src="https://placehold.co/270x200" alt="Marcador de posición"/>
                                </div>
                                <div className='cuadrado2bc'>
                                    <h5 className='subtitle'>4 planes obligatorios de temática QUEER en Madrid</h5>
                                    <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</p>
                                    <p className='timePublished'>Yesterday</p>
                                </div>
                        </div>
                        <div className='col-3'>
                            <div className='cuadradoComplemento'>
                                <h6 className='title' id="titleModififeed">Lorem ipsum</h6>
                                <img src="https://placehold.co/280x130" alt="Marcador de posición"/>
                                <h5 className='subtitle'>4 planes obligatorios de temática QUEER en Madrid</h5>
                                <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer</p>
                                <p className='timePublished'>25 Feb 2024</p>
                            </div>
                        </div>
                    </div> 
                    <div className='lineaArribaDeExtras'></div>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='extras'>
                            <h6>{oracion3}</h6>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                                <p className='timePublished'>25 Feb 2024</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='extras'>
                                <h6>{oracion3}</h6>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                                <p className='timePublished'>25 Feb 2024</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='extras'>
                                <h6>{oracion3}</h6>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                                <p className='timePublished'>25 Feb 2024</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='extras'>
                                <h6>{oracion3}</h6>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                                <p className='timePublished'>25 Feb 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cartelera;