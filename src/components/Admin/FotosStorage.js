import React, { useState,useEffect  } from 'react';
import { app } from '../../firebase/firebase';
import { getFirestore, collection, getDocs  } from 'firebase/firestore';
import { ref, listAll, getDownloadURL } from '@firebase/storage';
import { storage } from '../../firebase/firebase';

//trae 
export const FotosStorage = () => {

    const [imagenesStorage, setImagenesStorage] = useState([]);

    useEffect(() => {
    const obtenerFotosStorage = async () => {
      const db = getFirestore(app);

      try {
        const storageRef = ref(storage);

        const result = await listAll(storageRef);

        const imageURLs = await Promise.all(
            result.items.map(async (item) => {
              return await getDownloadURL(item);
            })
          );
          setImagenesStorage(imageURLs)

      } catch (error) {
        console.error('Error al obtener imagenes de storage:', error);
      }
    };
    obtenerFotosStorage();
  }, []);    
    return (
        <>
            <h1>Foto en base de datos</h1>
            {imagenesStorage.map((imagen, index) => (
                    <li key={index}>
                        <img src={imagen} alt={`Imagen ${index}`} />
                    </li>
                    ))}
        </>
    )
}

export default FotosStorage;