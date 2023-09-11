import { words, easyWords, mediumWords, hardWords } from "./wordList.js";

const quickPlayBtns = document.querySelector(".quickPlay__buttons");
const blankParentElement = document.querySelector(".quickPlay__blanksParent");
const hangBody = document.querySelector(".quickPlay__hang-body");
const result = document.querySelector(".result");

let currentWord = null;
let wordHint = null;
let level = words;
let step = 0;
let finishGame = false;
let correctResponse = 0;

quickPlayBtns.addEventListener("click", clickOnEachBtn);
result.addEventListener('click', resetGame);

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

function clickOnEachBtn(e) {

    if (finishGame) return;

    const letterClicked = e.target.textContent;

    if (letterClicked.length === 1) {
        const allLettersElement = document.querySelectorAll(".quickPlay__paragraph");

        let status = 0;

        for (const spanElement of allLettersElement) {
            if (letterClicked === spanElement.textContent.toUpperCase()) {
                spanElement.parentElement.textContent = letterClicked;
                status++;
                correctResponse++;
            }
        }

        if (status == 0) {
            e.target.classList.add("quickPlay__wrong")
            hangman()
        }

        e.target.setAttribute("disabled", "disabled")

        if (step >= 7) showResult(0);
        if (correctResponse >= currentWord.length) showResult(1);

    }
}

function hangman() {
    hangBody.innerHTML += `<img src="assets/images/hangman-${step}.svg" alt="hang stand" />`;
    step++;
}

function showResult(res) {
    if (res === 0) {
        result.innerHTML = `<p>GameOver</p>
        <p>The correct word was : ${currentWord}</p>
        <img src="assets/images/lost.gif" width="50" height="50" />
        <button class="reset">Reset</button>`
    } else {
        result.innerHTML = `<p>Victory</p>
        <img src="assets/images/victory.gif" />
        <button class="reset">Reset</button>`
    }

    result.style.display = "block";
    finishGame = true;
}

function resetGame(e) {
    const resetBtn = result.querySelector(".reset");
if (e.target === resetBtn) {
    currentWord = null;
    wordHint = null;
    step = 0;
    correctResponse = 0;
    finishGame = false;

    result.style.display = "none";
    hangBody.innerHTML = "";
    quickPlayBtns.innerHTML = "";
    blankParentElement.innerHTML = "";

    giveMeWordsOnScreen();
    getRandomWord(level);
    showWord(currentWord);
    showHint(wordHint);
}
   
}

(function () {
    giveMeWordsOnScreen();
    getRandomWord(level);
    showWord(currentWord);
    showHint(wordHint);
})()