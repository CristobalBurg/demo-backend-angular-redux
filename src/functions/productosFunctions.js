const functions = {};
var productListDummy = require('../config/dummyBD');

/**
 * 
 * @Author Cristobal Burgos 16-09-2021
 * @description entrega el formato de respusta de la api , considerando error y mensaje
 * @returns  Objeto con el formato de respuesta que entregara la api
 */
function resJSON(data, error, message) {
    return {
        data,
        error,
        message
    };
}

/**
 * 
 * @Author Cristobal Burgos 16-09-2021
 * @description Obtiene el listado de los productos, se simula una BD real con el try catch
 * @returns  Objeto con el formato de respuesta que entregara la api
 */
functions.getProductList = (req, res) => {
    try {
        const products = productListDummy;
        res.json(resJSON(products, false, 'Listado Productos'));
    } catch (err) {
        res.json(resJSON([], true, err.message));
    }
}

module.exports = functions;