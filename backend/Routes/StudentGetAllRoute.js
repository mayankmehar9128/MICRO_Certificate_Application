const router = require('express').Router();
const { GetAllStudents, getStudentById } = require('../Controllers/StudentGetController');
const ensureAuthenticated = require('../Middleware/Auth');

// 📌 Get all students
router.get("student/all", ensureAuthenticated, GetAllStudents);
// 📌 Get student by ID
router.get("student/:id",ensureAuthenticated, getStudentById);

module.exports = router;