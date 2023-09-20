import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { app, analytics} from '../../firebase/firebase';

const SubirImagen = () => {
  const [imagen, setImagen] = useState(null);

  const handleImagenSeleccionada = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
    }
  };

  const handleSubirImagen = async () => {
    if (imagen) {
      const storageRef = ref(app.storage(), `imagenes/${imagen.name}`);
      await uploadBytes(storageRef, imagen);
      alert('Imagen subida exitosamente');
      setImagen(null);
    }else{
        alert('error')
    }
  };
  
  return (
    <div>
      <h2>Subir Imagen</h2>
      <input type="file" accept=".jpg, .jpeg, .png" onChange={handleImagenSeleccionada} />
      <button onClick={handleSubirImagen}>Subir Imagen</button>
    </div>
  );
};

export default SubirImagen;