const mongoose = require('mongoose');
const Persona = mongoose.Schema({
    cedula:{
        type:String,
        require:true
    },
    correo:{
        type:String,
        require:true
    },
    fecha_de_nacimiento:{
        type:Date,
        require:true
    },
    telefono:{
        type:Int32Array,
        require:true
    },
    nombre:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
})

module.exports = mongoose.model('Persona', Persona);