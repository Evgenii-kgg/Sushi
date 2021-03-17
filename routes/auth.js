const express = require('express');
const controller = require('../controllers/authController');
const router = express.Router();
const {check} = require("express-validator");
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/login', controller.login);
router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
    ], controller.registration);
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers)

module.exports = router;
