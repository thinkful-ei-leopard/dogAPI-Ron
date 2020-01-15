// This code was used for the first dog app and second dog app. It is no longer in use.
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