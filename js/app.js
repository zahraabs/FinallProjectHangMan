"use strict";
// Declare variables
let homeButtons = document.querySelectorAll(".homeItems__links");
export let sound = document.querySelector(".animationFrame__sound");

let soundOn = false;

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
	// backgroundMusic.loop = true;
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
	mainPage.style.display = "flex";
	singlePlayerPage.style.display = "none";
};

document.querySelector(".homeIcon").addEventListener("click", backToHome);
document
	.querySelector(".btn-single-player")
	.addEventListener("click", switchToSinglePlayer);

// Modal
// Selectors
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".questionIcon");
const closeModalBtn = document.querySelector(".btn-close");

// Modal functionality
// Open the modal
openModalBtn.addEventListener("click", () => {
	modal.classList.remove("hidden");
});

// Close the modal
closeModalBtn.addEventListener("click", () => {
	modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.classList.add("hidden");
	}
});

// Play game based on selected level
let selectedLevel;

const easyLevelButton = document.getElementById("easy-level");
const mediumLevelButton = document.getElementById("medium-level");
const hardLevelButton = document.getElementById("hard-level");
const playButton = document.querySelector(".buttonPlay");

easyLevelButton.addEventListener("click", function () {
	selectedLevel = "easy";
	easyLevelButton.classList.toggle("homeItems__buttons-active");
	easyLevelButton.children[0].classList.toggle("homeItems__links-active");
	mediumLevelButton.classList.remove("homeItems__buttons-active");
	mediumLevelButton.children[0].classList.remove("homeItems__links-active");
	hardLevelButton.classList.remove("homeItems__buttons-active");
	hardLevelButton.children[0].classList.remove("homeItems__links-active");
});

mediumLevelButton.addEventListener("click", function () {
	selectedLevel = "medium";
	mediumLevelButton.classList.toggle("homeItems__buttons-active");
	mediumLevelButton.children[0].classList.toggle("homeItems__links-active");
	easyLevelButton.classList.remove("homeItems__buttons-active");
	easyLevelButton.children[0].classList.remove("homeItems__links-active");
	hardLevelButton.classList.remove("homeItems__buttons-active");
	hardLevelButton.children[0].classList.remove("homeItems__links-active");
});

hardLevelButton.addEventListener("click", function () {
	selectedLevel = "hard";
	hardLevelButton.classList.toggle("homeItems__buttons-active");
	hardLevelButton.children[0].classList.toggle("homeItems__links-active");
	easyLevelButton.classList.remove("homeItems__buttons-active");
	easyLevelButton.children[0].classList.remove("homeItems__links-active");
	mediumLevelButton.classList.remove("homeItems__buttons-active");
	mediumLevelButton.children[0].classList.remove("homeItems__links-active");
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

