const app = require("express").Router();
const { Workout } = require("../models");
const db = require("../models");

// latest workout
app.get("/workouts", (req, res) => {
    db.Workout.find({})
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

// past 7 workouts 
app.get("/workouts/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            },
        },
    ])
    .sort({ day: -1 })
    .limit(7)
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

// update existing workout
app.put("/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id ,
        { $push: {exercises: req.body}  },
        { new: true, runValidators: true }
    )
    .then((dbWorkout) => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch((err) => {
        console.log(err)
        res.json(err);
    });
});

// TODO: add a new workout
app.post("/workouts", (req, res) => {
  
});

module.exports = app;