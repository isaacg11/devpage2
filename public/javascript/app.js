
var anchorLink = document.querySelector("a[href^='#']");
var target = document.getElementById("destination");
anchorLink.addEventListener("click", function(el) {
	if (window.scrollTo) {
		el.preventDefault();
		window.scrollTo(0, target.offsetTop);
		console.log("hit");
	}
});