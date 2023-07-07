const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/ZapatillasProyecto");

var modelSchema = new Schema({
    _id:{type:Number},  
    nombre:{type:String},
    usuario:{type:String},
    correo:{type:String},
    password:{type:String},
    rol: {type:String, default: "usuario"}
});
var model = mongoose.model('Users',modelSchema,'Users');
module.exports = model;