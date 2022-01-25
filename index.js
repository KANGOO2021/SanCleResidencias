//Servidor creado con Express
const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;



//Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


//Configurar las Rutas de mi aplicación
app.use(require('./routes/formulario'));


//Configuramos el puerto del Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.on('error', (err) => {
    console.log(`Servidor corriendo en el puerto ${err}`);
});