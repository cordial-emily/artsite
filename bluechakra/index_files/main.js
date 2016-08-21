

var audios = [];
var keys = [];
function makeNoise(key) {

	var data = [];
	var sampleRate = 8000;
	var note = [];
	note.push(keys[key]);
	freq = function(idx) {
		var r = 2 * Math.PI * 360 * Math.pow(2,(note[idx])/16.0) / sampleRate;
		return r;
	};
	for(var j = 0; j < sampleRate/16; j++) {
		data[j] = 64 + 32 * Math.round(Math.sin(freq(Math.round(j/sampleRate)) * j));
	}

	//Riffwave stuff
	var wave = new RIFFWAVE();
	wave.header.sampleRate = sampleRate;
	wave.header.numChannels = 1;
	wave.Make(data);
	audios[key].loop = true;
	audios[key].src = wave.dataURI;
	audios[key].play();
}



function handleStart(event) {
	event.preventDefault();
	//audio.src=
	makeNoise(event.target.id);
	//audio.loop = true;
	//audio.play();

}

function handleEnd(event) {
	audios[event.target.id].pause();
}

function touchSound(event) {
    handleStart(event);
    setTimeout( function() { 
        handleEnd(event); 
      } , 500);
    
}

function startup() {
	var notes = document.getElementsByClassName("key");
	for (var i =  0; i < notes.length; i++) {
		audios.push(new Audio());
		keys.push(i * -8 + 50);
		/*notes[i].addEventListener("touchstart", handleStart, false);
		notes[i].addEventListener("touchend", handleEnd, false);
		notes[i].addEventListener("touchmove", handleStart, false);*/
		
		notes[i].addEventListener("click", touchSound, false);

		/*notes[i].addEventListener("mouseenter", handleStart, false);
		notes[i].addEventListener("mouseleave", handleEnd, false);*/
	}
}

window.onload = startup();
