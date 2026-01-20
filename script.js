//Declaration et initialisation de nos variable
let btnStart = document.getElementById("startBtn");
let btnStop = document.getElementById("stopBtn");
let btnReset = document.getElementById("resetBtn");

let pResult = document.getElementById("showTimer");

let timer, timeShow;
let btnAll = document.querySelectorAll("button");
//Creation  des fonctions pour les fonctionnalite
function start() {
	btnStart.disabled = true;
	btnStart.style.backgroundColor = "gray";
	btnStop.disabled = false;
	btnReset.disabled = false;
	console.log("Bravo start");
}

function stop() {
	btnStop.disabled = true;
	btnStart.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnStart.disabled = false;
	btnReset.disabled = false;
	console.log("Brovo stop");
}

function reset() {
	console.log("Brovo reset");
}

//Ajoutons des evenement a nos buttons
btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);
