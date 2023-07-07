const express = require('express');
const router = express.Router();
const controller = require('../controllers/VentaController');

router.get('/',(req,res)=>{
    controller.show(req,res);
});

router.post('/',(req,res)=>{
    controller.create(req,res);
})

router.post('/:id',(req,res)=>{
    controller.finOne(req,res);
})

router.post('/:id/update',(req,res)=>{
    controller.update(req,res);
})
router.post('/:id/delete',(req,res)=>{
    controller.delete(req,res);
})

module.exports = router;