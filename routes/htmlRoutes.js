const router = require("express").Router();
const db = require("../models");
const path = require("path");

// main/index route
router.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// TODO: add stats route

// TODO: add exercise route

module.exports = router;