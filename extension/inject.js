(async () => {
	setInterval(_ => {
		console.log(document.getElementsByClassName("left").innerHTML);
	}, 3000);
})();