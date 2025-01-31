const router = require('express').Router();
const { deleteStudent } = require('../Controllers/StudentDeleteController');
const ensureAuthenticated = require('../Middleware/Auth');

// 📌 Delete student by ID
router.delete("student/delete/:id", ensureAuthenticated, deleteStudent);


module.exports = router;