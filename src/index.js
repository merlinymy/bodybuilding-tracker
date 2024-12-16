import './styles.css';
import * as Utils from './scripts/until';
import  routinesTab from "./components/navs/routinesTab";


const mainWrap = document.querySelector(".main-wrap");

const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach((element) => {
    Utils.addListener(element);
})

mainWrap.append(routinesTab);