const path = require("path");
const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();