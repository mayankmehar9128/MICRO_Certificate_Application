const { registerValidation, approvedValidation, loginValidation, adminLoginValidation } = require('../Middleware/AuthVelidation');
const { register, aproved, frenchiselogin, adminLogin } = require('../Controllers/AuthController');

const multer = require("multer");

// Configure storage for Multer
const storage = multer.memoryStorage(); // Stores files in memory
const upload = multer({ storage });

const router = require('express').Router();

// router.post('/frenchiselogin', (req, res)=>{
//     res.send('login success');
// });

// Admin login route with validation and controller
router.post('/admin/login', adminLoginValidation, adminLogin);
router.post("/frenchiselogin", loginValidation, frenchiselogin);
router.post("/register", registerValidation, register);
router.post("/aproved", upload.single("frenchiseImage"), approvedValidation, aproved);


module.exports = router;