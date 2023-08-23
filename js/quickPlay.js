const quickPlayBtns = document.querySelector(".quick-play__buttons");
function giveMeWordsOnScreen() {
    let wordsDataOnArray = Array(26).fill(null);
    let charCodeA = 65;
    wordsDataOnArray = wordsDataOnArray.map(() => {
        return String.fromCharCode(charCodeA++);
    });
    wordsDataOnArray.forEach((element)=>{
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
        const ingredients = recipe.extendedIngredients[0].name +" ," + recipe.extendedIngredients[1].name;
        
        console.log(title);
        console.log(ingredients);
        alphabet(title , ingredients)
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  
  getRandomRecipe();

  function alphabet (title , ingeredients ){
    const alpha = document.createElement("span");
    const ingeredient = document.createElement("span");
    ingeredient.classList.add("quick-play__blanks-parent--top");
    ingeredient.innerText = "ingeredients: "
    const blankParentElement = document.querySelector(".quick-play__blanks-parent");
    alpha.textContent =title;
    ingeredient.textContent +=ingeredients;
    blankParentElement.appendChild(alpha);
    blankParentElement.appendChild(ingeredient);
  } 