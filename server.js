const path = require("path");
const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// TODO: add connection

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});