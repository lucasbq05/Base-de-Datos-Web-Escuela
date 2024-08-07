const {Schema, model} = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
         required: true
    },
    apellido: {
        type:String,
        required: true
    },
    correo_electronico: {
        type: String,
        required: true,
    },
   }, {
        timestamps: true
   });

   // Modelo creado a partir del esquema
module.exports = model('Usuario', UsuarioSchema, 'Usuario'); 