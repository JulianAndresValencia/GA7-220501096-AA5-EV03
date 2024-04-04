const { Router } = require('express');
const router = Router();

const usuario = require('../ensa.json');
const { default: mongoose } = require('mongoose');
const dbUser = require('../models/users');
//Crear Usuario a la base de datos de mongodb atlas.

router.get('/',(req,res)=>{
    res.json("OK Está solo de prueba");
})

router.post('/',(req,res)=>{
    
    console.log("recibido desde register: \n"+JSON.stringify(req.body)); //Ver lo que se recibió
    
    //console.log("Me está llegando algo");
    const {user, pass} = req.body;
    
    //Asignar los valores a variables que conciden con el esquema
    const username = user;
    const password = pass;
    
    //Validar si los datos están llegando completos
    if (user && pass){
        /*Iniciar conexión a la db de mongo atlas*/
        mongoose.connect('mongodb+srv://julian:col123@cluster0.peqbcer.mongodb.net/BDusuario');
        mongoose.connection.on('connected', () => { //Verificar conexión.
            console.log('Conectado a la base de datos');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Error al conectar a la base de datos:', err);
        });

        const mostrar = async () => {
            try {
                const usuarioEncontrado = await dbUser.findOne({ username, password });
                const resultado = usuarioEncontrado ? true : false;
                console.log(resultado);
                resultado ? res.json("correcto") : res.json("incorrecto");
            } catch (error) {
                console.error('Error al buscar en la base de datos:', error);
                res.status(500).send("Error al buscar en la base de datos");
            }
        }
        
        mostrar();
    }else{
        res.status(500).send("Error de procesado Peticion errónea")
    }
    
})

// Define la ruta para insertar datos de usuario
router.post('/insertar', (req, res) => {
    console.log("Impreso desde registrar")
    // Recibe los datos del usuario del cuerpo de la solicitud
    // console.log("recibido: \n"+JSON.stringify(req.body)); //Ver lo que se recibió
    // const { nombre, correo, contraseña } = req.body;
    
    // // Conecta con la base de datos MongoDB Atlas
    // mongoose.connect('mongodb+srv://julian:col123@cluster0.peqbcer.mongodb.net/BDusuario');
    // mongoose.connection.on('connected', () => {
    //     console.log('Conectado a la base de datos');
    // });
    // mongoose.connection.on('error', (err) => {
    //     console.error('Error al conectar a la base de datos:', err);
    //     res.status(500).send("Error al conectar a la base de datos");
    // });

    // // Crea un nuevo documento de usuario con los datos recibidos
    // const nuevoUsuario = new dbUser({
    //     nombre,
    //     correo,
    //     contraseña
    // });

    // // Guarda el nuevo usuario en la base de datos
    // nuevoUsuario.save((err) => {
    //     if (err) {
    //         console.error('Error al insertar usuario en la base de datos:', err);
    //         res.status(500).send("Error al insertar usuario en la base de datos");
    //     } else {
    //         console.log('Usuario insertado correctamente');
    //         res.status(200).send("Usuario insertado correctamente");
    //     }
    // });
});
//Eliminar Usuario por el ID
// router.delete('/:id',(req,res)=>{
//     const {id} = req.params;
//     console.log(req.params);
//     res.send("eliminado")
// })

module.exports = router;