let Model = require('../models/ProductoModel');
module.exports = {
    show: (req,res) =>{
        Model.find({})
        .then((data)=>{
            console.log(data)
            res.json(data);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al llamar a los productos", error);
        })
    },
    create:(req,res)=>{
        let obj = new Model;
        obj._id = req.body._id,
        obj.nombre = req.body.nombre,
        obj.imgURL = req.body.imgURL,
        obj.marca = req.body.marca,
        obj.descripcion = req.body.descripcion,
        obj.tipo = req.body.tipo,
        obj.precio = req.body.precio;

        obj.save()
        .then((obj)=>{
            res.json(obj);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al crear el producto", error);
        })
    },
    finOne:(req,res)=>{
        let val_id = req.params.id;
        Model.findOne({_id:val_id})
        .then((obj)=>{
            res.json(obj);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al encontrar el producto", error);
        })
    },
    update:(req,res)=>{
        let val_id = req.params.id;
        let obj = new Model;
        obj._id = req.body._id,
        obj.nombre = req.body.nombre,
        obj.marca = req.body.marca,
        obj.imgURL = req.body.imgURL,
        obj.descripcion = req.body.descripcion,
        obj.precio = req.body.precio;
        Model.updateOne({_id:val_id},obj)
        .then((obj)=>{
            res.json(obj);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al actualizar el producto", error);
        })
    },  
    delete: (req,res)=>{
        let val_id = req.params.id;
        Model.findOneAndDelete({_id:val_id})
        .then((obj)=>{
            res.json(obj);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al eliminar el producto", error);
        })
    }
}