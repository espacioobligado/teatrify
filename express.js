const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Define la ruta a la carpeta actual
const currentFolderPath = __dirname;
const publicFolderPath = path.join(__dirname, 'public');

app.use(express.static(currentFolderPath));

app.get('/coleccion', (req, res) => {
  // Lee el archivo "coleccion.txt" de la carpeta actual y envía su contenido como respuesta.
  fs.readFile('coleccion.txt', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo.');
    } else {
      res.send(data);
    }
  });
});

app.get('/ta', (req, res) => {
  // Envía el archivo "a.html" desde la carpeta actual
  res.sendFile(path.join(currentFolderPath, 'a.html'));
});

app.get('/teatrify2', (req, res) => {
    // Envía el archivo "a.html" desde la carpeta actual
    res.sendFile(path.join(publicFolderPath, 'index.html'));
  });

app.get('*', (req, res) => {
    // Envía el archivo "a.html" desde la carpeta actual
    res.sendFile(path.join(currentFolderPath, 'build', 'index.html'));
  });

app.get('/mi-aplicacion', (req, res) => {
    // Aquí puedes enviar la página HTML principal de tu aplicación React
  });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
