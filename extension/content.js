(function() {
	window.save = 0;
	setInterval(function(){
		// console.log("THIS STARTED");
		secondsHTML = document.getElementsByClassName("left")[0].innerHTML;
		var seconds = parseInt(secondsHTML.match(/\d+/g).map(Number));

		scoreHTML = document.getElementsByClassName("correct")[0].innerHTML;
		var score = parseInt(scoreHTML.match(/\d+/g).map(Number));
		chrome.storage.sync.get("data", function(items) {
			    if (!chrome.runtime.error) {
			    	window.urlVal = items.data;
			    	// console.log(items.data);
			    }
			  });
		var save = (seconds === 0) && (window.save === 0);
		if (save) {
			var xhr = new XMLHttpRequest();
			var url = window.urlVal;
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onreadystatechange = function () {
			    if (xhr.readyState === 4 && xhr.status === 200) {
			        //var json = JSON.parse(xhr.responseText);
			        console.log(xhr.responseText);
			    }
			};
			var data = JSON.stringify({"score": score});
			xhr.send(data);
			console.log("GAME COMPLETED");
			console.log("Score: ", score);
			console.log("Seconds: ", seconds);
			console.log("SAVED RESULTS");
			window.save = 1;
		}

	}, 300);
})();
