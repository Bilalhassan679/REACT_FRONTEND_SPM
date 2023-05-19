// Import required modules
const mongoose = require("mongoose");

// Generate a 4-digit ID
function generateID() {
  const randomId = Math.floor(1000 + Math.random() * 9000);
  return randomId.toString();
}

// Define schema for Organizations collection
const CreateOrganizationSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    default: generateID,
  },
  name: {
    type: String,
    required: [true, "Please Enter Organization Name"],
    unique: true,
  },

  country: [
    {
      type: String,
      enum: [
        "USA",
        "CAN",
        "GBR",
        "FRA",
        "DEU",
        "ESP",
        "ITA",
        "AUS",
        "JPN",
        "CHN",
        "PAK",
        "IND",
        "BRA",
        "RUS",
        "MEX",
        "ARG",
        "ZAF",
        "EGY",
        "NGA",
        "KEN",
        "SAU",
      ],
      required: [true, "Please provide country"],
      projects: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Project",
        },
      ],
    },
  ],
});

CreateOrganizationSchema.set("timestamps", true);
// Define model for Organizations collection
const Organizations = mongoose.model("Organizations", CreateOrganizationSchema);

// Export Organizations model
module.exports = Organizations;
