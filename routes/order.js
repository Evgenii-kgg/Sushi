const express = require('express');
const passport = require('passport');
const controller = require('../controllers/oreder');
const router = express.Router();
const auth = passport.authenticate('jwt', {session: false});


router.get('/', auth, controller.getAll);
router.post('/', auth, controller.create);


module.exports = router;
