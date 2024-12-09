import { default as profileTab } from "../components/profileTab";
import { default as historyTab } from "../components/historyTab";
import { default as workoutTab } from "../components/workoutTab";
import { default as dietTab } from "../components/dietTab";
import { default as bodyTab } from "../components/bodyTab";

export function addListener(btn) {
    btn.addEventListener("click", (event) => {
        const btnName = btn.textContent.trim();
        const tab = getTabByName(btnName);

        if (tab) {
            const mainContent = document.querySelector('.main'); 
            mainContent.innerHTML = ''; // Clear current content
            mainContent.innerHTML = tab; // Append the new tab
        }
    });
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

