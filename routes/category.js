const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const controller = require('../controllers/categoryController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

// const auth = passport.authenticate('jwt', {session: false});

router.get('/', authMiddleware, roleMiddleware(["ADMIN"]), controller.getAll);
router.get('/:id', authMiddleware, roleMiddleware(["ADMIN"]), controller.getById);
router.delete('/:id', authMiddleware, roleMiddleware(["ADMIN"]), controller.remove);
router.post('/', authMiddleware, roleMiddleware(["ADMIN"]), upload.single('image'), controller.create);
router.patch('/:id', authMiddleware, roleMiddleware(["ADMIN"]), upload.single('image'), controller.update);


module.exports = router;
