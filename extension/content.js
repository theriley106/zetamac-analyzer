// this is the code which will be injected into a given page...

(function() {
	setInterval(function(){ console.log(document.getElementsByClassName("left").innerHTML); }, 1000);
})();
