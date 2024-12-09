const mock_routine = {
    "routineName": "Leg day",
    "duration": 0,
    "Notes": "",
    "workouts": [
        {
            "workoutName" : "squat (Barbell)",
            "sets" : [
                {
                    "previous" : "235lbs x 8",
                    "lbs" : 240,
                    "Reps" : 8
                }
            ]
        }
    ]
};

export default (function() {
    return `
            <div class="tab-name">
                <h1>Workout</h1>
            </div>
            <div class="tab-content">
                <div class="new-workout">
                    <h3>Quick start</h3>
                    <button>Start an Empty Workout</button>
                </div>
                <div class="recent">
                    <h2>My Routines</h2>
                    <div class="routine-card">
                        <h3>${mock_routine.routineName}</h3>
                        <p>${mock_routine.workouts}</p>
                    </div>
                </div>
            </div>

    `
})();
