const router = require('express').Router();
const ensureAuthenticated = require('../Middleware/Auth');
const { updateFranchise } = require('../Controllers/FrenchiseUpdateController');



//admin handling frenchise routes
router.put("/franchise/update",ensureAuthenticated, updateFranchise); // Update franchise details

module.exports = router;