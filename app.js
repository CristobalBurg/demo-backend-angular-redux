var express = require('express');
var cors = require('cors');
var app = express();
var port = 3000;

//rutas
var productosRoutes = require('./src/routes/productosRoutes');

//middlewares
app.use(cors());



app.use('/', productosRoutes);

app.listen(port, function() {
    console.log('Aplicación corriendo en el puerto: ' + port);
})