// Adding the function to the window makes it globally available
window.calculateSumListener = function() {
	// Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	// Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;
	// Your code here
// console.log(typeof stringA)

document.getElementById("resultNumber").value= parseInt(stringA) + parseInt(stringB)

	// let stringC = document.getElementById("resultNumber").value;
	// stringC = parseInt(stringA) + parseInt(stringB);
};
