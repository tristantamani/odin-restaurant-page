import "./styles.css";
import { displayHomepage } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
    clearContent();
    displayHomepage();
});

menuButton.addEventListener("click", () => {
    clearContent();
    displayMenu();
});

aboutButton.addEventListener("click", () => {
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

displayHomepage();