const fs = require('fs');
const path = require('path');

// Ruta de la carpeta donde se almacenarán los archivos JSON
const dataFolderPath = path.join(__dirname, 'data');

// Función para crear una nueva entrada
const crearEntrada = (entrada) => {
  // Genera un nombre de archivo único basado en la fecha actual
  const nombreArchivo = `${Date.now()}.json`;
  const rutaArchivo = path.join(dataFolderPath, nombreArchivo);

  // Guarda la entrada en el archivo JSON
  fs.writeFileSync(rutaArchivo, JSON.stringify(entrada, null, 2));
};

// Función para leer todas las entradas
const leerEntradas = () => {
  const archivos = fs.readdirSync(dataFolderPath);
  const entradas = [];

  archivos.forEach((archivo) => {
    const rutaArchivo = path.join(dataFolderPath, archivo);
    const entrada = JSON.parse(fs.readFileSync(rutaArchivo, 'utf-8'));
    entradas.push(entrada);
  });

  return entradas;
};

// Función para actualizar una entrada
const actualizarEntrada = (nombreArchivo, nuevaEntrada) => {
  const rutaArchivo = path.join(dataFolderPath, nombreArchivo);

  if (fs.existsSync(rutaArchivo)) {
    fs.writeFileSync(rutaArchivo, JSON.stringify(nuevaEntrada, null, 2));
    return true;
  } else {
    return false;
  }
};

// Función para eliminar una entrada
const eliminarEntrada = (nombreArchivo) => {
  const rutaArchivo = path.join(dataFolderPath, nombreArchivo);

  if (fs.existsSync(rutaArchivo)) {
    fs.unlinkSync(rutaArchivo);
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crearEntrada,
  leerEntradas,
  actualizarEntrada,
  eliminarEntrada,
};
