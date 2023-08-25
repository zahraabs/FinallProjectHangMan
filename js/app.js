"use strict";
// make variables
let homeButtons = document.querySelectorAll(".homeItems__links")
const sound = document.querySelector(".animationFrame__sound");

let soundOnOff = true;

const tickAudio = new Audio("./assets/sounds/Check mark sound effect.mp3")
const backgroundMusic = new Audio('./assets/sounds/Freedom.mp3');

homeButtons.forEach(item => {
    item.innerText = item.innerText.toUpperCase();
})

sound.addEventListener("click", () => {
    if (soundOnOff) {
        sound.src = "./assets/images/soundOff.png";
        soundOnOff = false;
          pauseBackgroundMusic();
    } else {
        sound.src = "./assets/images/sound.png";
        soundOnOff = true;
        tickAudio.play();
        playBackgroundMusic();
    }
})


function playBackgroundMusic() {
    backgroundMusic.loop = true; 
    backgroundMusic.play();
  }

  function pauseBackgroundMusic() {
    backgroundMusic.pause();
  }


  playBackgroundMusic();