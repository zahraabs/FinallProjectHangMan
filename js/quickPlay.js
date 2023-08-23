const quickPlayBtns = document.querySelector(".quick-play__buttons");
const blankParentElement = document.querySelector(".quick-play__blanks-parent");
function giveMeWordsOnScreen() {
  let wordsDataOnArray = Array(26).fill(null);
  let charCodeA = 65;
  wordsDataOnArray = wordsDataOnArray.map(() => {
    return String.fromCharCode(charCodeA++);
  });
  wordsDataOnArray.forEach((element) => {
    const btn = document.createElement("button");
    btn.classList.add("quick-play__button");
    btn.textContent = element;
    quickPlayBtns.appendChild(btn);
  })
}


giveMeWordsOnScreen();



const getRandomRecipe = async () => {
  const apiKey = "638e9c1dbc8647f28da391cc0e7fce3c";
  try {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const recipe = data.recipes[0]; // Get the first random recipe from the response

    const title = recipe.title;
    const ingredients = recipe.extendedIngredients[0].name + " ," + recipe.extendedIngredients[1].name;

    console.log(title);
    console.log(ingredients);
    for (let index = 0; index < title.length; index++) {
      alphabet(title[index])
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

  alpha.classList.add("quick-play__alphabet");
  paragraph.textContent = title;
  alpha.appendChild(paragraph);
  blankParentElement.appendChild(alpha);

  if (alpha.textContent == " " || alpha.textContent == "-"
    || alpha.textContent == "&" || alpha.textContent == "_"
    || alpha.textContent == "(" || alpha.textContent == ")") {
    alpha.classList.remove("quick-play__alphabet")
  }
}

function ingredient(ingredients) {
  const ingredient = document.createElement("span");
  ingredient.classList.add("quick-play__blanks-parent--top");
  ingredient.innerText = "ingredients: "
  ingredient.textContent += ingredients;
  blankParentElement.appendChild(ingredient);
}