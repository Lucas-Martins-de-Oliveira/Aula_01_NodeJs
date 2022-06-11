const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Test GET request to /orders'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Test POST request to /orders'
    })
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Test GET request to /orders',
        id: id
    })
});

router.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Update Order',
        id: id
    })
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Delete orders',
        id: id
    })
});


module.exports = router;