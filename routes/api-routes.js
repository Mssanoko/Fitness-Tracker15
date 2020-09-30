const db = require ("../models");

// API routes
module.exports = (app) => {
    //get last workout 
    app.get("/api/workouts", (req,res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    });

    //add exercice
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            {
                _id: req.params.id
            },
            {
                $push: {
                    exercices: req.body
                }
            },
            {
                new: true
            }
        ).then(dbWorkout => {
            res.json(dbWorkout);
        })
            .catch(err => {
                res.status(400).json(err);
            });
        
    });
    // Gets workouts in range
    app.get("/api/workouts/range", (req,res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
};