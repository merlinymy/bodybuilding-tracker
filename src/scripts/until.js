import { default as profileTab } from "../components/navs/profileTab";
import { default as historyTab } from "../components/navs/historyTab";
import { default as workoutTab } from "../components/navs/routinesTab";
import { default as dietTab } from "../components/navs/dietTab";
import { default as bodyTab } from "../components/navs/bodyTab";

export function addListener(btn) {
    btn.addEventListener("click", (event) => {
        const btnName = btn.textContent.trim();
        const tab = getTabByName(btnName);

        if (tab) {
            const mainContent = document.querySelector('.main-wrap'); 
            mainContent.innerHTML = ''; // Clear current content
            mainContent.append(tab); // Append the new tab
        }
    });
}

export function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}


function getTabByName(btnName) {
    switch (btnName.trim()) {
        case 'Profile':
            return profileTab;
        case 'History':
            return historyTab;
        case 'Workout':
            return workoutTab;
        case 'Diet':
            return dietTab;
        case 'Body':
            return bodyTab;
        default:
            console.warn(`No tab found for: ${btnName}`);
            return null;
    }
}

