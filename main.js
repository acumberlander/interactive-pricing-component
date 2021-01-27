/** Wrapped logic in setTimeout because otherwise the script would run
 * before the browser was finished loading and all of the variables would
 * be marked as undefined.
 */
setTimeout(() => {
	//declarations
	const slider = document.getElementById('myRange');
	const price = document.getElementById('price');
	const price2 = document.getElementById('price-two');
	const pageViews = document.getElementById('page-views');
	const toggle = document.getElementById('toggle-switch');
	const monthYearTop = document.getElementById('month-year-text');
	const monthYearBottom = document.getElementById('year-month-text');
	let priceArr = [8, 12, 16, 24, 36];

	// initialization
	price.innerHTML = 16;
	price2.innerHTML = 16;
	pageViews.innerHTML = '100K';
	monthYearTop.innerHTML = '/month';
	monthYearBottom.innerHTML = '/month';

	// logic for when the monthly/yearly toggle is clicked
	toggle.oninput = () => {
		if (toggle.checked) {
			monthYearTop.innerHTML = '/year';
			monthYearBottom.innerHTML = '/year';
			priceArr = [72, 108, 144, 216, 324];
			slider.setAttribute('max', '324');
			slider.value = priceArr[2];
			price.innerHTML = slider.value;
			price2.innerHTML = slider.value;
		} else {
			monthYearTop.innerHTML = '/month';
			monthYearBottom.innerHTML = '/month';
			priceArr = [8, 12, 16, 24, 36];
			slider.setAttribute('max', '36');
			slider.value = priceArr[2];
			price.innerHTML = slider.value;
			price2.innerHTML = slider.value;
		}
	};

	// logic for when the price slider is moved
	slider.oninput = () => {
		let value = slider.value;
		for (let i = 0; i < priceArr.length; i++) {
			if (priceArr[i] > value) {
				slider.value = priceArr[i];
				break;
			}
		}

		// sets the price text based on what the slider(input) value is
		price.innerHTML = slider.value;
		price2.innerHTML = slider.value;

		// changes page view text based on the price
		if (price.innerHTML == 8 || price2.innerHTML == 8)
			pageViews.innerHTML = '10K';

		if (price.innerHTML == 12 || price2.innerHTML == 12)
			pageViews.innerHTML = '50K';

		if (price.innerHTML == 16 || price2.innerHTML == 16)
			pageViews.innerHTML = '100K';

		if (price.innerHTML == 24 || price2.innerHTML == 24)
			pageViews.innerHTML = '500K';

		if (price.innerHTML == 36 || price2.innerHTML == 36)
			pageViews.innerHTML = '1M';
	};
}, 0);
