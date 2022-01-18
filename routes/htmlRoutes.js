const router = require("express").Router();
const db = require("../models");
const path = require("path");

// main/index route
router.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// stats route
router.get("/stats", async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// exercise route
router.get("/exercise", async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;