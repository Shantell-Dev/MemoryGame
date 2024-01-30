const moves = documents.getElementById("moves-count");
const timeValue =  documents.getElementById("time");
const startButton =  documents.getElementById("start");
const stopButton =  documents.getElementById("stop");
const gameContiner =  documents.querySelector("gameContiner");
const result = document.getElementById("result");
const controls = documents.querySelector("controls-container");

let cards;
let interval;
let firstcard = false;
let secondCard = false;

// Items Array
const items = [
    {name:""
}]