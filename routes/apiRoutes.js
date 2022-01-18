const app = require("express").Router();
const { Workout } = require("../models");
const db = require("../models");

app.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.get("/workouts/range", (req, res) => {
  
});

app.put("/workouts/:id", (req, res) => {
  
});

app.post("/workouts", (req, res) => {
  
});

module.exports = app;