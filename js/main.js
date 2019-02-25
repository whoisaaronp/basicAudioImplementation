// This is audio 


 (() => { 
// check to see if it's working 	
console.log('Its Firing')

 	let aud = document.querySelector('audio'),
		play = document.querySelector("#playAudio"),
		pause = document.querySelector("#stopAudio"),
		rewind = document.querySelector("#rewindAudio");
		tracks = document.querySelectorAll(".trackholder");

	//play the music
	function playAudio() {
		aud.play();
	}	

	// pause the music 
	function pauseAudio() {
		aud.pause(true);
	}

	// brings it back to the beginning
	function rewindAudio() {
		aud.currentTime = 0;
		// play again after rewind
		playAudio();
	}

	// for the drag and drop function to play on drop
	function switchAudioTrack() {
		currentTrack = this.dataset.currenttrack;

		aud.src = `audio/${currentTrack}`;
		aud.load();
		aud.play();
	}

	play.addEventListener("click", playAudio);
	pause.addEventListener("click", pauseAudio);
	rewind.addEventListener("click", rewindAudio);

	// this is the function events that start the music ( use this for the drag and drop and start playing music)
	tracks.forEach(track => {
		track.addEventListener('click', switchAudioTrack);
	});

 })();