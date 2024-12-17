import newWorkoutCard from "../newWorkoutCard";
import { css } from "../../scripts/until";
import {suggestRoutines, userRoutines} from "../../data/routines.json";

export default (function() {
    
    const main = document.createElement("div");
    const body = document.querySelector("body");
    main.classList.add("main");

    const content = `
            <div class="tab-name">
                <h1>Workout</h1>
            </div>
            <div class="tab-content">
                <div class="new-workout">
                    <h3>Quick start</h3>
                    
                </div>
                <div class="recent">
                    <h2>My Routines</h2>
                    <div class="routine-card-wrap">
                    
                    </div>
                    <h2>Suggest Routines</h2>
                    <div class="routine-card-wrap">
                    
                    </div>
                </div>
            </div>

    `;

    main.innerHTML = content;

    const newWorkoutDiv = main.querySelector(".new-workout");

    const newEmptyWorkoutBtn = document.createElement("button");
    newEmptyWorkoutBtn.textContent = "Start A New Workout";
    newEmptyWorkoutBtn.classList.add("add");
    
    main.append(newWorkoutCard);

    const navWrap = document.querySelector(".nav-wrap");

    newEmptyWorkoutBtn.addEventListener("click", (event) => {
        newWorkoutCard.classList.add("show-rise");
        newWorkoutCard.classList.remove("hidden-bottom");
        css(navWrap, {
            'transform': 'translateY(100%)'
        });
    });

    newWorkoutDiv.append(newEmptyWorkoutBtn);


    console.log(main);
    return main;
})();
