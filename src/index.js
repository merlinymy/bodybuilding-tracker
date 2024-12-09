import './styles.css';
import * as Utils from './scripts/until';
import  workoutTab from "./components/workoutTab";


const main = document.querySelector(".main");

const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach((element) => {
    Utils.addListener(element);
})

main.innerHTML = workoutTab;