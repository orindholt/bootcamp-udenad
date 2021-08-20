// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	const liste = document.querySelector("#liste");
	const arr = ["Lise", "Markus", "Julian"];

	function makeElements(array){
		array.forEach((name)=>{
			let element = document.createElement("li");
			liste.append(element);
			element.append(name);
		});
	};

	makeElements(arr);

}); // Afslutter: DOMContentLoaded