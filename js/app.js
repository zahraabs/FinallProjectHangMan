"use strict";
// Declare variables
const homeButtons = document.querySelectorAll(".homeItems__links");
const sound = document.querySelector(".animationFrame__sound");

// Modal Selectors
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".questionIcon");
const closeModalBtn = document.querySelector(".btn-close");

const easyLevelButton = document.getElementById("easy-level");
const mediumLevelButton = document.getElementById("medium-level");
const hardLevelButton = document.getElementById("hard-level");
const playButton = document.querySelector(".buttonPlay");

let soundOn = false;
let selectedLevel =null;

const backgroundMusic = new Audio("./assets/sounds/Freedom.mp3");

// Play audio when sound icon clicked
sound.addEventListener("click", () => {
	if (!soundOn) {
		sound.src = "./assets/images/sound.png";
		soundOn = true;
		playBackgroundMusic();
	} else {
		sound.src = "./assets/images/soundOff.png";
		soundOn = false;
		pauseBackgroundMusic();
	}
});

homeButtons.forEach((item) => {
	item.innerText = item.innerText.toUpperCase();
});

function playBackgroundMusic() {
	backgroundMusic.muted = false;
	backgroundMusic.play();
}

function pauseBackgroundMusic() {
	backgroundMusic.pause();
}

// Switch to single player
const switchToSinglePlayer = () => {
	const mainPage = document.querySelector(".main-page");
	const singlePlayerPage = document.querySelector(".single-player-page");
	mainPage.style.display = "none";
	singlePlayerPage.style.display = "flex";
};

const backToHome = () => {
	const mainPage = document.querySelector(".main-page");
	const singlePlayerPage = document.querySelector(".single-player-page");
	selectedLevel = null;
	mainPage.style.display = "flex";
	singlePlayerPage.style.display = "none";
	removeClass(easyLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	removeClass(mediumLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	removeClass(hardLevelButton, "homeItems__buttons-active", "homeItems__links-active");
};

document.querySelector(".homeIcon").addEventListener("click", backToHome);
document
	.querySelector(".btn-single-player")
	.addEventListener("click", switchToSinglePlayer);

openModalBtn.addEventListener("click", () => {
	modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
	modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.classList.add("hidden");
	}
});

// Play game based on selected level
easyLevelButton.addEventListener("click", function () {
	selectedLevel = "easy";
	toggleClass(easyLevelButton, "homeItems__buttons-active", "homeItems__links-active")
	removeClass(mediumLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	removeClass(hardLevelButton, "homeItems__buttons-active", "homeItems__links-active");
});

mediumLevelButton.addEventListener("click", function () {
	selectedLevel = "medium";
	toggleClass(mediumLevelButton, "homeItems__buttons-active", "homeItems__links-active")
	removeClass(easyLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	removeClass(hardLevelButton, "homeItems__buttons-active", "homeItems__links-active");
});

hardLevelButton.addEventListener("click", function () {
	selectedLevel = "hard";
	toggleClass(hardLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	removeClass(easyLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	removeClass(mediumLevelButton, "homeItems__buttons-active", "homeItems__links-active");
});

playButton.addEventListener("click", function () {
	// Show the page for the selected level.
	if (selectedLevel === "easy") {
		window.location.href = "./quickPlay.html?level=easy";
	} else if (selectedLevel === "medium") {
		window.location.href = "./quickPlay.html?level=medium";
	} else if (selectedLevel === "hard") {
		window.location.href = "./quickPlay.html?level=hard";
	}
});

function removeClass(level, className, linkClassName) {
	level.classList.remove(`${className}`);
	level.children[0].classList.remove(`${linkClassName}`);
}

function toggleClass(level, className, linkClassName) {
	level.classList.toggle(`${className}`);
	level.children[0].classList.toggle(`${linkClassName}`);
}