// Import required modules
const express = require("express");
const router = express.Router();
const organizationController = require("../controllers/organization/create");

// Import controllers
const createOrganizations = require("../controllers/organization/create");

// Define routes
router.route("/org/create").post(createOrganizations);
// Create a new organization
// router.post("/org1/create", organizationController.createOrganization);

// // Create a new project for an organization
// router.post("/:organizationId/projects", organizationController.createProject);

// // Get all organizations with their projects
// router.get("/org1/get", organizationController.getOrganizationsWithProjects);
// // Export router
module.exports = router;
