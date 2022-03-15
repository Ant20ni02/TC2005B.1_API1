const express = require('express');
const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
const config = require('./config/jwt');
const middleware = express.Router();
const logro = require('./routes/logro')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.set("key", config.key);


app.use('/api',logro)
///////////////////////////


//path, función callback
app.get('/usuario', middleware,  (req,res) =>{
    res.json({
        mensaje: 'It works!'
    })
})


app.post('/login',(req,res) =>{
    const user = req.body.user;
    const password = req.body.password;

    let mensaje = 'Usuario y contraseña inválidos'
    ////////////////
    let token = '';


    const payload = {
        id: 1,
        user: req.body.user
    }

    if(user==="Marco" && password==="123"){
        token = jwt.sign(payload, app.get("key"),{expiresIn: 7200})
        mensaje= 'Usuario y contraseña autenticados'
    }

    res.json({
        mensaje: mensaje,
        token: token
    })


})



//Función callback -> función que se ejecuta como respuesta a un evento o acción
app.listen(port, () =>{
    console.log(`Servidor iniciado en el puerto ${port}`);
})


