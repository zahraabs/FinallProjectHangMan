import { words, easyWords, mediumWords, hardWords } from "./wordList.js";

const quickPlayBtns = document.querySelector(".quickPlay__buttons");
const blankParentElement = document.querySelector(".quickPlay__blanksParent");
const hangBody = document.querySelector(".quickPlay__hang-body");
const result = document.querySelector(".result");

let currentWord = null;
let wordHint = null;
let level = words;


function giveMeWordsOnScreen() {
    let wordsDataOnArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
    wordsDataOnArray.forEach((element) => {
        const btn = document.createElement("button");
        btn.classList.add("quickPlay__button");
        btn.textContent = element;
        quickPlayBtns.appendChild(btn);
    })
}

let getRandomWord = level => {
    const { word, hint } = level[Math.floor(Math.random() * level.length)];
    currentWord = word;
    wordHint = hint;
}

function showWord(targetWord) {

    for (const char of targetWord) {
        const alpha = document.createElement("p");
        const paragraph = document.createElement("span");

        alpha.classList.add("quickPlay__alphabet");
        paragraph.classList.add("quickPlay__paragraph");
        paragraph.textContent = char;
        alpha.appendChild(paragraph);
        blankParentElement.appendChild(alpha);

        const invalidChars = [" ", "-", "&", ",", "_", "(", ")"];
        if (invalidChars.includes(alpha.textContent)) {
            alpha.classList.remove("quickPlay__alphabet");
        }
    }

}

function showHint(targetHint) {
    const hint = document.createElement("span");
    hint.classList.add("quickPlay__blanksParent--top");
    hint.innerText = "hint: "
    hint.textContent += targetHint;
    blankParentElement.appendChild(hint);
}

(function () {
    giveMeWordsOnScreen();
    getRandomWord(level);
    showWord(currentWord);
    showHint(wordHint);
})()