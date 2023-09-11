"use strict";
// Declare variables
let homeButtons = document.querySelectorAll(".homeItems__links");
let sound = document.querySelector(".animationFrame__sound");

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
	console.log("open clicked");
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
