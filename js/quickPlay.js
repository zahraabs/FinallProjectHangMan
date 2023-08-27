const canvas = document.querySelector("canvas");
const quickPlayBtns = document.querySelector(".quickPlay__buttons");
const blankParentElement = document.querySelector(".quickPlay__blanksParent");
let title = null;

let context = canvas.getContext("2d");

context.fillStyle = "white";
context.strokeStyle = "black";

context.fillRect(0,0,600,600);
context.strokeRect(0,0,600,600);

canvas.width = 600;
canvas.height = 600;

quickPlayBtns.addEventListener("click", clickOnEachBtn);

giveMeWordsOnScreen();


function giveMeWordsOnScreen() {
  let wordsDataOnArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  wordsDataOnArray.forEach((element) => {
    const btn = document.createElement("button");
    btn.classList.add("quickPlay__button");
    btn.textContent = element;
    quickPlayBtns.appendChild(btn);
  })
}

const getRandomRecipe = async () => {
  const apiKey = "638e9c1dbc8647f28da391cc0e7fce3c";
  try {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const recipe = data.recipes[0]; // Get the first random recipe from the response

    title = recipe.title.toUpperCase();
    const ingredients = recipe.extendedIngredients[0].name + " ," + recipe.extendedIngredients[1].name;

    console.log(title);
    console.log(ingredients);
    for (const char of title) {
      alphabet(char);
    }
    ingredient(ingredients)
  } catch (error) {
    console.log('Error occurred:', error);
  }
};

getRandomRecipe();

function alphabet(title) {
  const alpha = document.createElement("p");
  const paragraph = document.createElement("span");

  alpha.classList.add("quickPlay__alphabet");
  paragraph.classList.add("quickPlay__paragraph");
  paragraph.textContent = title;
  alpha.appendChild(paragraph);
  blankParentElement.appendChild(alpha);

  const invalidChars = [" ", "-", "&", ",", "_", "(",")"];
  if (invalidChars.includes(alpha.textContent)) {
    alpha.classList.remove("quickPlay__alphabet");
  }
}

function ingredient(ingredients) {
  const ingredient = document.createElement("span");
  ingredient.classList.add("quickPlay__blanksParent--top");
  ingredient.innerText = "ingredients: "
  ingredient.textContent += ingredients;
  blankParentElement.appendChild(ingredient);
}


function clickOnEachBtn(e) {
  const letterClicked = e.target.textContent;
  if (letterClicked.length === 1) {
    const allLettersElement = document.querySelectorAll(".quickPlay__paragraph");
    
    let status = 0;
    
    for (const spanElement of allLettersElement) {
      if (letterClicked === spanElement.textContent) {
        spanElement.parentElement.textContent = letterClicked;
        status++;
      }
    }
    if (status != 0) {
      e.target.setAttribute("disabled", "disabled");
      e.target.classList.add("quickPlay__correct");
    } else {
      e.target.classList.add("quickPlay__wrong");
    }
    e.target.setAttribute("disabled", "disabled");
  }
}


// Draw the hangman stand
function drawHangmanStand() {
  clearCanvas();
  // Draw base
  context.beginPath();
  context.moveTo(100, canvas.height - 50);
  context.lineTo(canvas.width - 100, canvas.height - 50);
  context.stroke();

  // Draw vertical pole
  context.beginPath();
  context.moveTo(200, canvas.height - 50);
  context.lineTo(200, 100);
  context.stroke();

  // Draw horizontal pole
  context.beginPath();
  context.moveTo(200, 100);
  context.lineTo(canvas.width - 200, 100);
  context.stroke();

  // Draw support pole
  context.beginPath();
  context.moveTo(canvas.width - 200, 100);
  context.lineTo(canvas.width - 200, 150);
  context.stroke();

   // Draw the hangman figure
   context.beginPath();
   context.arc(canvas.width - 200, 200, 50, 0, Math.PI * 2);
   context.stroke();
 
   // Draw body
   context.beginPath();
   context.moveTo(canvas.width - 200, 250);
   context.lineTo(canvas.width - 200, 400);
   context.stroke();
 
   // Draw left arm
   context.beginPath();
   context.moveTo(canvas.width - 200, 300);
   context.lineTo(canvas.width - 250, 350);
   context.stroke();
 
   // Draw right arm
   context.beginPath();
   context.moveTo(canvas.width - 200, 300);
   context.lineTo(canvas.width - 150, 350);
   context.stroke();
 
   // Draw left leg
   context.beginPath();
   context.moveTo(canvas.width - 200, 400);
   context.lineTo(canvas.width - 250, 450);
   context.stroke();
 
   // Draw right leg
   context.beginPath();
   context.moveTo(canvas.width - 200, 400);
   context.lineTo(canvas.width - 150, 450);
   context.stroke();
}

// Clear the canvas
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

// Example usage
drawHangmanStand();