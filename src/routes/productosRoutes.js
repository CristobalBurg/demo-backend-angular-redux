const express = require('express');
const router = express.Router();

const functions = require('../functions/productosFunctions');

//get
router.get('/api/productos/listar', functions.getProductList);

//post
//   --Eventuales metodos post --

//delete
//    --Eventuales metodos delete --


module.exports = router;