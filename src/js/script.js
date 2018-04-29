/*****************************************************************************/
/*                            VARIABLES                                      */
/*****************************************************************************/

// let app = document.getElementById("app");
// let gamesList = document.getElementById("gamesList");
// let genresList = document.getElementById("genresList");
// let idealList = document.getElementById("idealList");
// let playerList = document.getElementById("playerList");
// let mechanicsList = document.getElementById("mechanicsList");





// let games = [];
// let genres = [];
// let ideal = [];
// let players = [];
// let mechanics = [];
// let difficulty = [];
// let gameArr = [];
// let endpoint = "https://www.darrencarlin.com/games.json";

// Form Inputs 

let formName = document.getElementById("formName");
let formDescription = document.getElementById("formDescription");
let formImage = document.getElementById("formImage");
let formType = document.getElementById("formType");
let formGenre = document.getElementById("formGenre");
let formIdeal = document.getElementById("formIdeal");
let formPlayersIdeal = document.getElementById("formPlayersIdeal");
let formPlayersMinimum = document.getElementById("formPlayersMinimum");
let formPlayersMax = document.getElementById("formPlayersMax");
let formAge = document.getElementById("formAge");
let formDifficulty = document.getElementById("formDifficulty");
let formSetupTime = document.getElementById("formSetupTime");
let formPlayTime = document.getElementById("formPlayTime");
let formPublishDate = document.getElementById("formPublishDate");
let formPublisher = document.getElementById("formPublisher");
let formExpansion = document.getElementById("formExpansion");
let formLocation = document.getElementById("formLocation");
let submitForm = document.getElementById("formSubmit"); 
submitForm.addEventListener("click", addGame);

var database = firebase.database();

function addGame(evt) {
    evt.preventDefault
    let data = {

        name: formName.value,
        description: formDescription.value,
        image: formImage.value,
        type: formType.value,
        genre: formGenre.value,
        idealFor: formIdeal.value,
        playersIdeal: formPlayersIdeal.value,
        playersMin: formPlayersMinimum.value,
        playersMax: formPlayersMax.value,
        age: formAge.value,
        difficulty: formDifficulty.value,
        setupTime: formSetupTime.value,
        playTime: formPlayTime.value,
        yearPublished: formPublishDate.value,
        publisher: formPublisher.value,
        expansion: formExpansion.value,
        location: formLocation.value 
        
    }

    let firebaseKey = firebase.database().ref().child("board-game-tabletop").push().key;

    let updates = {};
    updates['/' + firebaseKey] = data;

    return firebase.database().ref().update(updates);
}




/*****************************************************************************/
/*                            FUNCTIONS                                      */
/*****************************************************************************/

// // Flatten / De-duplicate Arrays.

// let flattenSort = (arr) => {
//     return [...new Set(arr.reduce((a, b) => a.concat(b), []))];
// }


// // Find max player Count off all games.

// let findMax = (arr) => {
//     return [Math.max(...arr)];
// }

// // Remove empty strings from Array 

// let removeEmpty = (arr) => {
//     arr.filter(str => str.trim() != '');
// };


// // Create and populate options for select menus.
// // *numberedList is used for player 2 - 'max player' 

// let populateOption = (jsArr, htmlEl, numberedList = false) => {

//     if (numberedList) {
//         for (let i = 2; i <= jsArr; i++) {
//             htmlEl.innerHTML += `<option value="${i}"> ${i} </option>`;
//         }
//     } else {
//         for (let i of jsArr) {
//             htmlEl.innerHTML += `<option value="${i}"> ${i} </option>`;
//         }
//     }
// }

// const gamez = [];

// fetch(endpoint)
//     .then(blob => blob.json())
//     .then(data => gamez.push(...data));

// gamez.forEach((game) => {
//     games.push(game.name);
// })

// function findMatches(wordToMatch, gamez) {
//     return gamez.filter(item => {
//         const regex = new RegExp(wordToMatch, 'gi');
//         return item.name.match(regex)
//     })
// }

// function displayMatches() {
//     const matchArray = findMatches(this.value, gamez)
//     const html = matchArray.map(item => {
//         return `
//         <li>
//             ${item.name}
//         </li>
//         `;
//     }).join('');
//     suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search-bar');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);

// // AJAX Call 
// let gamez = [];
// fetch(endpoint)
//     .then(response => response.json())
//     //  .then(jsonData => gamez.push(...jsonData))
//     .then(data => data.forEach((game, index) => {

//         gameArr.push(game); // Storing entire JSON data.

//         games.push(game.name); // Storing Names

//         genres.push(game.genre); // Storing Genres
//         genres = (flattenSort(genres));

//         ideal.push(game.idealFor); // Storing Ideal For
//         ideal = flattenSort(ideal);

//         players.push(game.players.playersMax); // Storing Max Players
//         players = findMax(players);

//         mechanics.push(game.mechanics); // Storing Mechanics
//         mechanics = flattenSort(mechanics);

//         difficulty.push(game.difficulty); // Storing Difficulty 
//         difficulty = flattenSort(difficulty);

//         populateOption(games, gamesList);
//         populateOption(genres, genresList);
//         populateOption(ideal, idealList);
//         populateOption(mechanics, mechanicsList);
//         populateOption(difficulty, difficultyList);
//         populateOption(players, playerList, true);


//     }))
//     .catch(function (error) {
//         console.log(error);
//     });