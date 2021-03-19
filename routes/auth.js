const express = require('express');
const controller = require('../controllers/authController');
const router = express.Router();
const {check} = require("express-validator");
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/login', controller.login);
router.post('/registration', controller.registration);
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers)

module.exports = router;
