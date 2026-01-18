//Declaration et initialisation de nos variable
let btnStart = document.getElementById("startBtn");
let btnStop = document.getElementById("stopBtn");
let btnReset = document.getElementById("resetBtn");

let pResult = document.getElementById("showTimer");

let timer, timeShow;

//Creation  des fonctions pour les fonctionnalite
function start() {
	console.log("Bravo start");
}
function stop() {
	console.log("Brovo stop");
}
function reset() {
	console.log("Brovo reset");
}

//Ajoutons des evenement a nos buttons
btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);
