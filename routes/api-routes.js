const db = require("../models");

// API routes
module.exports = (app) => {
	// Get last workout
	app.get("/api/workouts", (req, res) => {
		db.Workout.find({})
			.then(dbWorkout => {
				res.json(dbWorkout);
			})
			.catch(err => {
				res.status(400).json(err);
			})
	});

	// Add exercise
	app.put("/api/workouts/:id", (req, res) => {
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
	app.post("/api/workouts", ({ body }, res) => {
		db.Workout.create(body)
			.then(dbWorkout => {
				res.json(dbWorkout);
			})
			.catch(err => {
				res.status(400).json(err);
			});
	});

	// Gets workouts in range
	app.get("/api/workouts/range", (req, res) => {
		db.Workout.find({})
			.then(dbWorkout => {
				res.json(dbWorkout);
			})
			.catch(err => {
				res.status(400).json(err);
			});
	});
};