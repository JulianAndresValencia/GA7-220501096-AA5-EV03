const mongoose = require('mongoose');
const Persona = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    nombre:{
        type:String,
        require:true
    },
    telefono:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Persona', Persona);