const router = require('express').Router();
const multer = require("multer");
const ensureAuthenticated = require('../Middleware/Auth');
const { StudentAdd } = require('../Controllers/StudentAddController');
const { studentValidation } = require('../Middleware/StudentVelidation');

// Configure storage for Multer
const storage = multer.memoryStorage(); // Stores files in memory
const upload = multer({ storage });

//frenchise aproved by admin
router.post("/student/add", upload.single("studentImage"),ensureAuthenticated, studentValidation, StudentAdd);

module.exports = router;