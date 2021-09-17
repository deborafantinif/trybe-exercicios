// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data);
};

const jokeContainer = document.getElementById('jokeContainer');

// const addJokeDOM = async () => {
//   const jokeRandom = await fetchJoke()
//     .then((joke) => jokeContainer.innerText = joke)
//     .catch((err) => err);
//   return jokeRandom
// }


window.onload = async () => {
  const jokeRandom = await fetchJoke()
    .then((joke) => jokeContainer.innerText = joke.joke)
    .catch((err) => err);
  return jokeRandom;
};