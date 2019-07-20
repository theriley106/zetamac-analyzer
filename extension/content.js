(function() {
	setInterval(function(){
		console.log("THIS STARTED");
		secondsHTML = document.getElementsByClassName("left")[0].innerHTML;
		var seconds = parseInt(secondsHTML.match(/\d+/g).map(Number));

		scoreHTML = document.getElementsByClassName("left")[0].innerHTML;
		var score = parseInt(scoreHTML.match(/\d+/g).map(Number));
		chrome.storage.sync.get("data", function(items) {
			    if (!chrome.runtime.error) {
			    	console.log(items.data);
			    }
			  });
		if (seconds === 0) {
			console.log("GAME COMPLETED");
			console.log("Score: ", score);
			console.log("Seconds: ", seconds);
		}

	}, 300);
})();
