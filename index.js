const express = require("express");
const app = express();
const PORT = 3000;
const {authenticateUser}= require('./Config/auth');
//esta funcion wappinit por defecto inicializa el whatsapp y la trivia juntas luego separar 
const wappinit = require('./apis/apiwhatsapp/wp');
app.get('https://main.d3b0sjb8uf8s9n.amplifyapp.com/',async(req,res)=>{
    const username = req.query.username;
    const password = req.query.password;
    try {
        const session = await authenticateUser(username, password);
        // Autenticación exitosa, inicializar el bot de WhatsApp
        wappinit();
        res.send('Autenticación exitosa. Inicializando el bot de WhatsApp...');
    } catch (error) {
        res.status(401).send('Error de autenticación: ' + error.message);
    }

});

//wappinit();


app.get('/',(req, res) => res.send("Buenas"));
//aqui deberia redireccionar a cognito. para el login. seguro.

//luego del ingreso se debera ejecutar la funcion wappinit. para que ejecute
// el codigo inicial de la aplicacion y asi se hace el el emparejamiento del celular.

app.listen(PORT, ()=> console.log(`Servidor Funcionando en el puerto: ${PORT}`));
