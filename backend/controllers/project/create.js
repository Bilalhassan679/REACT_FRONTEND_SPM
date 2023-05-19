const Projects = require("../../models/createProject");

const createProjects = async (req, res) => {
  try {
    const item = await Projects.create(req.body);
    res.status(201).json({
      success: true,
      message: "Project item created successfully",
      item,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to create Organizations item",
      error: err.message,
    });
  }
};

module.exports = createProjects;
