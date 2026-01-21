//Declaration et initialisation de nos variable
let btnStart = document.getElementById("startBtn");
let btnStop = document.getElementById("stopBtn");
let btnReset = document.getElementById("resetBtn");

let pResult = document.getElementById("showTimer");

let timer, countdown;

//Creation  des fonctions pour les fonctionnalite
function start() {
	timer = setInterval(function () {
		countdown += 1000;
	}, 1000);

	let hour = Math.floor();
	btnStart.disabled = true;
	btnStart.style.backgroundColor = "gray";
	btnStop.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnReset.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnStop.disabled = false;
	btnReset.disabled = false;
	console.log("Bravo start");
}

function updatTimer() {
	//convertisons la valeur de countdown en seconde et en minutes
	const minutes = Math.floor(countdown / (1000 * 60));
	const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

	timerShow.textContent = `${minutes}:${seconds}`;
}

function stop() {
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
