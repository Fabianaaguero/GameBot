const express = require("express");
const app = express();
const PORT = 3000;
//esta funcion wappinit por defecto inicializa el whatsapp y la trivia juntas luego separar 
const wappinit = require('./apis/apiwhatsapp/wp');

wappinit();


app.get('/',(req, res) => res.send("Buenas"));
//aqui deberia redireccionar a cognito. para el login. seguro.

//luego del ingreso se debera ejecutar la funcion wappinit. para que ejecute
// el codigo inicial de la aplicacion y asi se hace el el emparejamiento del celular.

app.listen(PORT, ()=> console.log(`Servidor Funcionando en el puerto: ${PORT}`));
