// main.js

// Here is where the recipes that you will fetch.
// Feel free to add your own here for part 2, if they are local files simply add their path as a string.
const recipes = [
  'https://introweb.tech/assets/json/ghostCookies.json',
  'https://introweb.tech/assets/json/birthdayCake.json',
  'https://introweb.tech/assets/json/chocolateChip.json'
];

// Once all of the recipes that were specified above have been fetched, their
// data will be added to this object below. You may use whatever you like for the
// keys as long as it's unique, one suggestion might but the URL itself
const recipeData = {}

window.addEventListener('DOMContentLoaded', init);

// This is the first function to be called, so when you are tracing your code start here.
async function init() {
  console.log("initi");
  //console.log(recipeData);
  // fetch the recipes and wait for them to load
  let fetchSuccessful = await fetchRecipes();
  console.log("send help");
  console.log(typeof recipeData);
  console.log(recipeData);
  // if they didn't successfully load, quit the function
  if (!fetchSuccessful) {
    console.log('Recipe fetch unsuccessful');
    return;
  };
  


  // Add the first three recipe cards to the page
  createRecipeCards();
  // Make the "Show more" button functional
  bindShowMore();
}

async function fetchRecipes() {
  return new Promise((resolve, reject) => {
    // This function is called for you up above
    // From this function, you are going to fetch each of the recipes in the 'recipes' array above.
    // Once you have that data, store it in the 'recipeData' object. You can use whatever you like
    // for the keys. Once everything in the array has been successfully fetched, call the resolve(true)
    // callback function to resolve this promise. If there's any error fetching any of the items, call
    // the reject(false) function.

    // For part 2 - note that you can fetch local files as well, so store any JSON files you'd like to fetch
    // in the recipes folder and fetch them from there. You'll need to add their paths to the recipes array.
    

    // Part 1 Expose - TODO
      var size = recipes.length;
      for (let i = 0; i < recipes.length; i++) {
      const newurl = recipes[i];

      console.log(newurl);
        fetch(newurl)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            recipeData[newurl] = data;
            //console.log(data);
            console.log(i);
            if (i == 2) {
              //console.log("resolved");
              //console.log(recipeData);
              resolve(true); 
            }
            
          })
          .catch((error) => {
            reject(false);
            console.log("Error");
          })
    }
});
}

function createRecipeCards() {
  // This function is called for you up above.
  // From within this function you can access the recipe data from the JSON 
  // files with the recipeData Object above. Make sure you only display the 
  // three recipes we give you, you'll use the bindShowMore() function to
  // show any others you've added when the user clicks on the "Show more" button.

  // Part 1 Expose - TODO
  console.log(recipeData);
  //</recipe-card>var size = recipeData.length;
  //for (const someData in recipeData) {
    console.log(Object.keys(recipeData).length);
    Object.keys(recipeData).forEach(key => {
      console.log(key);
    });
  // for (const someData in recipeData){
  Object.keys(recipeData).forEach( someData => {
    console.log(someData);
    const recipeCardElement = document.createElement("recipe-card");
    console.log(recipeData[someData]);
    recipeCardElement.data = recipeData[someData];
    document.querySelector("main").appendChild(recipeCardElement);
  });
   
 // }
  
}

function bindShowMore() {
  // This function is also called for you up above.
  // Use this to add the event listener to the "Show more" button, from within 
  // that listener you can then create recipe cards for the rest of the .json files
  // that were fetched. You should fetch every recipe in the beginning, whether you
  // display it or not, so you don't need to fetch them again. Simply access them
  // in the recipeData object where you stored them/

  // Part 2 Explore - TODO
}