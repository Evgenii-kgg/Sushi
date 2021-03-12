const express = require('express');
const passport = require('passport');
const controller = require('../controllers/productController');
const router = express.Router();
const auth = passport.authenticate('jwt', {session: false});

router.get('/:id', auth, controller.getProduct);
router.post('/add', auth, controller.addProducts);
router.patch('/:id', auth, controller.update);
router.get('/:id', auth, controller.removeProduct);



module.exports = router;
