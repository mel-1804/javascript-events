window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	const green = document.querySelector("#theGreen")
	green.addEventListener("click", Woohoo)	
};

// The listener function here
const Woohoo = () => {
	alert("woohoo!")
}