(function () {
	window.save = 0;
	setInterval(function () {
		secondsHTML = document.getElementsByClassName("left")[0].innerHTML;
		var seconds = parseInt(secondsHTML.match(/\d+/g).map(Number));

		scoreHTML = document.getElementsByClassName("correct")[0].innerHTML;
		var score = parseInt(scoreHTML.match(/\d+/g).map(Number));

		// debug
		// console.log(`seconds: ${seconds}, score: ${score}`);

		var save = (seconds === 0) && (window.save === 0);
		if (save) {
			window.save = 1;
			chrome.storage.sync.get("data", items => {
				if (!chrome.runtime.error) {
					window.urlVal = items.data;
					console.log("GAME COMPLETED");
					console.log("Score: ", score);
					console.log("Seconds: ", seconds);
					console.log(`Saving to: ${window.urlVal}`);
					fetch(window.urlVal, {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ "score": score })
					}).then(res => res.json())
						.then(res => {
							console.log(res)
							console.log(`Saved results to ${window.urlVal}`);
						}).catch(err => {
							console.log(err);
						})
				}
			});
		}
	}, 300);
})();
