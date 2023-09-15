import { words, easyWords, mediumWords, hardWords } from "./wordList.js";

const quickPlayBtns = document.querySelector(".quickPlay__buttons");
const blankParentElement = document.querySelector(".quickPlay__blanksParent");
const hangBody = document.querySelector(".quickPlay__hang-body");
const result = document.querySelector(".result");

let currentWord = null;
let wordHint = null;
let step = 1;
let finishGame = false;
let correctResponse = 0;
let level = words;

quickPlayBtns.addEventListener("click", clickOnEachBtn);
result.addEventListener("click", resetGame);

function levelSelector() {
  if (window.location.href.includes("level=easy")) {
    level = easyWords;
  } else if (window.location.href.includes("level=medium")) {
    level = mediumWords;
  } else if (window.location.href.includes("level=hard")) {
    level = hardWords;
  } else {
    level = words;
  }
}

function createButton(letter) {
  const btn = document.createElement("button");
  btn.classList.add("quickPlay__button");
  btn.textContent = letter;
  return btn;
}

function renderLetters() {
  const letters = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  letters.forEach((letter) => {
    const btn = createButton(letter);
    quickPlayBtns.appendChild(btn);
  });
}

function getRandomWord(level) {
  const randomIndex = Math.floor(Math.random() * level.length);
  const { word, hint } = level[randomIndex];
  currentWord = word;
  wordHint = hint;
}

function createWordElement(char) {
  const alpha = document.createElement("p");
  const paragraph = document.createElement("span");

  alpha.classList.add("quickPlay__alphabet");
  paragraph.classList.add("quickPlay__paragraph");
  paragraph.textContent = char;
  alpha.appendChild(paragraph);

  const invalidChars = [" ", "-", "&", ",", "_", "(", ")"];
  if (invalidChars.includes(alpha.textContent)) {
    alpha.classList.remove("quickPlay__alphabet");
  }

  return alpha;
}

function renderWord(targetWord) {
  const wordsWrapper = document.createElement('div');
  wordsWrapper.classList.add('wordsWrapper');

  for (const char of targetWord) {
    const alpha = createWordElement(char);
    wordsWrapper.appendChild(alpha);
  }

  blankParentElement.appendChild(wordsWrapper);
}

function renderHint(targetHint) {
  const hint = document.createElement("span");
  hint.classList.add("quickPlay__blanksParent--top");
  hint.innerText = "hint: ";
  hint.textContent += targetHint;
  blankParentElement.appendChild(hint);
}

function clickOnEachBtn(e) {
  if (finishGame) return;

  const letterClicked = e.target.textContent;

  if (letterClicked.length === 1) {
    const allLettersElement = document.querySelectorAll(
      ".quickPlay__paragraph"
    );

    let status = 0;

    for (const spanElement of allLettersElement) {
      if (letterClicked === spanElement.textContent.toUpperCase()) {
        spanElement.parentElement.textContent = letterClicked;
        status++;
        correctResponse++;
      }
    }

    if (status == 0) {
      e.target.classList.add("quickPlay__wrong");
      hangman();
    }

    e.target.setAttribute("disabled", "disabled");
    e.target.classList.add("quickPlay__correct");

    if (step >= 7) showResult(0);
    if (correctResponse >= currentWord.length) showResult(1);
  }
}

function hangman() {
  hangBody.innerHTML += `<img src="assets/images/hangman-${step}.svg" alt="hang stand" />`;
  step++;
}

function showResult(res) {
  const gameOverMessage = res === 0 ? "Game Over" : "Victory";
  const gifImage = res === 0 ? "lost.gif" : "victory.gif";
  const audioFile = res === 0 ? "gameOver.mp3" : "winner.mp3";

  result.innerHTML = `<p class="game-${res === 0 ? "over" : "win"}">${gameOverMessage}</p>
                      <img class="result-gif" src="assets/images/${gifImage}" />
                      <button class="reset">Reset</button>
                      <a class="homeIcon" href="./index.html">
                        <img class="homeIcon__image homeIcon__image--smaller" src="./assets/images/home.png" alt="goHome">
                      </a>`;

  playAudio(audioFile);

  result.style.opacity = "1";
  result.style.zIndex = 999;
  finishGame = true;
}

function resetGame(e) {
  const resetBtn = result.querySelector(".reset");
  if (e.target === resetBtn) {
    currentWord = null;
    wordHint = null;
    step = 1;
    correctResponse = 0;
    finishGame = false;

    result.style.opacity = "0";
    result.style.zIndex = "-1";
    hangBody.innerHTML = "";
    quickPlayBtns.innerHTML = "";
    blankParentElement.innerHTML = "";

    renderLetters();
    getRandomWord(level);
    renderWord(currentWord);
    renderHint(wordHint);
    hangBody.innerHTML = `<img src="assets/images/hangman-0.svg" alt="hang stand" />`;
  }
}

const playAudio = (song) => {
  const audio = new Audio(`./assets/sounds/${song}`);
  audio.play();
};

(function initializeGame() {
  levelSelector();
  renderLetters();
  getRandomWord(level);
  renderWord(currentWord);
  renderHint(wordHint);
})();