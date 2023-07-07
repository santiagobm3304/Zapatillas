let Model = require('../models/UserModel');
module.exports ={
    create: (req,res)=>{
        let user = new Model;
        user._id= req.body._id,  
        user.nombre= req.body.nombre,
        user.usuario= req.body.usuario,
        user.correo=req.body.correo,
        user.password= req.body.password,
        user.rol= req.body.rol;
        user.save()
        .then((user)=>{
            res.json(user);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al encontrar el usuario", error);
        })
    },
    finOne: (req,res)=>{
        let correo = req.body.correo;
        let password = req.body.password;
        console.log(correo, password)
        Model.findOne({correo:correo,password:password})
        .then((user)=>{
            res.status(200).json({user});
        })
        .catch((error)=>{
            res.status(400).json({message: 'usuario no encontrado'});
            console.log("Ocurrio un error al encontrar el usuario", error);
        })
    }
}