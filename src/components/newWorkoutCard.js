// import '../styles/newWorkoutCard.css';

export default (function newWorkoutCard(routine) {
    const cardWrap = document.createElement("div");
    cardWrap.classList.add("card-wrap", "new-workout");
    // const workouts = routine.workouts;
    const content =  `
    <div class="card">
      <div class="drag"></div>
      <div class="toolbar">
        <div class="timer">Timer</div>
        <div class="minimize"></div>
        <div class="finish">
          <button class="finish-btn">Finish</button>
        </div>
      </div>
      <div class="content">
        <div class="routineMetaData">
          <div class="routineName">
             <input type="text" placeholder="Routine Name">
          </div>
          <div class="time-lasted">
            0:30
          </div>
          <div class="notes">
            <textarea placeholder="Notes"></textarea>
          </div>
        </div>
        <div class="workouts">
          <div class="workout">
            
          </div>
        </div>
      </div>
    </div>
    `
    cardWrap.innerHTML = content;

    return cardWrap;

})();