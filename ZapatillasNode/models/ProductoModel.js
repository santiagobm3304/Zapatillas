const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/ZapatillasProyecto");

var modelSchema = new Schema({
    _id: {type:Number},
    nombre: {type:String},
    marca: {type:String},
    imgURL: {type:String,default:'https://assets.disney.crucemar.com/galery/camarotes/sin-imagen.gif'},
    tipo:{type:String,default:"Zapatillas"},
    descripcion: {type:String},
    precio: {type:Number}
});
var model = mongoose.model('Productos',modelSchema,'Productos');
module.exports = model;