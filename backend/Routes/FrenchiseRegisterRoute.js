const router = require('express').Router();
const { register } = require('../Controllers/FrenchiseRegisterController');
const { frenchiseRegisterValidation } = require('../Middleware/FrenchiseRegisterVelidation');



//frenchise registration
router.post("/register", frenchiseRegisterValidation, register);

module.exports = router;