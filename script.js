//Declaration et initialisation de nos variable
let btnStart = document.getElementById("startBtn");
let btnStop = document.getElementById("stopBtn");
let btnReset = document.getElementById("resetBtn");

let timerShow = document.getElementById("showTimer");

let timer = null;
let startTime = 0;
let timeLeft = 0;

//Creation  des fonctions pour les fonctionnalite
function start() {
	startTime = Date.now() - timeLeft;
	timer = setInterval(function () {
		timeLeft = Date.now() - startTime;
		updatTimer(timeLeft);
	}, 10);

	btnStart.disabled = true;
	btnStart.style.backgroundColor = "gray";
	btnStop.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnReset.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnStop.disabled = false;
	btnReset.disabled = false;
	console.log("Bravo start");
}

function updatTimer(times) {
	//convertisons la valeur de countdown en seconde et en minutes
	const hours = Math.floor(times / (1000 * 60 * 60));
	const minutes = Math.floor((times % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((times % (1000 * 60)) / 1000);
	const ms = Math.floor((times % 1000) / 10);

	timerShow.textContent = `${hours}:${minutes}:${seconds}.${ms}`;
}

function stop() {
	clearInterval(timer);
	btnStop.disabled = true;
	btnStop.style.backgroundColor = "gray";
	btnStart.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnReset.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnStart.disabled = false;
	btnReset.disabled = false;
	console.log("Brovo stop");
}

function reset() {
	btnReset.disabled = true;
	btnReset.style.backgroundColor = "gray";
	btnStart.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnStop.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnStart.disabled = false;
	btnStop.disabled = false;

	console.log("Brovo reset");
}

//Ajoutons des evenement a nos buttons
btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);
