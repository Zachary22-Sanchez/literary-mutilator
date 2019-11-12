function changeColor(change) {
	document.getElementById(change).style.color = "red";
}

function changeFont () {
	document.getElementById('texter').style.fontFamily = "monospace";

}

document.addEventListener("DOMContentLoaded", function() {
	let btn = getElementById("replaceText");
	btn.addEventListener("click", findReplace());
});

function findReplace() {
	//grab the original text
	let string = document.getElementById("input").innerHTML;
	//grab the words to find/replace
	let findWord = document.getElementById("find").value;
	let replaceValue =
		document.getElementById("replace").value;
	//create a new regex object to use to search for findWord
	//includes g & i modifiers: g is for global i is for case insensative
	//following is reg expression
	let reg = new RegExp(findWord, "gi");
	//find and replace words in the original text using the regex
	let newText= string.replace(reg, replaceValue);

	document.getElementById("input").innerHTML = newText;
}