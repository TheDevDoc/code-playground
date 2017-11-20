	/* Create function to Run after the Document has loaded. */
	window.onload = function playgroundPrinter() {
		/* Store our text in a var to be produced on the page */
		var writeText = "This was produced in Javascript!";
		/* Write to our element playgroundjs */
		document.getElementById("playgroundjs").innerHTML = writeText;
	}
