const quickPlayBtns = document.querySelector(".quickPlay__buttons");
const blankParentElement = document.querySelector(".quickPlay__blanksParent");
let title = null;

quickPlayBtns.addEventListener("click", clickOnEachBtn);

giveMeWordsOnScreen();


function giveMeWordsOnScreen() {
  let wordsDataOnArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  wordsDataOnArray = wordsDataOnArray.map(() => {
    return String.fromCharCode(charCodeA++);
  });
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
    } else {
      e.target.classList.add("quickPlay__wrong");
    }
    e.target.setAttribute("disabled", "disabled");
  }
}
