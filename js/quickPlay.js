const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const keyboardWidth = 400;
const keyboardHeight = 200;
const keyWidth = keyboardWidth / 10;
const keyHeight = keyboardHeight / 3;
const keyPadding = 10;
let recipe;

canvas.width = 900;
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
  context.lineTo(canvas.width - 500, canvas.height - 50);
  context.stroke();

  // Draw vertical pole
  context.beginPath();
  context.moveTo(100, canvas.height - 50);
  context.lineTo(100, 100);
  context.stroke();

  // Draw horizontal pole
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(canvas.width - 600, 100);
  context.stroke();

  // Draw support pole
  context.beginPath();
  context.moveTo(canvas.width - 600, 100);
  context.lineTo(canvas.width - 600, 150);
  context.stroke();

  // Draw the hangman figure
  context.beginPath();
  context.arc(canvas.width - 600, 200, 50, 0, Math.PI * 2);
  context.stroke();

  // Draw body
  context.beginPath();
  context.moveTo(canvas.width - 600, 250);
  context.lineTo(canvas.width - 600, 400);
  context.stroke();

  // Draw left arm
  context.beginPath();
  context.moveTo(canvas.width - 600, 300);
  context.lineTo(canvas.width - 650, 350);
  context.stroke();

  // Draw right arm
  context.beginPath();
  context.moveTo(canvas.width - 600, 300);
  context.lineTo(canvas.width - 550, 350);
  context.stroke();

  // Draw left leg
  context.beginPath();
  context.moveTo(canvas.width - 600, 400);
  context.lineTo(canvas.width - 650, 450);
  context.stroke();

  // Draw right leg
  context.beginPath();
  context.moveTo(canvas.width - 600, 400);
  context.lineTo(canvas.width - 550, 450);
  context.stroke();
}

// Clear the canvas
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

drawHangmanStand();

// Draw the keyboard alphabet
function drawKeyboard() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < alphabet.length; i++) {
    const keyX = 450 + (i % 10) * keyWidth;
    const keyY = 300 + Math.floor(i / 10) * keyHeight;

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

// API Call to get random recipe
// API Call to get random recipe
const getRandomRecipe = async () => {
  const apiKey = "638e9c1dbc8647f28da391cc0e7fce3c";
  try {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    recipe = data.recipes[0]; // Assign the first random recipe to the global recipe variable

    if (recipe) {
      const title = recipe.title.toUpperCase();
      const ingredients =
        recipe.extendedIngredients[0].name +
        ", " +
        recipe.extendedIngredients[1].name;

      console.log(title);
      console.log(ingredients);

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

// Track selected and disabled letters
let selectedLetters = [];
let disabledLetters = [];

// Click event on keyboard buttons
canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < alphabet.length; i++) {
    const keyX = 100 + (i % 10) * keyWidth;
    const keyY = 400 + Math.floor(i / 10) * keyHeight;

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

      // Your code to handle the selected letter goes here
      // For example, check if the selected letter is present in the recipe name

      if (recipe) {
        const title = recipe.title.toUpperCase();
        if (title.includes(selectedLetter)) {
          console.log("Letter found in the recipe name!");

          // Disable the selected letter button
          disabledLetters.push(selectedLetter);

          // Disable the corresponding button
          context.fillStyle = "#cccccc";
          context.strokeStyle = "black";
          
          context.fillRect(keyX, keyY, keyWidth, keyHeight);

          // Your code to disable the corresponding button goes here
        } else {
          console.log("Letter not found in the recipe name.");

          // Multiply the lines for the wrong letter button
          selectedLetters.push(selectedLetter);

          // Draw lines for the wrong letter button
          const lineX = keyX + keyWidth / 2;
          const lineY1 = keyY + keyHeight / 2 - 10;
          const lineY2 = keyY + keyHeight / 2 + 10;

          context.strokeStyle = "red";
          context.beginPath();
          context.moveTo(lineX, lineY1);
          context.lineTo(lineX, lineY2);
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