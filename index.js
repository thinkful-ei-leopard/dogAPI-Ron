// This file will be used for part 3 of the checkpoint. 
// display one image of one breed
// with errors

'use strict';

function getDogImages(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`) 
    .then(response => response.json())
    .then(responseJson => {
        if (responseJson.status === 'success') {
            displayDogs(responseJson);
        } else {
            displayError(responseJson);
        }
    })
    .catch(error => console.log(`Error: ${error.message}`));
}

function displayDogs(responseJson) {
    // get results of dogimages into a string
    // add the string to .results
    // let allDogsHTML = '';
    // responseJson.message.forEach(dog => {
    //     console.log(dog);
    //     allDogsHTML += `<h2>Look at this dog!</h2>
    //     <img src="${dog}" alt="placeholder">`
    // });
    let dog_html = `<h2>Look at this dog!</h2>
    <img src="${responseJson.message}" alt="placeholder">`
    $('.results').html(dog_html);
    $('.results').removeClass('hidden');
}

/** event listener */
function handleFormSubmit() {
  $('form').submit(event => {
    event.preventDefault();
    // get input value from form
    let breedOfDogs = $('input[name=dogNumber]').val();
    if(!breedOfDogs) {
        console.log('Error: Please enter the dog breed');
    } else {
        getDogImages(breedOfDogs);
    }
  });
}

function main() {
    console.log('App loaded! Waiting for submit!');
    handleFormSubmit();
}

$(main);