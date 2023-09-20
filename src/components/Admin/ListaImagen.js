import React, { useEffect, useState } from 'react';
import { listAll, getDownloadURL } from 'firebase/storage';
import { app } from '../../firebase/firebase';

export const ListaImagen = () => {

    const [imagenes, setImagenes] = useState([]);
  
    useEffect(() => {
      const obtenerImagenes = async () => {
        const storageRef = app.storage().ref();
        const imagenesRef = storageRef.child('imagenes');
        const listaDeImagenes = await listAll(imagenesRef);
  
        const urls = await Promise.all(
          listaDeImagenes.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          })
        );
  
        setImagenes(urls);
      };
  
      obtenerImagenes();
    }, []);
  
    return (
      <div>
        <h2>Lista de Imágenes</h2>
        {imagenes.map((url, index) => (
          <img key={index} src={url} alt={`Imagen ${index}`} />
        ))}
      </div>
    );
  };
  
export default ListaImagen;