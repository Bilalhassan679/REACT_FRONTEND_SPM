const Organization = require("../../models/createOrginizationProject");
const Project = require("../../models/createProject");
const createOrganizations = async (req, res) => {
  try {
    const item = await Organization.create(req.body);
    res.status(201).json({
      success: true,
      message: "Project item created successfully",
      item,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to create Project item",
      error: err.message,
    });
  }
};
exports.createOrganization = async (req, res) => {
  try {
    const organization = await Organization.create(req.body);
    res.status(201).json({ success: true, data: organization });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create a new project for an organization
exports.createProject = async (req, res) => {
  try {
    const { organizationId } = req.params;
    const organization = await Organization.findById(organizationId);
    if (!organization) {
      return res
        .status(404)
        .json({ success: false, message: "Organization not found" });
    }
    const project = await Project.create(req.body);
    organization.projects.push(project);
    await organization.save();
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all organizations with their projects
exports.getOrganizationsWithProjects = async (req, res) => {
  try {
    const organizations = await Organization.find().populate("projects");
    res.status(200).json({ success: true, data: organizations });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = createOrganizations;
