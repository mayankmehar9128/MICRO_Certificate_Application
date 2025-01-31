const router = require('express').Router();
const ensureAuthenticated = require('../Middleware/Auth');
const { getFranchise } = require('../Controllers/FrenchiseGetController');


//admin handling frenchise routes
router.get("/franchise",ensureAuthenticated, getFranchise); // Get all franchises or a specific franchise by email


module.exports = router;