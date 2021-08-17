// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	const plusBtn = document.querySelector("#btn-count-increase");
	const minusBtn = document.querySelector("#btn-count-decrease");
	const txtElement = document.querySelector("#text-count");
	let count = 5;
	let maxCount = 15;
	let minCount = 0;

	function updateCount(){
		txtElement.textContent = count;
	}
	updateCount();

	plusBtn.addEventListener("click", counter);
	minusBtn.addEventListener("click", counter);

	function counter(){
		if(this.getAttribute("id")==="btn-count-increase"){
			if(count < maxCount){
				count++;
			}
		} else {
			if(count > minCount){
				count--;
			}
		}
		updateCount();
	}

}); // Afslutter: DOMContentLoaded