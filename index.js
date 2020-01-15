// Let users choose to display between 1 and 50 random dog images
// then print the results to the console.
// App should use a form with a REQUIRED input where the user indicates the number of images to retrieve
// the default input should be "3"

'use strict';

function getDogImages(num=3) {
    // change the number 3 to another number (1-50) after getting user input
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))// responseJson.message.forEach(dog => displayDogs(dog)))
    .catch(error => console.log(`Error: ${error.message}`));
}

function displayDogs(responseJson) {
    // get results of dogimages into a string
    // add the string to .results
    // allDogs 
    let allDogsHTML = '';
    responseJson.message.forEach(dog => {
        console.log(dog);
        allDogsHTML += `<h2>Look at this dog!</h2>
        <img src="${dog}" alt="placeholder">`
    });
    $('.results').html(allDogsHTML);
    $('.results').removeClass('hidden');
}

/** event listener */
function handleFormSubmit() {
  $('form').submit(event => {
    event.preventDefault();
    // get input value from form
    let numberOfDogs = $('input[name=dogNumber]').val();
    if(numberOfDogs > 50) {
        console.log('Error: No more than 50 dog images at a time!');
    } else {
        getDogImages(numberOfDogs);
    }
  });
}

function main() {
    console.log('App loaded! Waiting for submit!');
    handleFormSubmit();
}

$(main);