'use strict';
const express = require('express');
const router = express.Router();
const productService = require('../../services/product-service');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to get all products',
        items: productService.getProducts()
    });
});

router.post('/:productId', (req, res, next) => {
    const productId = req.params.productId;
    return productService.createProduct(productId).then((object) => {
        res.status(200).json({
            message: 'Handling POST requests to create a product: ' + object
        });
    }).catch(err => {
        res.status(400).json({
            message: 'Handling POST requests to create a product: ' + err
        })
    });

});

router.get('/:productId', (req, res, next) => {
    const productId = req.params.productId;
    if (productId) {
        res.status(200).json({
            message: 'Handling GET requests to get a specific products',
            id: productId
        });
    } else {
        res.status(400).send(new Error('No product id found'));
    }

});

router.patch('/:productId', (req, res, next) => {
    throw new Error ('Not Implemented');
});

router.delete('/:productId', (req, res, next) => {
    const productId = req.params.productId;
    return productService.deleteProduct(productId).then(object => {
        if (object === true) {
            res.status(200).send();
        }
    }).catch(err => {
        res.status(400).send(new Error(err));
    });
});

module.exports = router;