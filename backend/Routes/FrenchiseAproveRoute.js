const { aproved } = require('../Controllers/FrenchiseAddController');
const router = require('express').Router();
const multer = require("multer");
const ensureAuthenticated = require('../Middleware/Auth');
const { frenchiseApprovedValidation} = require('../Middleware/FrenchiseAproveVelidaton');

// Configure storage for Multer
const storage = multer.memoryStorage(); // Stores files in memory
const upload = multer({ storage });

//frenchise aproved by admin
router.post("/aproved", upload.single("frenchiseImage"),ensureAuthenticated, frenchiseApprovedValidation, aproved);

module.exports = router;