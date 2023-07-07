let Model = require('../models/VentaModel');

module.exports = {
    show: (req,res)=>{
        Model.find({})
        .then((data)=>{
            res.json(data);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al llamar al historial de ventas", error);
        })
    },
    create: (req,res)=>{
        let obj = new Model;
        obj.nroventa = req.body.nroventa,
        obj.nombre = req.body.nombre,
        obj.pedido = req.body.pedido,
        obj.total = req.body.total
        obj.save()
        .then((obj)=>{
            res.json(obj);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al crear la venta", error);
        })
    },
    finOne: (req,res)=>{
        let val_id = req.params.id;
        Model.finOne({_id:val_id})
        .then((obj)=>{
            res.json(obj);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al encontrar el producto", error);
        })
    },
    update: (req,res) =>{
        let val_id = req.params.id;
        let obj = new Model;
        obj.nroventa = req.body.nroventa,
        obj.nombre = req.body.nombre,
        obj.pedido = re.body.pedido,
        obj.total = req.body.total
        Model.updateOne({_id:val_id},obj)
        .then((obj)=>{
            res.json(obj);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al actualizar el producto", error);
        })
    },
    delete: (req,res)=>{
        let val_id = req.params.id
        Model.findOneAndDelete({_id:val_id})
        .then((obj)=>{
            res.json(obj);
        })
        .catch((error)=>{
            console.log("Ocurrio un error al eliminar el producto", error);
        })
    }
}
