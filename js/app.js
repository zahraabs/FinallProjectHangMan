"use strict";
// Declare variables
let homeButtons = document.querySelectorAll(".homeItems__links");
let sound = document.querySelector(".animationFrame__sound");
const mainPage = document.querySelector(".main-page");
const singlePlayerPage = document.querySelector(".single-player-page");
// let easy = document.querySelector(".easy");
// let medium = document.querySelector(".medium");
// let hard = document.querySelector(".hard");

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
	mainPage.style.display = "none";
	singlePlayerPage.style.display = "flex";
};

const backToHome = () => {
	mainPage.style.display = "flex";
	singlePlayerPage.style.display = "none";
};

document.querySelector(".homeIcon").addEventListener("click", backToHome);
document.querySelector(".btn-single-player")
		.addEventListener("click", switchToSinglePlayer);

