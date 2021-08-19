// "DOMContentLoaded" 'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	const plusBtn = document.querySelector("#btn-count-increase");
	const minusBtn = document.querySelector("#btn-count-decrease");
	const txtElement = document.querySelector("#text-count");
	let isPlus;
	let count = 5;
	let maxCount = 15;
	let minCount = 0;

	function updateCount(){
		txtElement.textContent = count;
	}
	updateCount();

	function countCondition(){
		if(isPlus == true){
			if(count < maxCount){
				count++;
			}
		} else {
			if(count > minCount){
				count--;
			}
		}
	}

	plusBtn.addEventListener("click", () => {
		isPlus = true;
		countCondition();
		updateCount();
	});
	minusBtn.addEventListener("click", () => {
		isPlus = false;
		countCondition();
		updateCount();
	});
}); // Afslutter: DOMContentLoaded