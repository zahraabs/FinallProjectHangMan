"use strict";

// DOM Selectors
const homeButtons = document.querySelectorAll(".homeItems__links");
const sound = document.querySelector(".animationFrame__sound");
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".questionIcon");
const closeModalBtn = document.querySelector(".btn-close");
const easyLevelButton = document.getElementById("easy-level");
const mediumLevelButton = document.getElementById("medium-level");
const hardLevelButton = document.getElementById("hard-level");
const playButton = document.querySelector(".buttonPlay");
const mainPage = document.querySelector(".main-page");
const singlePlayerPage = document.querySelector(".single-player-page");

// Variables
let soundOn = false;
let selectedLevel = null;
const backgroundMusic = new Audio("./assets/sounds/Freedom.mp3");

// Event Listeners
sound.addEventListener("click", toggleSound);
homeButtons.forEach((item) => {
	item.innerText = item.innerText.toUpperCase();
});
document.querySelector(".homeIcon").addEventListener("click", backToHome);
document.querySelector(".btn-single-player").addEventListener("click", switchToSinglePlayer);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
easyLevelButton.addEventListener("click", () => selectLevel("easy"));
mediumLevelButton.addEventListener("click", () => selectLevel("medium"));
hardLevelButton.addEventListener("click", () => selectLevel("hard"));
playButton.addEventListener("click", playGame);

// Functions
function toggleSound() {
	if (!soundOn) {
		sound.src = "./assets/images/sound.png";
		soundOn = true;
		playBackgroundMusic();
	} else {
		sound.src = "./assets/images/soundOff.png";
		soundOn = false;
		pauseBackgroundMusic();
	}
}

function playBackgroundMusic() {
	backgroundMusic.muted = false;
	backgroundMusic.play();
}

function pauseBackgroundMusic() {
	backgroundMusic.pause();
}

function switchToSinglePlayer() {
	hideElement(mainPage);
	showElement(singlePlayerPage);
}

function backToHome() {
	selectedLevel = null;
	removeClass(easyLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	removeClass(mediumLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	removeClass(hardLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	hideElement(singlePlayerPage);
	showElement(mainPage);
}

function openModal() {
	removeClass(modal, "hidden");
}

function closeModal(e) {
	if (e.target === closeModalBtn || e.target === modal) {
	  modal.classList.add("hidden");
	}
  }

function selectLevel(level) {
	selectedLevel = level;
	toggleClass(
		level === "easy" ? easyLevelButton : level === "medium" ? mediumLevelButton : hardLevelButton,
		"homeItems__buttons-active",
		"homeItems__links-active"
	);
	
	// Remove active class from the other level buttons
	if (level !== "easy") {
		removeClass(easyLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	}

	if (level !== "medium") {
		removeClass(mediumLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	}

	if (level !== "hard") {
		removeClass(hardLevelButton, "homeItems__buttons-active", "homeItems__links-active");
	}
}

function playGame() {
	if (selectedLevel) {
		window.location.href = `./quickPlay.html?level=${selectedLevel}`;
	}
}

function removeClass(element, className, linkClassName) {
	element.classList.remove(className);
	element.children[0].classList.remove(linkClassName);
}

function toggleClass(element, className, linkClassName) {
	element.classList.toggle(className);
	element.children[0].classList.toggle(linkClassName);
}

function hideElement(element) {
	element.style.display = "none";
}

function showElement(element) {
	element.style.display = "flex";
}