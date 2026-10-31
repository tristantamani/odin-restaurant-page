import "./styles.css";
import { displayHomepage } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

let selectedButton;

homeButton.addEventListener("click", () => {
    selectedButton = "home";
    toggleSelectedButton();
    clearContent();
    displayHomepage();
});

menuButton.addEventListener("click", () => {
    selectedButton = "menu";
    toggleSelectedButton();
    clearContent();
    displayMenu();
});

aboutButton.addEventListener("click", () => {
    selectedButton = "about";
    toggleSelectedButton();
    clearContent();
    displayAbout();
});

function clearContent() {
    let child = content.lastElementChild;

    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}

function toggleSelectedButton() {
    switch (selectedButton) {
        case "home":
            menuButton.classList.remove("selected-button");
            aboutButton.classList.remove("selected-button");
            homeButton.classList.add("selected-button");
            break;
        case "menu":
            homeButton.classList.remove("selected-button");
            aboutButton.classList.remove("selected-button");
            menuButton.classList.add("selected-button");
            break;
        case "about":
            homeButton.classList.remove("selected-button");
            menuButton.classList.remove("selected-button");
            aboutButton.classList.add("selected-button");
            break;
        default:
            homeButton.classList.add("selected-button");
    }
}

toggleSelectedButton();
displayHomepage();