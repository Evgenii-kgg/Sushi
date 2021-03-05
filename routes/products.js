const express = require('express');
const mongoose = require('mongoose');
const controller = require('../controllers/productController');
const router = express.Router();


router.post('/add', controller.addProducts);
router.get('/show', controller.removeProducts);
router.get('/id', controller.getProduct);

module.exports = router;
