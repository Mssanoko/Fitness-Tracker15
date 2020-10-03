const db = require("../models");
const router = require("express").Router();
// API routes

// Get last workout
router.get("/api/workouts", (req, res) => {
	db.Workout.find({})
		.then(dbWorkout => {
			res.json(dbWorkout);
		})
		.catch(err => {
			res.status(400).json(err);
		})
});

// Add exercise
router.put("/api/workouts/:id", (req, res) => {
	db.Workout.findByIdAndUpdate(
		{
			_id: req.params.id
		},
		{
			$push: {
				exercises: req.body
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

// Create workout
router.post("/api/workouts", ({ body }, res) => {
	db.Workout.create(body)
		.then(dbWorkout => {
			res.json(dbWorkout);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

// Gets workouts in range
router.get("/api/workouts/range", (req, res) => {
	db.Workout.find({})
		.then(dbWorkout => {
			res.json(dbWorkout);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

module.exports = router;