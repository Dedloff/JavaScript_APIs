/*Class Notes:

API is Application Programming Interfaces, specifically we will be using the FETCH API
JSON is JavaScript Object Notation

Create an API on Giphy go to create an app 

Query Parameters follow a ?
name=value pairs
each pair is separated by a & 

*/
"use strict";

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "CwjqjW1X1EknCUg2xT4feWfo6Emcij9y";

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");

//Event Handlers
searchBtn.addEventListener("click", (event) => {
  fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((res) => res.json())
    .then((body) => {
      //show the gif on the dom
      gifEle.src = body.data.images.original.url;
    })
    .catch((err) => {
      console.error(err);
      //show the error message on the dom
      feedbackEle.textContent = err.message;
    });
});

async function getGif(searchTerm) {
  try {
    let res = await fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`);
    let body = await res.json();
    gifEle.src = body.data.images.original.url;
  } catch (err) {
    console.error(err);
    feedbackEle.textContent = err.message;
  }
}
