// import '../styles/newWorkoutCard.css';
import { css } from "../scripts/until";

export default (function newWorkoutCard(routine) {
    const cardWrap = document.createElement("div");
    cardWrap.classList.add("card-wrap", "new-workout", "hidden-bottom");
    // const workouts = routine.workouts;
    const content =  `
    <div class="card">
      <div class="drag"></div>
      <div class="toolbar">
        <div class="timer">Timer</div>
        <div class="minimize">30:30</div>
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

    // text area autosize
    const textarea = cardWrap.querySelector("textarea");
    textarea.addEventListener("input", (event) => {
      event.target.style.height = "";
      event.target.style.height = `${event.target.scrollHeight}px`;
    })
    
    // bottom sheet stuff
    const navWrap = document.querySelector(".nav-wrap"); // for nav animation
    const minimize = cardWrap.querySelector(".minimize"); // div.minimize with timer
    
    // click trigers card drop back to minizied version
    minimize.addEventListener("click", (event)=>{
      cardWrap.classList.remove("show-rise");
      cardWrap.classList.add("hidden-bottom");

      // apply css rules to div.navWrap
      css(navWrap, {
        'transform': 'translateY(0%)',
        'transition': 'all 250ms cubic-bezier(.69,0,.18,1.02)'
      })
    });

    const minimizeToolbar = cardWrap.querySelector('.toolbar');

    // drag feature
    

    const minimizeY = 0;







    // return card in DOM
    return cardWrap;

})();