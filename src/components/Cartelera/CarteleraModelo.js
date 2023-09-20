import React, { useState,useEffect,useRef  } from 'react';
import './CarteleraModelo.css';  
import carteleraImage from '../../assets/r.png'; 
import carteleraImage2 from '../../assets/OIP.jpeg'; 
import foto1 from '../../assets/foto1.png';  
import foto2 from '../../assets/foto2.png';  
import foto3 from '../../assets/foto3.png';  
import foto4 from '../../assets/foto4.png';  
import { updateDoc, doc } from 'firebase/firestore'; // Importa las funciones necesarias de Firebase
import { getStorage, ref, getDownloadURL,uploadBytes } from 'firebase/storage'; // Importa las funciones necesarias de Firebase Storage

import { getFirestore, collection, getDocs,getDoc,DocumentReference  } from 'firebase/firestore';  
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
  
    const now = new Date();
    const date = new Date(seconds * 1000);
    const differenceInMinutes = Math.floor((now - date) / (1000 * 60));
  
    let formattedDifference = '';
  
    if (differenceInMinutes < 60) {
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

export const CarteleraModelo = () => {
  // subir foto al sotrage!
  const [selectedFile10, setSelectedFile10] = useState(null);
  const [uploading10, setUploading10] = useState(false);

  const handleFileChange10 = (e) => {
    const file = e.target.files[0];
    setSelectedFile10(file);
  };

  const handleUpload10 = async () => {
    if (!selectedFile10) {
      return;
    }

    // Configura la referencia de Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `/${selectedFile10.name}`);

    // Inicia la subida del archivo
    setUploading10(true);
    await uploadBytes(storageRef, selectedFile10);
    setUploading10(false);

    // Limpia el estado después de la subida
    setSelectedFile10(null);
  };
  // ____
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
          const idReal = doc.id;  
          const data = doc.data();
          const noticiaConId = { ...data, idReal }; 
          noticiasArray.push(noticiaConId);  
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
      
      const primerElemento = noticias.find(elemento => elemento.id === 1);
      const primerElementoFormatted = formatDifference(primerElemento);

      const nuevoPrimerElemento = {
        ...primerElemento,
        diferenciaDeTiempo: primerElementoFormatted,
      };
      setPrimerElemento(nuevoPrimerElemento);
      setImagenActual1(nuevoPrimerElemento.foto);
      const segundoElemento = noticias.find(elemento => elemento.id === 2);
      const segundoElementoFormatted = formatDifference(segundoElemento);

      const nuevoSegundoElemento = {
        ...segundoElemento,
        diferenciaDeTiempo: segundoElementoFormatted,
      };
      setSegundoElemento(nuevoSegundoElemento);
      setImagenActual2(nuevoSegundoElemento.foto);
      
      const tercerElemento = noticias.find(elemento => elemento.id === 3);
      const tercerElementoFormatted = formatDifference(tercerElemento);

      const nuevoTercerElemento = {
        ...tercerElemento,
        diferenciaDeTiempo: tercerElementoFormatted,
      };
      setTercerElemento(nuevoTercerElemento);
      setImagenActual3(nuevoTercerElemento.foto);
      
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
      setImagenActual4(nuevoQuintoElemento.foto);

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

            
  // editar inicia
  const [editMode1, setEditMode1] = useState(false);
  const [editMode2, setEditMode2] = useState(false);
  const [editMode3, setEditMode3] = useState(false);
  const [editMode4, setEditMode4] = useState(false);
  const [editMode5, setEditMode5] = useState(false);
  const [editMode6, setEditMode6] = useState(false);
  const [editMode7, setEditMode7] = useState(false);
  const [editMode8, setEditMode8] = useState(false);
  const [editMode9, setEditMode9] = useState(false);

  const [editedTitle1, setEditedTitle1] = useState('');
  const [editedSubtitle1, setEditedSubtitle1] = useState('');
  const [editedText1, setEditedText1] = useState('');

  
  const [editedTitle2, setEditedTitle2] = useState('');
  const [editedSubtitle2, setEditedSubtitle2] = useState('');
  const [editedText2, setEditedText2] = useState('');

  const [editedTitle3, setEditedTitle3] = useState('');
  const [editedSubtitle3, setEditedSubtitle3] = useState('');
  const [editedText3, setEditedText3] = useState('');

  const [editedTitle4, setEditedTitle4] = useState('');
  const [editedSubtitle4, setEditedSubtitle4] = useState('');
  const [editedText4, setEditedText4] = useState('');

  const [editedTitle5, setEditedTitle5] = useState('');
  const [editedSubtitle5, setEditedSubtitle5] = useState('');
  const [editedText5, setEditedText5] = useState('');

  const [editedSubtitle6, setEditedSubtitle6] = useState('');
  const [editedText6, setEditedText6] = useState('');

  const [editedSubtitle7, setEditedSubtitle7] = useState('');
  const [editedText7, setEditedText7] = useState('');

  const [editedSubtitle8, setEditedSubtitle8] = useState('');
  const [editedText8, setEditedText8] = useState('');

  const [editedSubtitle9, setEditedSubtitle9] = useState('');
  const [editedText9, setEditedText9] = useState('');
  
  useEffect(() => {
    // Cuando se cambia el primerElemento, actualiza los valores editados
    if (editMode1) {
      setEditedTitle1(primerElemento.titulo);
      setEditedSubtitle1(primerElemento.subtitulo);
      setEditedText1(primerElemento.texto);
    }
  }, [editMode1, primerElemento]);

  useEffect(() => {
    // Cuando se cambia el primerElemento, actualiza los valores editados
    if (editMode2) {
      setEditedTitle2(segundoElemento.titulo);
      setEditedSubtitle2(segundoElemento.subtitulo);
      setEditedText2(segundoElemento.texto);
    }
  }, [editMode2, segundoElemento]);

  useEffect(() => {
    if (editMode3) {
      setEditedSubtitle3(tercerElemento.subtitulo);
      setEditedText3(tercerElemento.texto);
    }
  }, [editMode3, tercerElemento]);

  useEffect(() => {
    if (editMode4) {
      setEditedTitle4(cuartoElemento.titulo);
      setEditedSubtitle4(cuartoElemento.subtitulo);
      setEditedText4(cuartoElemento.texto);
    }
  }, [editMode4, cuartoElemento]);

  useEffect(() => {
    if (editMode5) {
      setEditedSubtitle5(quintoElemento.subtitulo);
      setEditedText5(quintoElemento.texto);
    }
  }, [editMode5, quintoElemento]);

  useEffect(() => {
    if (editMode6) {
      setEditedSubtitle6(sextoElemento.subtitulo);
      setEditedText6(sextoElemento.texto);
    }
  }, [editMode6, sextoElemento]);

  useEffect(() => {
    if (editMode7) {
      setEditedSubtitle7(septimoElemento.subtitulo);
      setEditedText7(septimoElemento.texto);
    }
  }, [editMode7, septimoElemento]);

  useEffect(() => {
    if (editMode8) {
      setEditedSubtitle8(octavoElemento.subtitulo);
      setEditedText8(octavoElemento.texto);
    }
  }, [editMode8, octavoElemento]);

  useEffect(() => {
    if (editMode9) {
      setEditedSubtitle9(novenoElemento.subtitulo);
      setEditedText9(novenoElemento.texto);
    }
  }, [editMode9, novenoElemento]);

  const handleEditClick1 = () => {
    setEditMode1(!editMode1);
  };

  const handleEditClick2 = () => {
    setEditMode2(!editMode2);
  };
  const handleEditClick3 = () => {
    setEditMode3(!editMode3);
  };
  const handleEditClick4 = () => {
    setEditMode4(!editMode4);
  };
  const handleEditClick5 = () => {
    setEditMode5(!editMode5);
  };
  const handleEditClick6 = () => {
    setEditMode6(!editMode6);
  };

  const handleEditClick7 = () => {
    setEditMode7(!editMode7);
  };

  const handleEditClick8 = () => {
    setEditMode8(!editMode8);
  };

  const handleEditClick9 = () => {
    setEditMode9(!editMode9);
  };
  // editar

// save clickl
const handleSaveClick = async (id) => {
  if (!id) {
    console.error('El ID del elemento es inválido.');
    return;
  }
  
  try {
    const docRef = doc(db, 'noticias', id);
    console.log(docRef.id)

  const a = docRef.id
  const astring = a.toString();

    const elementoEncontrado = noticias.find((e) => e.idReal === astring);

 if(elementoEncontrado.id == 1){

   const updatedData1 = {
     titulo:  editedTitle1,
     subtitulo: editedSubtitle1,
     texto: editedText1, 
    };
    
    await updateDoc(docRef, updatedData1);
    setEditMode1(false);
  }

  if(elementoEncontrado.id == 2){

    const updatedData2 = {
      titulo:  editedTitle2,
      subtitulo: editedSubtitle2,
      texto: editedText2, 
     };
     
     await updateDoc(docRef, updatedData2);
     setEditMode2(false);
   }

    if(elementoEncontrado.id == 3){
 
     const updatedData3 = {
       titulo:  editedTitle3,
       subtitulo: editedSubtitle3,
       texto: editedText3, 
      };
      
      await updateDoc(docRef, updatedData3);
      setEditMode3(false);
     }
     if(elementoEncontrado.id == 4){
       const updatedData4 = {
         titulo:  editedTitle4,
         subtitulo: editedSubtitle4,
         texto: editedText4, 
        };
        
        await updateDoc(docRef, updatedData4);
        setEditMode4(false);
     }
    if(elementoEncontrado.id == 5){
      console.log('pasando')
 
     const updatedData5 = {
       subtitulo: editedSubtitle5,
       texto: editedText5, 
      };
      
      await updateDoc(docRef, updatedData5);
      setEditMode5(false);
    }

   if(elementoEncontrado.id == 6){

    const updatedData6 = {
      subtitulo: editedSubtitle6,
      texto: editedText6, 
     };
     
     await updateDoc(docRef, updatedData6);
     setEditMode6(false);
   }
   if(elementoEncontrado.id == 7){

    const updatedData7 = {
      subtitulo: editedSubtitle7,
      texto: editedText7, 
     };
     
     await updateDoc(docRef, updatedData7);
     setEditMode7(false);
  }
   if(elementoEncontrado.id == 8){

    const updatedData8 = {
      subtitulo: editedSubtitle8,
      texto: editedText8, 
     };
     
     await updateDoc(docRef, updatedData8);
     setEditMode8(false);
   }
   if(elementoEncontrado.id == 9){

    const updatedData9 = {
      subtitulo: editedSubtitle9,
      texto: editedText9, 
     };
     
     await updateDoc(docRef, updatedData9);
     setEditMode9(false);
   }
  } catch (error) {
    console.error('Error al guardar en la base de datos:', error);
  }
};
// save clickl

const [imagenActual1, setImagenActual1] = useState(''); // Inicializa con la imagen existente
const [imagenActual2, setImagenActual2] = useState(''); // Inicializa con la imagen existente
const [imagenActual3, setImagenActual3] = useState(''); // Inicializa con la imagen existente
const [imagenActual4, setImagenActual4] = useState(''); // Inicializa con la imagen existente

const inputFileRef1 = useRef(null);
const inputFileRef2 = useRef(null);
const inputFileRef3 = useRef(null);
const inputFileRef4 = useRef(null);

const handleFileChange1 = async(e) => {
  const selectedFile = e.target.files[0]; // Obtiene el archivo seleccionado
  if (selectedFile) {
    // Realiza alguna acción con el archivo seleccionado, como cargarlo o procesarlo
    console.log('Archivo seleccionado:', selectedFile.name);

    const storage = getStorage();
    const storageRef = ref(storage, selectedFile.name);
    getDownloadURL(storageRef)
    .then(async(url) => {
      setImagenActual1(url)

      const docRef1 = doc(db, 'noticias', '4DzixIWxEHn1An3iJOWG');
          const updatedData1b = {
            foto:  url,
           };
          await updateDoc(docRef1, updatedData1b);
    }) 
     
    console.log(storageRef);
    
    // Obtiene la URL de descarga del archivo subido
    const url = await getDownloadURL(storageRef);

    const objectURL = URL.createObjectURL(selectedFile);
    //setImagenActual('https://firebasestorage.googleapis.com/v0/b/teatrify-a7ae6.appspot.com/o/img2.jpg?alt=media&token=eb576e5e-a8c5-4dda-9ee8-7049f6c4ed20');
  }
};

const handleFileChange2 = async(e) => {
  const selectedFile = e.target.files[0]; // Obtiene el archivo seleccionado
  if (selectedFile) {
    // Realiza alguna acción con el archivo seleccionado, como cargarlo o procesarlo
    console.log('Archivo seleccionado:', selectedFile.name);

    const storage = getStorage();
    const storageRef = ref(storage, selectedFile.name);
    getDownloadURL(storageRef)

    .then(async(url) => {
      setImagenActual2(url)
      
      const docRef2 = doc(db, 'noticias', 'EBNpYrwFY0oQdrwJgDL0');
          const updatedData2b = {
            foto:  url,
           };
          await updateDoc(docRef2, updatedData2b);
    })
    
    console.log(storageRef);
    
    // Obtiene la URL de descarga del archivo subido
    const url = await getDownloadURL(storageRef);

    const objectURL = URL.createObjectURL(selectedFile);
    //setImagenActual('https://firebasestorage.googleapis.com/v0/b/teatrify-a7ae6.appspot.com/o/img2.jpg?alt=media&token=eb576e5e-a8c5-4dda-9ee8-7049f6c4ed20');
  }
};

const handleFileChange3 = async(e) => {
  const selectedFile = e.target.files[0]; // Obtiene el archivo seleccionado
  if (selectedFile) {
    // Realiza alguna acción con el archivo seleccionado, como cargarlo o procesarlo
    console.log('Archivo seleccionado:', selectedFile.name);

    const storage = getStorage();
    const storageRef = ref(storage, selectedFile.name);
    getDownloadURL(storageRef)

    .then(async(url) => {
      setImagenActual3(url)
      const docRef3 = doc(db, 'noticias', 'Gwjo1thZf4UHPZATjTne');
      const updatedData3b = {
        foto:  url,
       };
      await updateDoc(docRef3, updatedData3b);
    })
  
    console.log(storageRef);
    
    // Obtiene la URL de descarga del archivo subido
    const url = await getDownloadURL(storageRef);

    const objectURL = URL.createObjectURL(selectedFile);
    //setImagenActual('https://firebasestorage.googleapis.com/v0/b/teatrify-a7ae6.appspot.com/o/img2.jpg?alt=media&token=eb576e5e-a8c5-4dda-9ee8-7049f6c4ed20');
  }
};

const handleFileChange4 = async(e) => {
  const selectedFile = e.target.files[0]; // Obtiene el archivo seleccionado
  if (selectedFile) {
    // Realiza alguna acción con el archivo seleccionado, como cargarlo o procesarlo
    console.log('Archivo seleccionado:', selectedFile.name);

    const storage = getStorage();
    const storageRef = ref(storage, selectedFile.name);
    getDownloadURL(storageRef)
     
    .then(async(url) => {
      setImagenActual4(url)
      
      const docRef4 = doc(db, 'noticias', 'gn73knqbe5XmcwgE833l');
          const updatedData4b = {
            foto:  url,
           };
          await updateDoc(docRef4, updatedData4b);
    })
    console.log(storageRef);
    
    // Obtiene la URL de descarga del archivo subido
    //const url = await getDownloadURL(storageRef);

    //const objectURL = URL.createObjectURL(selectedFile);
    //setImagenActual('https://firebasestorage.googleapis.com/v0/b/teatrify-a7ae6.appspot.com/o/img2.jpg?alt=media&token=eb576e5e-a8c5-4dda-9ee8-7049f6c4ed20');
  }

};

    return (
      <>
       <div>
      <input type="file" onChange={handleFileChange10} />
      <button onClick={handleUpload10} disabled={!selectedFile10 || uploading10}>
        {uploading10 ? 'Subiendo...' : 'Subir Archivo'}
      </button>
      {uploading10 && <div>Subiendo archivo...</div>}
    </div>

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
             <div className="grid-container">

                <div className="item01"></div>
                <div className="item02"></div>
                <div className="item03"></div>
                <div className="item04"></div>

                <div className="item1">
                <>
                  <button onClick={() => handleEditClick1(primerElemento.idReal)}>
                  {editMode1 ? 'Cancelar' : 'Editar1'}
                </button>
                    {editMode1 ? (
                  <>
                    <input
                      type="text"
                      value={editedTitle1}
                      onChange={(e) => setEditedTitle1(e.target.value)}
                    />
                    <input
                      type="text"
                      value={editedSubtitle1}
                      onChange={(e) => setEditedSubtitle1(e.target.value)}
                    />
                    <textarea
                      value={editedText1}
                      onChange={(e) => setEditedText1(e.target.value)}
                    />
                    <button onClick={() => handleSaveClick(primerElemento.idReal)}>Guardar</button>
                  </>
                ) : (
                  <>
                    <h6 className='title'>{primerElemento.titulo}</h6>
                    <h5 className='subtitle'>{primerElemento.subtitulo}</h5>
                    <p className='textoParrafo'>{primerElemento.texto}</p>
                    <p className='timePublished'>{primerElemento.diferenciaDeTiempo}</p>
                  </>
                )}
                  </>
                 </div>
                 <div className="item2 with-border2">
                    {/* <img className="foto1item2" src={primerElemento.foto} alt="Kinky Rules picture" 
                        onClick={() => inputFileRef.current.click()} // Cuando se hace clic en la imagen, activa el input file
                        />
                    <input
                    type="file"
                    accept="image/*" // Puedes limitar el tipo de archivos aceptados si lo deseas
                    style={{ display: 'none' }}
                    ref={inputFileRef} // Debes crear una referencia al input file
                    onChange={(e) => handleFileChange(e)} // Maneja el cambio de archivo
                  /> */}
                   <img
                    className="foto1item2"
                    src={imagenActual1}
                    alt="Kinky Rules picture"
                    onClick={() => inputFileRef1.current.click()} // Cuando se hace clic en la imagen, activa el input file
                  />
                  <input
                    type="file"
                    accept="image/*" // Puedes limitar el tipo de archivos aceptados si lo deseas
                    style={{ display: 'none' }}
                    ref={inputFileRef1} // Asignar la referencia al input file
                    onChange={(e) => handleFileChange1(e)} // Maneja el cambio de archivo
                  />
                 </div>
                 <div className="item3">
                  <>
                    <button onClick={() => handleEditClick2(segundoElemento.idReal)}>
                      {editMode2 ? 'Cancelar' : 'Editar2'}
                    </button>
                    {editMode2 ? (
                      <>
                        <input
                          type="text"
                          value={editedTitle2}
                          onChange={(e) => setEditedTitle2(e.target.value)}
                        />
                        <input
                          type="text"
                          value={editedSubtitle2}
                          onChange={(e) => setEditedSubtitle2(e.target.value)}
                        />
                        <textarea
                          value={editedText2}
                          onChange={(e) => setEditedText2(e.target.value)}
                        />
                        <button onClick={() => handleSaveClick(segundoElemento.idReal)}>Guardar</button>
                      </>
                    ) : (
                      <>
                            <h6 className='title' id='titleModified'>{segundoElemento.titulo}</h6>
                            <img className='foto2item3' src={imagenActual2} alt="Cartelera" 
                            onClick={() => inputFileRef2.current.click()} // Cuando se hace clic en la imagen, activa el input file
                            />  
                            <input
                              type="file"
                              accept="image/*" // Puedes limitar el tipo de archivos aceptados si lo deseas
                              style={{ display: 'none' }}
                              ref={inputFileRef2} // Asignar la referencia al input file
                              onChange={(e) => handleFileChange2(e)} // Maneja el cambio de archivo
                            />
                            {/* ñññ         */}
                            <h5 className='subtitle'>{segundoElemento.subtitulo}</h5>
                            <p className='textoParrafo'>{segundoElemento.texto}</p>
                            <p className='timePublished'>{segundoElemento.diferenciaDeTiempo}</p>
                      </>
                    )}
                    <button onClick={() => handleEditClick3(tercerElemento.idReal)}>
                    {editMode3 ? 'Cancelar' : 'Editar3'}
                    </button>
                    {editMode3 ? (
                      <>
                        <input
                          type="text"
                          value={editedTitle3}
                          onChange={(e) => setEditedTitle3(e.target.value)}
                        />
                        <input
                          type="text"
                          value={editedSubtitle3}
                          onChange={(e) => setEditedSubtitle3(e.target.value)}
                        />
                        <textarea
                          value={editedText3}
                          onChange={(e) => setEditedText3(e.target.value)}
                        />
                        <button onClick={() => handleSaveClick(tercerElemento.idReal)}>Guardar</button>
                      </>
                    ) : (
                      <>
                            <h6 className='title'  id='titleModified2'>{tercerElemento.titulo}</h6>
                            <img className='foto4item3' src={imagenActual3} alt="Salta que la vida es una fiesta" 
                              onClick={() => inputFileRef4.current.click()} // Cuando se hace clic en la imagen, activa el input file
                              />
                              <input
                                type="file"
                                accept="image/*" // Puedes limitar el tipo de archivos aceptados si lo deseas
                                style={{ display: 'none' }}
                                ref={inputFileRef4} // Asignar la referencia al input file
                                onChange={(e) => handleFileChange3(e)} // Maneja el cambio de archivo
                            />
                            <h5 className='subtitle' id="subtitleModified">{oracion2}</h5>
                            <p className='textoParrafo'>{tercerElemento.texto}</p>
                            <p className='timePublished'>{tercerElemento.diferenciaDeTiempo}</p>  
                    </>
                    )}
                  </>
                </div>

                 <div className="item4">
                 <>
                  <button onClick={() => handleEditClick4(cuartoElemento.idReal)}>
                    {editMode4 ? 'Cancelar' : 'Editar4'}
                 </button>
                  {editMode4 ? (
                    <>
                    <input
                        type="text"
                        value={editedTitle4}
                        onChange={(e) => setEditedTitle4(e.target.value)}
                      />
                      <input
                        type="text"
                        value={editedSubtitle4}
                        onChange={(e) => setEditedSubtitle4(e.target.value)}
                      />
                      <textarea
                        value={editedText4}
                        onChange={(e) => setEditedText4(e.target.value)}
                      />
                      <button onClick={() => handleSaveClick(cuartoElemento.idReal)}>Guardar</button>
                    </>
                  ) : (
                    <>
                      <h6 className='title'>{cuartoElemento.titulo}</h6>
                      <h5 className='subtitle'>{cuartoElemento.subtitulo}</h5>
                      <p className='textoParrafo'>{cuartoElemento.texto}</p>
                      <p className='timePublished'>{cuartoElemento.diferenciaDeTiempo}</p>
                    </>
                  )}
                  </>
                 </div>
                 <div className="item5 with-border">
                    <img className='foto3item5' src={imagenActual4} alt="A cocochito" 
                     onClick={() => inputFileRef3.current.click()} // Cuando se hace clic en la imagen, activa el input file
                    />
                    <input
                      type="file"
                      accept="image/*" // Puedes limitar el tipo de archivos aceptados si lo deseas
                      style={{ display: 'none' }}
                      ref={inputFileRef3} // Asignar la referencia al input file
                      onChange={(e) => handleFileChange4(e)} // Maneja el cambio de archivo
                    />
                 </div>
                 <div className="item6">
                  <>
                    <button onClick={() => handleEditClick5(quintoElemento.idReal)}>
                      {editMode5 ? 'Cancelar' : 'Editar5'}
                    </button>
                    {editMode5 ? (
                      <>
                        <input
                          type="text"
                          value={editedSubtitle5}
                          onChange={(e) => setEditedSubtitle5(e.target.value)}
                        />
                        <textarea
                          value={editedText5}
                          onChange={(e) => setEditedText5(e.target.value)}
                        />
                        <button onClick={() => handleSaveClick(quintoElemento.idReal)}>Guardar</button>
                      </>
                      ) : (
                      <>
                        <h6 className='subtitle' id="subtitleItem6Modified">{quintoElemento.subtitulo}</h6>
                        <p className='textoParrafo'>{quintoElemento.texto}</p>
                        <p className='timePublished'>{quintoElemento.diferenciaDeTiempo}</p>
                      </>
                    )}
                  </>
                 </div>
                 <div className="item7modelo">
                 <>
                  <button onClick={() => handleEditClick6(sextoElemento.idReal)}>
                    {editMode6 ? 'Cancelar' : 'Editar'}
                  </button>
                  {editMode6 ? (
                    <>
                      <input
                        type="text"
                        value={editedSubtitle6}
                        onChange={(e) => setEditedSubtitle6(e.target.value)}
                      />
                      <textarea
                        value={editedText6}
                        onChange={(e) => setEditedText6(e.target.value)}
                      />
                      <button onClick={() => handleSaveClick(sextoElemento.idReal)}>Guardar</button>
                    </>
                  ) : (
                    <>
                      <h6>{sextoElemento.subtitulo}</h6>
                      <p className='textoParrafo'>{sextoElemento.texto}</p>
                      <p className='timePublished'>{sextoElemento.diferenciaDeTiempo}</p>
                    </>
                  )}
                  </>
                 </div>
                 <div className="item8modelo">
                 <>
                  <button onClick={() => handleEditClick7(septimoElemento.idReal)}>
                  {editMode7 ? 'Cancelar' : 'Editar'}
                </button>
                 {editMode7 ? (
                    <>
                      <input
                        type="text"
                        value={editedSubtitle7}
                        onChange={(e) => setEditedSubtitle7(e.target.value)}
                      />
                      <textarea
                        value={editedText7}
                        onChange={(e) => setEditedText7(e.target.value)}
                      />
                      <button onClick={() => handleSaveClick(septimoElemento.idReal)}>Guardar</button>
                    </>
                  ) : (
                    <>
                      <h6>{septimoElemento.subtitulo}</h6>
                      <p className='textoParrafo'>{septimoElemento.texto}</p>
                      <p className='timePublished'>{septimoElemento.diferenciaDeTiempo}</p>
                    </>
                  )}
                  </>
                   
                 </div>
                 <div className="item9modelo">
                   <>
                  <button onClick={() => handleEditClick8(octavoElemento.idReal)}>
                  {editMode8 ? 'Cancelar' : 'Editar'}
                </button>
                 {editMode8 ? (
                    <>
                      <input
                        type="text"
                        value={editedSubtitle8}
                        onChange={(e) => setEditedSubtitle8(e.target.value)}
                      />
                      <textarea
                        value={editedText8}
                        onChange={(e) => setEditedText8(e.target.value)}
                      />
                      <button onClick={() => handleSaveClick(octavoElemento.idReal)}>Guardar</button>
                    </>
                  ) : (
                    <>
                      <h6>{octavoElemento.subtitulo}</h6>
                      <p className='textoParrafo'>{octavoElemento.texto}</p>
                      <p className='timePublished'>{octavoElemento.diferenciaDeTiempo}</p>
                    </>
                  )}
                  </>
                   
                 </div>
                 <div className="item10modelo">
                   <>
                  <button onClick={() => handleEditClick9(novenoElemento.idReal)}>
                  {editMode9 ? 'Cancelar' : 'Editar'}
                </button>
                 {editMode9 ? (
                    <>
                      <input
                        type="text"
                        value={editedSubtitle9}
                        onChange={(e) => setEditedSubtitle9(e.target.value)}
                      />
                      <textarea
                        value={editedText9}
                        onChange={(e) => setEditedText9(e.target.value)}
                      />
                      <button onClick={() => handleSaveClick(novenoElemento.idReal)}>Guardar</button>
                    </>
                  ) : (
                    <>
                    <h6>{novenoElemento.subtitulo}</h6> 
                    <p className='textoParrafo'>{novenoElemento.texto}</p>
                    <p className='timePublished'>{novenoElemento.diferenciaDeTiempo}</p>
                    </>
                  )}
                  </>
                   
                 </div>
            </div>
            </>
    )
}

export default CarteleraModelo;