import React, { useState,useEffect  } from 'react';
import { FotosStorage} from './FotosStorage';
import { CarteleraModelo} from '../Cartelera/CarteleraModelo';
import { app, analytics } from '../../firebase/firebase';
import { getFirestore, collection, getDocs  } from 'firebase/firestore';
import { ListaImagen } from './ListaImagen';
import { SubirImagen } from './SubirImagen';
import { ref, uploadBytesResumable,listAll, getDownloadURL } from '@firebase/storage';
import { storage } from '../../firebase/firebase';
//import { storage, ref, listAll, getDownloadURL,getStorage } from 'firebase/storage';
//import { getStorage, ref,storage,listAll,getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js";
import coleccionContenido2 from '../../assets/noticias/coleccion2.txt';

export const Admin = () => {
    // _____________________________________________
    const [imagenes, setImagenes] = useState([]);

    
    return (
        <>
        {/* //<FotosStorage/> */}
         <div>
           <h1>9 noticias (izquierda a derecha arriba a abajo)</h1>
            

         <CarteleraModelo />  
       
        {/* <ListaImagen />   */}
        </div>
        </>
    )
}

export default Admin;