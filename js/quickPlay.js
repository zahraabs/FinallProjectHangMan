const quickPlayBtns = document.querySelector(".quickPlay__buttons");
const blankParentElement = document.querySelector(".quickPlay__blanksParent");
const hangBody = document.querySelector(".quickPlay__hang-body");
const result = document.querySelector(".result");

let currentWord = null;
let wordHint = null;



function giveMeWordsOnScreen() {
    let wordsDataOnArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
    wordsDataOnArray.forEach((element) => {
        const btn = document.createElement("button");
        btn.classList.add("quickPlay__button");
        btn.textContent = element;
        quickPlayBtns.appendChild(btn);
    })
}

(function () {
    giveMeWordsOnScreen();
    
})()