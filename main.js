setTimeout(() => {
	const slider = document.getElementById('myRange');
	const output = document.getElementById('price');
	const discount = document.getElementById('discount');
	console.log(discount);
	output.innerHTML = slider.value;

	slider.oninput = () => {
		output.innerHTML = this.value;
		console.log(this.value);
	};
}, 1000);
