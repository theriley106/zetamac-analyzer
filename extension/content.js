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
		if (true) {
			var xhr = new XMLHttpRequest();
			var url = "https://b6a0ee1b.ngrok.io/";
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onreadystatechange = function () {
			    if (xhr.readyState === 4 && xhr.status === 200) {
			        var json = JSON.parse(xhr.responseText);
			        console.log(json);
			    }
			};
			var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
			xhr.send(data);
			console.log("GAME COMPLETED");
			console.log("Score: ", score);
			console.log("Seconds: ", seconds);
		}

	}, 300);
})();
