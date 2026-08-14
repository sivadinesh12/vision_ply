const express = require("express");
const router = express.Router();
const CompanyInfo = require("../models/CompanyInfo");

// GET /api/company - single company info document powering the whole site
router.get("/", async (req, res) => {
  try {
    const info = await CompanyInfo.findOne();
    if (!info) return res.status(404).json({ error: "Company info not seeded yet" });
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch company info" });
  }
});

// PUT /api/company - update (admin use)
router.put("/", async (req, res) => {
  try {
    const info = await CompanyInfo.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    res.json(info);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
