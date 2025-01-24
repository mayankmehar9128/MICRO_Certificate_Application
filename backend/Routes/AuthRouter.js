const { registerValidation, approvedValidation, loginValidation, adminLoginValidation } = require('../Middleware/AuthVelidation');
const { register, aproved, frenchiselogin, adminLogin, getFranchise, updateFranchise, deleteFranchise } = require('../Controllers/AuthController');

const multer = require("multer");
const ensureAuthenticated = require('../Middleware/Auth');

// Configure storage for Multer
const storage = multer.memoryStorage(); // Stores files in memory
const upload = multer({ storage });

const router = require('express').Router();

// router.post('/frenchiselogin', (req, res)=>{
//     res.send('login success');
// });

// Admin login route with validation and controller
router.post('/admin/login', adminLoginValidation, adminLogin);

//frenchsie login
router.post("/frenchiselogin", loginValidation, frenchiselogin);

//frenchise registration
router.post("/register", registerValidation, register);

//frenchise aproved by admin
router.post("/aproved", upload.single("frenchiseImage"),ensureAuthenticated, approvedValidation, aproved);

//admin handling frenchise routes
router.get("/franchise",ensureAuthenticated, getFranchise); // Get all franchises or a specific franchise by email
router.put("/franchise/update",ensureAuthenticated, updateFranchise); // Update franchise details
router.delete("/franchise/delete",ensureAuthenticated, deleteFranchise); // Delete franchise


module.exports = router;