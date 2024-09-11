const usuarios = [
    {
        id:1,
        userUsuario: 'rodorado',
        nombreApellido: 'Rocio Dorado',
        emailUsuario: 'rocio_dorado12@hotmail.com',
        contrasenia: '458965327'
    }
]

//GET
const obtenerTodosLosUsuarios = (req, res) =>{
    try {
        
    } catch (error) {
        res.status(200).json(error)
    }
}



//POST
const registrarUsuario = (req, res) =>{
try {
    const body = req.body
    
    //para saber si el usuario ya existe sólo con el mail, ose avalidar el mail
    const emailExiste = usuarios.find((usuario) => usuario.emailUsuario === body.emailUsuario)
    //para validar el usuario
    const usuarioExiste = usuarios.find((usuario) => usuario.userUsuario === body.userUsuario)
   if(emailExiste){
     return res.status(400).json({msg: 'Email no disponible'})
   }else if(usuarioExiste){
    return res.status(400).json({msg: 'Usuario no disponible'})
   }

    usuarios.push(body)
    res.status(200).json({msg: 'Usuario registrado con éxito'})

} catch (error) {
    res.status(500).json(error);
}
}

module.exports = {
    registrarUsuario,
    obtenerTodosLosUsuarios,
};