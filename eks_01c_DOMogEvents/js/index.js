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

	function countCondition(direction){
		if(direction == "inc" && count < maxCount){
			count++;
		} else if (direction == "dec" && count > minCount){
			count--;
		}
		updateCount();
		console.log(direction);
	}

	plusBtn.addEventListener("click", () => {
		countCondition("inc");
	});
	minusBtn.addEventListener("click", () => {
		countCondition("dec");
	});
});