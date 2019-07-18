(function() {
	setInterval(function(){
		secondsHTML = document.getElementsByClassName("left")[0].innerHTML;
		var seconds = parseInt(secondsHTML.match(/\d+/g).map(Number));

		scoreHTML = document.getElementsByClassName("left")[0].innerHTML;
		var score = parseInt(scoreHTML.match(/\d+/g).map(Number));

		if (seconds === 0) {
			console.log("GAME COMPLETED");
			console.log("Score: ", score);
			console.log("Seconds: ", seconds);
		}

	}, 1000);
})();
