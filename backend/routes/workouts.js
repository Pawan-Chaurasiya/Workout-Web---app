const express = require('express');
const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireauth')


const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)


// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

//  POST a new workout
router.post('/', createWorkout);

// DELETE a  workout
router.delete('/:id', deleteWorkout);

// UPDATE a single workout
router.patch('/:id', updateWorkout);


module.exports = router