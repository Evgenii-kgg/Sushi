const express = require('express');
const passport = require('passport');
const controller = require('../controllers/productController');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

// const auth = passport.authenticate('jwt', {session: false});

router.get('/', authMiddleware, roleMiddleware(["ADMIN", "SALE"]), controller.getProducts);
router.get('/:id', authMiddleware, roleMiddleware(["ADMIN", "SALE"]), controller.getProduct);
router.post('/add', authMiddleware, roleMiddleware(["ADMIN", "SALE"]), controller.addProducts);
router.patch('/:id', authMiddleware, roleMiddleware(["ADMIN", "SALE"]), controller.updateProduct);
router.get('/:id', authMiddleware, roleMiddleware(["ADMIN", "SALE"]), controller.removeProduct);



module.exports = router;
