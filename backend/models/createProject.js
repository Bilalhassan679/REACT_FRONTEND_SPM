// Import required modules
const mongoose = require("mongoose");

// Generate a 4-digit ID
function generateID() {
  const randomId = Math.floor(1000 + Math.random() * 9000);
  return randomId.toString();
}

// Define schema for Organizations collection
const CreateProjectSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    default: generateID,
  },
  name: {
    type: String,
    required: [true, "Please provide project name"],
    unique: true,
  },
  visibility: {
    type: Boolean,
    required: true,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
  },
});
CreateProjectSchema.set("timestamps", true);
const Project = mongoose.model("Projects", CreateProjectSchema);

module.exports = Project;
