const { adminLoginValidation, frenchiseLoginValidation } = require('../Middleware/AuthVelidation');
const { frenchiselogin, adminLogin } = require('../Controllers/AuthController');


// const ensureAuthenticated = require('../Middleware/Auth');

const router = require('express').Router();

// Admin login route with validation and controller
router.post('/admin/login', adminLoginValidation, adminLogin);

//frenchsie login
router.post("/frenchiselogin", frenchiseLoginValidation, frenchiselogin);

module.exports = router;