const { updateStudent } = require('../Controllers/StudentUpdateController');
const ensureAuthenticated = require('../Middleware/Auth');

const router = require('express').Router();



router.put("student/update/:id", ensureAuthenticated, updateStudent);


module.exports = router;