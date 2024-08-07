//importamos el modelo
const Usuario = require('../models/Usuario');

//creamos el nuevo controlador
const UsuarioController = {};

UsuarioController.MostrarUsuario = async (req, res) => {
 const listado = await Usuario.find(); //treaemos todos los datos del modelo
 res.send(listado); //lo enviamossssssss
}

UsuarioController.ModificarUsuario = async (req, res) => {
    return 0;
   } 

   UsuarioController.NuevoUsuario = async (req, res) => {
    return 0;
   }


module.exports = UsuarioController;