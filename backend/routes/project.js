// Import required modules
const express = require("express");
const router = express.Router();

// Import controllers
const createProject = require("../controllers/project/create");

// Define routes
router.route("/project/create").post(createProject);

// Export router
module.exports = router;
