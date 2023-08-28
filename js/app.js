"use strict";
// Declare variables
let homeButtons = document.querySelectorAll(".homeItems__links")
let sound = document.querySelector(".animationFrame__sound");

let soundOnOff = true;


const tickAudio = new Audio("./assets/sounds/Check mark sound effect.mp3")
const backgroundMusic = new Audio('./assets/sounds/Freedom.mp3');

playBackgroundMusic();

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

  

//   const characterElement = document.querySelector(".animationFrame__boyCharacter");
// let currentBackgroundPositionX = 0;
// let frameWidth = 644; // Adjust this value based on the width of each frame in your sprite sheet

// function changeBackgroundPosition() {
//   characterElement.style.backgroundPosition = `${currentBackgroundPositionX}px 0`;
//   currentBackgroundPositionX -= frameWidth; // Adjust based on sprite sheet frame width
// }

// setInterval(changeBackgroundPosition, 800);



// export { pauseBackgroundMusic, playBackgroundMusic,tickAudio , backgroundMusic, soundOnOff};