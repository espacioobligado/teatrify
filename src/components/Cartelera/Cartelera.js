import React from 'react';
import './Cartelera.css'; // Importa los estilos CSS si los tienes

// Importa la imagen y el título
import carteleraImage from '../../assets/r.png'; // Ajusta la ruta de la imagen
import carteleraImage2 from '../../assets/OIP.jpeg'; // Ajusta la ruta de la imagen
import foto1 from '../../assets/foto1.png'; // Ajusta la ruta de la imagen
import foto2 from '../../assets/foto2.png'; // Ajusta la ruta de la imagen
import foto3 from '../../assets/foto3.png'; // Ajusta la ruta de la imagen
import foto4 from '../../assets/foto4.png'; // Ajusta la ruta de la imagen

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

const oracion2 = (
    <div>
      <pre style={{ fontFamily: 'Merriweather Light', fontSize: '2vh', lineHeight: '2vh',marginBottom:'0px',overflowY:'hidden'}}>
        4 planes obligatorios  <br />de temática QUEER en Madrid
      </pre>
    </div>
  );

const oracion3 = (
    <div>
      <pre style={{ fontFamily: 'Merriweather Light', fontSize: '2.5vh', lineHeight: '2.6vh',marginBottom:'0px',overflowY:'hidden'}}>
        4 planes obligatorios <br />de temática QUEER<br />en Madrid
      </pre>
    </div>
  );

export const Cartelera = () => {
// <div class="grid-container">
            //     <div class="item1">1</div>
            //     <div class="item2">2</div>
            //     <div class="item3">3</div>  
            //     <div class="item4">4</div>
            //     <div class="item5">5</div>
            //     <div class="item6">6</div>
            //     <div class="item7">7</div>
            //     <div class="item8">8</div>
            //     <div class="item9">9</div>
            //     <div class="item10">10</div>
            // </div>
            // _________________
    return (
      <>
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
                    <h6 className="we">{titulo}</h6>
                </div>
                <div className="cartelera-image2">
                    <img src={carteleraImage2} alt="Cartelera2" />
                </div>
                <div className="cartelera-subtitulo">
                    <h4 className="we">{subtitulo}</h4>
                </div>
                <div className="cartelera-oracion">
                    <h5 className="we">{oracion2}</h5>
                </div>
                <p className='tiempo'>25 Feb 2024</p>
            </div>
             <div class="grid-container">
                 <div class="item1">
                    <h6 className='title'>Lorem ipsum</h6>
                    <h5 className='subtitle'>{oracion3}</h5>
                    <p className='textoParrafo'>Lorem ipsum  amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                    <p className='timePublished ferro'>1 hour ago</p>
                 </div>
                 <div class="item2 with-border2">
                    <img className="foto1item2" src={foto1} alt="Kinky Rules pciture" />
                 </div>
                 <div class="item3">
                    <h6 className='title' id='titleModified'>Lorem ipsum</h6>
                        <img className='foto2item3' src={foto3} alt="Cartelera" />          
                        <h5 className='subtitle'>{oracion2}</h5>
                        <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer</p>
                        <p className='timePublished ferro'>25 Feb 2024</p>
                        <h6 className='title'  id='titleModified2'>Lorem ipsum</h6>
                        <img className='foto4item3' src={foto4} alt="Salta que la vida es una fiesta" />
                        <h5 className='subtitle' id="subtitleModified">{oracion2}</h5>
                        <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer</p>
                        <p className='timePublished ferro'>25 Feb 2024</p>
                    </div>  
                 <div class="item4">
                    <h6 className='title'>Lorem ipsum</h6>
                    <h5 className='subtitle'>{oracion3}</h5>
                    <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                    <p className='timePublished'>2 hours ago</p>
                 </div>
                 <div class="item5 with-border">
                    <img className='foto3item5' src={foto2} alt="A cocochito" />
                 </div>
                 <div class="item6">
                    <h6 className='subtitle' id="subtitleItem6Modified">{oracion3}</h6>
                    <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</p>
                    <p className='timePublished'>Yesterday</p>
                 </div>
                 <div class="item7">
                    <h6>{oracion2}</h6>
                    <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                    <p className='timePublished'>25 Feb 2024</p>
                 </div>
                 <div class="item8">
                    <h6>{oracion2}</h6>
                    <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                    <p className='timePublished'>25 Feb 2024</p>
                 </div>
                 <div class="item9">
                    <h6>{oracion2}</h6>
                    <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                    <p className='timePublished'>25 Feb 2024</p>
                 </div>
                 <div class="item10">
                    <h6>{oracion2}</h6> 
                    <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                    <p className='timePublished'>25 Feb 2024</p>
                 </div>
            </div>
            </>
    )
}

export default Cartelera;