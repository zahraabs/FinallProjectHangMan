const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const keyboardWidth = 400;
const keyboardHeight = 200;
const keyWidth = keyboardWidth / 10;
const keyHeight = keyboardHeight / 3;
const keyPadding = 10;
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;

let recipe;
let recipeTitle = "";
let recipeIngredients = "";

canvas.width = 1000;
canvas.height = 600;

context.fillStyle = "white";
context.strokeStyle = "black";

context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeRect(0, 0, canvas.width, canvas.height);

// Draw the hangman stand
function drawHangmanStand() {
  // Draw base
  context.beginPath();
  context.moveTo(0, canvas.height - 50);
  context.lineTo(canvas.width - 600, canvas.height - 50);
  context.stroke();

  // Draw vertical pole
  context.beginPath();
  context.moveTo(50, canvas.height - 50);
  context.lineTo(50, 100);
  context.stroke();

  // Draw horizontal pole
  context.beginPath();
  context.moveTo(50, 100);
  context.lineTo(canvas.width - 700, 100);
  context.stroke();

  // Draw support pole
  context.beginPath();
  context.moveTo(canvas.width - 700, 100);
  context.lineTo(canvas.width - 700, 150);
  context.stroke();

  // Draw the hangman figure
  // context.beginPath();
  // context.arc(canvas.width -700, 200, 50, 0, Math.PI * 2);
  // context.stroke();

  // // Draw body
  // context.beginPath();
  // context.moveTo(canvas.width - 700, 250);
  // context.lineTo(canvas.width - 700, 400);
  // context.stroke();

  // // Draw left arm
  // context.beginPath();
  // context.moveTo(canvas.width - 700, 300);
  // context.lineTo(canvas.width - 750, 350);
  // context.stroke();

  // // Draw right arm
  // context.beginPath();
  // context.moveTo(canvas.width - 700, 300);
  // context.lineTo(canvas.width - 650, 350);
  // context.stroke();

  // // Draw left leg
  // context.beginPath();
  // context.moveTo(canvas.width - 700, 400);
  // context.lineTo(canvas.width - 750, 450);
  // context.stroke();

  // // Draw right leg
  // context.beginPath();
  // context.moveTo(canvas.width - 700, 400);
  // context.lineTo(canvas.width - 650, 450);
  // context.stroke();
}

// Clear the canvas
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

// Draw the keyboard alphabet
function drawKeyboard() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < alphabet.length; i++) {
    const keyX = 450 + (i % 10) * (keyWidth + keyPadding);
    const keyY = 300 + Math.floor(i / 10) * (keyHeight + keyPadding);

    context.fillStyle = "#e0e0e0";
    context.fillRect(keyX, keyY, keyWidth, keyHeight);

    context.fillStyle = "black";
    context.font = "22px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(
      alphabet[i],
      keyX + keyWidth / 2,
      keyY + keyHeight / 2
    );

    context.strokeStyle = "black";
    context.strokeRect(keyX, keyY, keyWidth, keyHeight);
  }
}

drawKeyboard();

const getRandomRecipe = async () => {
  const apiKey = "638e9c1dbc8647f28da391cc0e7fce3c";


  try {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    recipe = data.recipes[0]; // Assign the first random recipe to the global recipe variable

    if (recipe) {
      recipeTitle = recipe.title.toUpperCase();
      recipeIngredients = recipe.extendedIngredients
        .slice(0, 2) // Get the first two ingredients
        .map((ingredient) => ingredient.name)
        .join(", ");

        displayRecipe();

     console.log(recipeTitle);
     console.log(recipeIngredients);
      // Your code to display the recipe title and ingredients goes here
    } else {
      console.log("No recipe found.");
    }
  } catch (error) {
    console.log("Error occurred:", error);
  }
};

// Call the API to get a random recipe once at the start
getRandomRecipe();


function displayRecipe() {
  context.strokeStyle = "black";
  context.lineWidth = 2;

  const charGap = 20; // Adjust the gap size between letters
  const lineY = canvas.height - 60; // Initial line Y position
  const lineSpacing = 40; // Adjust the vertical spacing between lines
  const maxLineWidth = canvas.width * 0.6; // Maximum width of a line before wrapping

  const totalWidth = (recipeTitle.length - 1) * charGap;
  let currentX = canvas.width / 2 - totalWidth / 2;
  let currentY = lineY;

  for (let i = 0; i < recipeTitle.length; i++) {
    const lineX1 = currentX;
    const lineX2 = currentX + charGap;

    if (recipeTitle[i] !== ' ') {
      context.beginPath();
      context.moveTo(lineX1, currentY);
      context.lineTo(lineX2, currentY);
      context.stroke();
    }

    currentX += charGap + context.measureText(recipeTitle[i]).width;

    // Wrap to the next line if the current line exceeds the maximum width
    if (currentX > maxLineWidth) {
      currentX = canvas.width / 2 - totalWidth / 2;
      currentY += lineSpacing;
    }
  }

  // Draw the hangman figure based on the number of incorrect guesses
  if (incorrectGuesses >= maxIncorrectGuesses) {
    gameOver(recipeTitle);
  }

    if (incorrectGuesses > 0) drawHead();
    if (incorrectGuesses > 1) drawBody();
    if (incorrectGuesses > 2) drawLeftArm();
    if (incorrectGuesses > 3) drawRightArm();
    if (incorrectGuesses > 4) drawLeftLeg();
    if (incorrectGuesses > 5) drawRightLeg();
    if (incorrectGuesses > 6) drawHangmanStand();
  } 
 
  



function drawHead() {
  context.beginPath();
  context.arc(canvas.width - 700, 200, 50, 0, Math.PI * 2);
  context.stroke();
}

function drawBody() {
  context.beginPath();
  context.moveTo(canvas.width - 700, 250);
  context.lineTo(canvas.width - 700, 400);
  context.stroke();
}

function drawLeftArm() {
  context.beginPath();
  context.moveTo(canvas.width - 700, 300);
  context.lineTo(canvas.width - 750, 350);
  context.stroke();
}

function drawRightArm() {
  context.beginPath();
  context.moveTo(canvas.width - 700, 300);
  context.lineTo(canvas.width - 650, 350);
  context.stroke();
}

function drawLeftLeg() {
  context.beginPath();
  context.moveTo(canvas.width - 700, 400);
  context.lineTo(canvas.width - 750, 450);
  context.stroke();
}

function drawRightLeg() {
  context.beginPath();
  context.moveTo(canvas.width - 700, 400);
  context.lineTo(canvas.width - 650, 450);
  context.stroke();
}


// Track selected and disabled letters
let selectedLetters = [];
let disabledLetters = [];

canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < alphabet.length; i++) {
    const keyX = 450 + (i % 10) * (keyWidth + keyPadding);
    const keyY = 300 + Math.floor(i / 10) * (keyHeight + keyPadding);

    if (
      mouseX >= keyX &&
      mouseX <= keyX + keyWidth &&
      mouseY >= keyY &&
      mouseY <= keyY + keyHeight
    ) {
      const selectedLetter = alphabet[i];
      console.log("Selected letter:", selectedLetter);
      

      // Check if the selected letter is already disabled
      if (disabledLetters.includes(selectedLetter)) {
        console.log("Letter already disabled.");
        break;
      }


      // For example, check if the selected letter is present in the recipe name

      if (recipe) {
        const title = recipe.title.toUpperCase();
        if (title.includes(selectedLetter)) {
          console.log("Letter found in the recipe name!");

          // Disable the selected letter button
          disabledLetters.push(selectedLetter);

          // Disable the corresponding button
          context.globalAlpha = 0.6;
          context.fillStyle = "#cccccc";
          context.strokeStyle = "black";
          context.fillRect(keyX, keyY, keyWidth, keyHeight);

          // Calculate the horizontal spacing between displayed letters
          const charGap = canvas.width / title.length;

          // Declare and initialize lineY
          let lineY = 50;

          // Calculate maxLineWidth
          const maxLineWidth = canvas.width - charGap;

          // Define lineSpacing
          const lineSpacing = 30;  // You can adjust this value as needed

          // Display the selected letter in the appropriate positions
          for (let j = 0; j < title.length; j++) {
            if (title[j] === selectedLetter) {
              const lineX = canvas.width - title.length * charGap + j * charGap;
              lineY = lineY + Math.floor(j / (maxLineWidth / charGap)) * lineSpacing;
              context.fillStyle = "black";
              context.font = "20px Arial";
              context.textAlign = "center";
              context.textBaseline = "middle";
              context.fillText(selectedLetter, lineX, lineY);
            }
          }
        } else {
          console.log("Letter not found in the recipe name.");
          updateIncorrectGuesses();
          // Multiply the lines for the wrong letter button
          selectedLetters.push(selectedLetter);

          // Draw lines for the wrong letter button
          const lineX1 = keyX;
          const lineX2 = keyX + keyWidth;
          const lineY1 = keyY;
          const lineY2 = keyY + keyHeight;

          context.globalAlpha = 0.5;
          context.strokeStyle = "red";
          context.lineWidth = 2;
          context.beginPath();
          context.moveTo(lineX1, lineY1);
          context.lineTo(lineX2, lineY2);
          context.stroke();

          context.beginPath();
          context.moveTo(lineX2, lineY1);
          context.lineTo(lineX1, lineY2);
          context.stroke();

          // Your code to multiply the lines for the wrong letter button goes here
        }
      } else {
        console.log("No recipe found.");
      }

      break;
    }
  }
});

function updateIncorrectGuesses() {
  incorrectGuesses++;
  switch (incorrectGuesses) {
    case 1:
      drawHead();
      break;
    case 2:
      drawBody();
      break;
    case 3:
      drawLeftArm();
      break;
    case 4:
      drawRightArm();
      break;
    case 5:
      drawLeftLeg();
      break;
    case 6:
      drawRightLeg();
      break;
    case 7:
      drawHangmanStand();
      break;
  }
}

function gameOver(secretWord) {
  console.log("Game over!");
  console.log("The word was: " + secretWord);
  var playAgain = prompt("Do you want to play again? (yes/no)");
  if (playAgain.toLowerCase() === "yes") {
    resetGame();
    return true;  // Start a new game
  } else {
    return false;  // End the game
  }
}

function resetGame() {
  // Reset any necessary variables or states
  incorrectGuesses = 0;
}