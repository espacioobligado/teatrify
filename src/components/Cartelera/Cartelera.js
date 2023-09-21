import React, { useState,useEffect  } from 'react';
import './Cartelera.css';  
import carteleraImage from '../../assets/r.png'; 
import carteleraImage2 from '../../assets/OIP.jpeg'; 
import foto1 from '../../assets/foto1.png';  
import foto2 from '../../assets/foto2.png';  
import foto3 from '../../assets/foto3.png';  
import foto4 from '../../assets/foto4.png';  

import { getFirestore, collection, getDocs  } from 'firebase/firestore';  
import { app } from '../../firebase/firebase';

const titulo = "El Pela Sappe";  
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

  const formatDifference = (noticia) => {
    const { tiempo } = noticia;
    const seconds = tiempo.seconds;
    // const nanoseconds = tiempo.nanoseconds;
  
    const now = new Date();
    const date = new Date(seconds * 1000);
    const differenceInMinutes = Math.floor((now - date) / (1000 * 60));
  
    let formattedDifference = '';
  
    if (differenceInMinutes == 1) {
      formattedDifference = `${differenceInMinutes} minuto`;
    } else if(differenceInMinutes < 60) {
      formattedDifference = `${differenceInMinutes} minutos`;
    } else if (differenceInMinutes < 1440) {
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      formattedDifference = `${differenceInHours} horas`;
    } else {
      const differenceInDays = Math.floor(differenceInMinutes / 1440);
      formattedDifference =
        differenceInDays === 1 ? '1 día' : `${differenceInDays} días`;
    }
    return formattedDifference;
  }

export const Cartelera = () => {

// busco noticia!!!!!!!
    const [primerElemento, setPrimerElemento] = useState(''); 
    const [segundoElemento, setSegundoElemento] = useState('');  
    const [tercerElemento, setTercerElemento] = useState('');  
    const [cuartoElemento, setCuartoElemento] = useState(''); 
    const [quintoElemento, setQuintoElemento] = useState('');  
    const [sextoElemento, setSextoElemento] = useState('');  
    const [septimoElemento, setSeptimoElemento] = useState('');  
    const [octavoElemento, setOctavoElemento] = useState(''); 
    const [novenoElemento, setNovenoElemento] = useState('');  

    const [noticias, setNoticias] = useState([]); // Un arreglo de noticias

    const db = getFirestore(app);
    // console.log('Nombre de la base de datos:', db);
    useEffect(() => {

    const obtenerColecciones = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'noticias'));  
        const noticiasArray  = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          noticiasArray.push(data);  
        });
        setNoticias(noticiasArray);
        
      } catch (error) {
        console.error('Error al obtener colecciones:', error);
      }
    };
    obtenerColecciones();
  }, []); 
  
  useEffect(() => {
    if (noticias.length > 0) {
         
      //const primerElemento = noticias[0]; // O puedes usar noticias.find(elemento => elemento.id === 1); si tienes un campo 'id' en tus documentos.
      const primerElemento = noticias.find(elemento => elemento.id === 1);
      const primerElementoFormatted = formatDifference(primerElemento);

      const nuevoPrimerElemento = {
        ...primerElemento,
        diferenciaDeTiempo: primerElementoFormatted,
      };
      setPrimerElemento(nuevoPrimerElemento);
      
      const segundoElemento = noticias.find(elemento => elemento.id === 2);
      const segundoElementoFormatted = formatDifference(segundoElemento);

      const nuevoSegundoElemento = {
        ...segundoElemento,
        diferenciaDeTiempo: segundoElementoFormatted,
      };
      setSegundoElemento(nuevoSegundoElemento);

      const tercerElemento = noticias.find(elemento => elemento.id === 3);
      const tercerElementoFormatted = formatDifference(tercerElemento);

      const nuevoTercerElemento = {
        ...tercerElemento,
        diferenciaDeTiempo: tercerElementoFormatted,
      };
      setTercerElemento(nuevoTercerElemento);

      const cuartoElemento = noticias.find(elemento => elemento.id === 4);
      const cuartoElementoFormatted = formatDifference(cuartoElemento);
      const nuevoCuartoElemento = {
        ...cuartoElemento,
        diferenciaDeTiempo: cuartoElementoFormatted,
      };
      setCuartoElemento(nuevoCuartoElemento);

      const quintoElemento = noticias.find(elemento => elemento.id === 5);
      const quintoElementoFormatted = formatDifference(quintoElemento);
      const nuevoQuintoElemento = {
        ...quintoElemento,
        diferenciaDeTiempo: quintoElementoFormatted,
      };
      setQuintoElemento(nuevoQuintoElemento);

      const sextoElemento = noticias.find(elemento => elemento.id === 6);
      const sextoElementoFormatted = formatDifference(sextoElemento);
      const nuevoSextoElemento = {
        ...sextoElemento,
        diferenciaDeTiempo: sextoElementoFormatted,
      };
      setSextoElemento(nuevoSextoElemento);

      const septimoElemento = noticias.find(elemento => elemento.id === 7);
      const septimoElementoFormatted = formatDifference(septimoElemento);
      const nuevoSeptimoElemento = {
        ...septimoElemento,
        diferenciaDeTiempo: septimoElementoFormatted,
      };
      setSeptimoElemento(nuevoSeptimoElemento); 

      const octavoElemento = noticias.find(elemento => elemento.id === 8);
      const octavoElementoFormatted = formatDifference(octavoElemento);
      const nuevoOctavoElemento = {
        ...octavoElemento,
        diferenciaDeTiempo: octavoElementoFormatted,
      };
      setOctavoElemento(nuevoOctavoElemento); 

      const novenoElemento = noticias.find(elemento => elemento.id === 9);
      const novenoElementoFormatted = formatDifference(novenoElemento);
      const nuevoNovenoElemento = {
        ...novenoElemento,
        diferenciaDeTiempo: novenoElementoFormatted,
      };
      setNovenoElemento(nuevoNovenoElemento); 
    }
  }, [noticias]);
    // busco noticia!!!!!!!


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
            <div className='cartelera-container'>
                <div>
                    {primerElemento ? (
                     <>
                      <h6 className='title'>{primerElemento.titulo}</h6>
                      <h5 className='subtitle'>{primerElemento.subtitulo}</h5>
                      <img className="foto1item2" src={primerElemento.foto} alt="Kinky Rules picture" />
                      <p className='textoParrafo'>{primerElemento.texto}</p>
                      <p className='timePublished'>hace {primerElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                </div>
                <div>
                    {segundoElemento ? (
                     <>
                      <h6 className='title'>{segundoElemento.titulo}</h6>
                      <h5 className='subtitle'>{segundoElemento.subtitulo}</h5>
                      <img className="foto1item2" src={segundoElemento.foto} alt="Kinky Rules picture" />
                      <p className='textoParrafo'>{segundoElemento.texto}</p>
                      <p className='timePublished'>hace {segundoElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                </div>
                <div>
                    {tercerElemento ? (
                     <>
                      <h6 className='title'>{tercerElemento.titulo}</h6>
                      <h5 className='subtitle'>{tercerElemento.subtitulo}</h5>
                      <img className="foto1item2" src={tercerElemento.foto} alt="Kinky Rules picture" />
                      <p className='textoParrafo'>{tercerElemento.texto}</p>
                      <p className='timePublished'>hace {tercerElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                </div>
                <div>
                    {quintoElemento ? (
                     <>
                      <h6 className='title'>{quintoElemento.titulo}</h6>
                      <h5 className='subtitle'>{quintoElemento.subtitulo}</h5>
                      <img className="foto1item2" src={quintoElemento.foto} alt="Kinky Rules picture" />
                      <p className='textoParrafo'>{quintoElemento.texto}</p>
                      <p className='timePublished'>hace {quintoElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                </div>
                <div>
                    {cuartoElemento ? (
                     <>
                      <h6 className='title'>{cuartoElemento.titulo}</h6>
                      <h5 className='subtitle'>{cuartoElemento.subtitulo}</h5>
                      <p className='textoParrafo'>{cuartoElemento.texto}</p>
                      <p className='timePublished'>hace {cuartoElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                </div>
                <div>
                    {sextoElemento ? (
                     <>
                      <h6 className='title'>{sextoElemento.titulo}</h6>
                      <h5 className='subtitle'>{sextoElemento.subtitulo}</h5>
                      <p className='textoParrafo'>{sextoElemento.texto}</p>
                      <p className='timePublished'>hace {sextoElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                </div>
                <div>
                    {septimoElemento ? (
                     <>
                      <h6 className='title'>{septimoElemento.titulo}</h6>
                      <h5 className='subtitle'>{septimoElemento.subtitulo}</h5>
                      <p className='textoParrafo'>{septimoElemento.texto}</p>
                      <p className='timePublished'>hace {septimoElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                </div>
                <div>
                    {octavoElemento ? (
                     <>
                      <h6 className='title'>{octavoElemento.titulo}</h6>
                      <h5 className='subtitle'>{octavoElemento.subtitulo}</h5>
                      <p className='textoParrafo'>{octavoElemento.texto}</p>
                      <p className='timePublished'>hace {octavoElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                </div>
                <div>
                    {novenoElemento ? (
                     <>
                      <h6 className='title'>{novenoElemento.titulo}</h6>
                      <h5 className='subtitle'>{novenoElemento.subtitulo}</h5>
                      <p className='textoParrafo'>{novenoElemento.texto}</p>
                      <p className='timePublished'>hace {novenoElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                </div>
            </div>
             <div className="grid-container">

                <div className="item01"></div>
                <div className="item02"></div>
                <div className="item03"></div>
                <div className="item04"></div>

                 <div className="item1">
                  {/* {primerElemento ? (
                     <>
                      <h6 className='title'>{primerElemento.titulo}</h6>
                      <h5 className='subtitle'>{primerElemento.subtitulo}</h5>
                      <p className='textoParrafo'>{primerElemento.texto}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )} */}
                    {/* <h6 className='title'>Lorem ipsum</h6>
                    <h5 className='subtitle'>{oracion3}</h5>
                    <p className='textoParrafo'>Lorem ipsum  amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p> */}
                    {/* <p className='timePublished ferro'>1 hour ago</p>   */}
                    {primerElemento ? (
                     <>
                      <h6 className='title'>{primerElemento.titulo}</h6>
                      <h5 className='subtitle'>{primerElemento.subtitulo}</h5>
                      <p className='textoParrafo'>{primerElemento.texto}</p>
                      <p className='timePublished'>hace {primerElemento.diferenciaDeTiempo}</p>
                     </>
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                 </div>
                 <div className="item2 with-border2">
                    {/* <img className="foto1item2" src={foto1} alt="Kinky Rules pciture" /> */}
                    <img className="foto1item2" src={primerElemento.foto} alt="Kinky Rules picture" />
                 </div>
                 <div className="item3">
                    {/* <h6 className='title' id='titleModified'>Lorem ipsum</h6>
                        <img className='foto2item3' src={foto3} alt="Cartelera" />          
                        <h5 className='subtitle'>{oracion2}</h5>
                        <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer</p>
                        <p className='timePublished ferro'>25 Feb 2024</p>
                        <h6 className='title'  id='titleModified2'>Lorem ipsum</h6>
                        <img className='foto4item3' src={foto4} alt="Salta que la vida es una fiesta" />
                        <h5 className='subtitle' id="subtitleModified">{oracion2}</h5>
                        <p className='textoParrafo'>Lorem ipsum dolor sit amet, consectetuer</p>
                        <p className='timePublished ferro'>25 Feb 2024</p> */}
                        <h6 className='title' id='titleModified'>{segundoElemento.titulo}</h6>
                        <img className='foto2item3' src={segundoElemento.foto} alt="Cartelera" />          
                        <h5 className='subtitle'>{segundoElemento.subtitulo}</h5>
                        <p className='textoParrafo'>{segundoElemento.texto}</p>
                        <p className='timePublished'>hace {segundoElemento.diferenciaDeTiempo}</p>
                        <h6 className='title'  id='titleModified2'>{tercerElemento.titulo}</h6>
                        <img className='foto4item3' src={tercerElemento.foto} alt="Salta que la vida es una fiesta" />
                        <h5 className='subtitle' id="subtitleModified">{tercerElemento.subtitulo}</h5>
                        <p className='textoParrafo'>{tercerElemento.texto}</p>
                        <p className='timePublished'>hace {tercerElemento.diferenciaDeTiempo}</p>  
                    </div>  
                 <div className="item4">
                    <h6 className='title'>{cuartoElemento.titulo}</h6>
                    <h5 className='subtitle'>{cuartoElemento.subtitulo}</h5>
                    <p className='textoParrafo'>{cuartoElemento.texto}</p>
                    <p className='timePublished'>hace {cuartoElemento.diferenciaDeTiempo}</p>
                 </div>
                 <div className="item5 with-border">
                    <img className='foto3item5' src={quintoElemento.foto} alt="A cocochito" />
                 </div>
                 <div className="item6">
                    <h6 className='title'>{quintoElemento.titulo}</h6>
                    <h5 className='subtitle' id="subtitleItem6Modified">{quintoElemento.subtitulo}</h5>
                    <p className='textoParrafo'>{quintoElemento.texto}</p>
                    <p className='timePublished'>hace {quintoElemento.diferenciaDeTiempo}</p>
                 </div>
                 <div className="item7">
                    <h6 className='title'>{sextoElemento.titulo}</h6>
                    <h5>{sextoElemento.subtitulo}</h5>
                    <p className='textoParrafo'>{sextoElemento.texto}</p>
                    <p className='timePublished alignDroit'>hace {sextoElemento.diferenciaDeTiempo}</p>
                 </div>
                 <div className="item8">
                    <h6 className='title'>{septimoElemento.titulo}</h6>
                    <h5>{septimoElemento.subtitulo}</h5>
                    <p className='textoParrafo'>{septimoElemento.texto}</p>
                    <p className='timePublished alignDroit'>hace {septimoElemento.diferenciaDeTiempo}</p>
                 </div>
                 <div className="item9">
                    <h6 className='title'>{octavoElemento.titulo}</h6>
                    <h5>{octavoElemento.subtitulo}</h5>
                    <p className='textoParrafo'>{octavoElemento.texto}</p>
                    <p className='timePublished alignDroit'>hace {octavoElemento.diferenciaDeTiempo}</p>
                 </div>
                 <div className="item10">
                    <h6 className='title'>{novenoElemento.titulo}</h6>
                    <h5>{novenoElemento.subtitulo}</h5> 
                    <p className='textoParrafo'>{novenoElemento.texto}</p>
                    <p className='timePublished alignDroit'>hace {novenoElemento.diferenciaDeTiempo}</p>
                 </div>
            </div>
            </>
    )
}

export default Cartelera;