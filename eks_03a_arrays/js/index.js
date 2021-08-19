// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	const liste = document.querySelector("#liste");
	arr = ["Lise", "Markus", "Julian"];

	for(let i = 0; i<arr.length; i++){
		makeElement(i);
	}

	function makeElement(i){
		let element = document.createElement("li");
		liste.append(element);
		element.append(arr[i]);
	}
}); // Afslutter: DOMContentLoaded