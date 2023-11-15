/*
Difference between console.dir() & console.dir()
The main difference between these two methods is that the console.log() method displays the “toString” representation of any object passed to it.

Whereas, the console.dir() method displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
*/
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const styles = e.currentTarget.classList;
		if (styles.contains("decrease")) {
			count--;
		} else if (styles.contains("increase")) {
			count++;
		} else {
			count = 0;
		}

		if (count > 0) {
			value.style.color = "green";
		}
		if (count < 0) {
			value.style.color = "red";
		}
		if (count === 0) {
			value.style.color = "#222";
		}
		value.textContent = count;
	});
});
