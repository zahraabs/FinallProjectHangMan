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
    const apiKey = "dc8c59fed59f4f498975bb7366c7b771";
    try {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      const recipe = data.recipes[0]; // Get the first random recipe from the response
      console.log(recipe);
      console.log(recipe.title);
      console.log('ingredient:', recipe.extendedIngredients[0].name,recipe.extendedIngredients[1].name);
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  
  getRandomRecipe();