// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	function hils(){
		console.log("Hej med dig!");
	}
	hils();

}); // Afslutter: DOMContentLoaded