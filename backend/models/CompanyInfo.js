const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema(
  { text: { type: String, required: true } },
  { _id: false }
);

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    tagline: { type: String, default: "" },
  },
  { _id: false }
);

const companyInfoSchema = new mongoose.Schema(
  {
    name: { type: String, default: "OLYMPIC TRADERS" },
    tagline: { type: String, default: "" },
    aboutShort: { type: String, default: "" },
    aboutFull: { type: String, default: "" },
    phone: { type: String, default: "" },
    altPhone: { type: String, default: "" },
    email: { type: String, default: "" },
    address: { type: String, default: "" },
    social: {
      facebook: { type: String, default: "" },
      twitter: { type: String, default: "" },
      youtube: { type: String, default: "" },
    },
    certifications: [{ type: String }],
    features: [featureSchema],
    brands: [brandSchema],
    standardSizes: [{ type: String }],
    standardThickness: [{ type: String }],
    heroSlides: [{ type: String }],
  },
  { timestamps: true },
);

module.exports = mongoose.model("CompanyInfo", companyInfoSchema);
