const router = require('express').Router();
const ensureAuthenticated = require('../Middleware/Auth');
const { deleteFranchise } = require('../Controllers/FrenchiseDeleteController');


router.delete("/franchise/delete",ensureAuthenticated, deleteFranchise); // Delete franchise

module.exports = router;