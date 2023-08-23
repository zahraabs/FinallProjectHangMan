"use strict";
// make variables
let homeButtons = document.querySelectorAll(".homeItems__links")
const sound = document.querySelector(".animationFrame__sound");

let soundOnOff = true;

const tickAudio = new Audio("./assets/sounds/Check mark sound effect.mp3")

homeButtons.forEach(item => {
    item.innerText = item.innerText.toUpperCase();
})

sound.addEventListener("click", e => {
    if (soundOnOff) {
        e.target.src = "./assets/images/soundOff.png";
        soundOnOff = false;
    } else if (soundOnOff == false) {
        e.target.src = "./assets/images/sound.png";
        soundOnOff = true;
        tickAudio.play()
    }
})