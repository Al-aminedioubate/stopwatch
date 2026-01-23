//Declaration et initialisation de nos variable
let btnStart = document.getElementById("startBtn");
let btnStop = document.getElementById("stopBtn");
let btnReset = document.getElementById("resetBtn");

let timerShow = document.getElementById("showTimer");

let timer = null;
let startTime = 0;
let timeLeft = 0;

//fonction du mise a jour du temps
function updatTimer(times) {
	//convertisons la valeur de countdown en seconde et en minutes
	const hours = Math.floor(times / (1000 * 60 * 60));
	const minutes = Math.floor((times % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((times % (1000 * 60)) / 1000);
	const ms = Math.floor((times % 1000) / 10);

	timerShow.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(ms).padStart(2, "0")}`;
}

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
}

//fonction permettant d'arreter le chrono
function stop() {
	clearInterval(timer);

	btnStop.disabled = true;
	btnStop.style.backgroundColor = "gray";
	btnStart.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnReset.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnStart.disabled = false;
	btnReset.disabled = false;
}

//La fonction permettant de remettre le chrono a zero
function reset() {
	clearInterval(timer);
	startTime = 0;
	timeLeft = 0;
	updatTimer(0);

	btnReset.disabled = true;
	btnReset.style.backgroundColor = "gray";
	btnStart.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnStop.style.backgroundColor = "rgba(238, 24, 171, 0.768)";
	btnStart.disabled = false;
	btnStop.disabled = false;
}

//Ajoutons des evenement a nos buttons
btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);
