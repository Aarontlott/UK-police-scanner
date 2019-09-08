import Component from '@ember/component';

export default Component.extend({
	actions: {
		dateRange() {
			var cards = document.querySelectorAll('.card');
			var startDate = document.querySelector('.start_date_picker').value;
			var endDate = document.querySelector('.end_date_picker').value;
			if (startDate != "" || endDate != "") {

				if (startDate == "") {
					startDate = new Date(1999, 1);
					endDate = new Date(endDate);
				}
				else if (endDate == "") {
					startDate = new Date(startDate);
					endDate = new Date(2140, 1);
				} else {
					startDate = new Date(startDate);
					endDate = new Date(endDate);
				}
				for (var i = cards.length - 1; i >= 0; i--) {
					cards[i].classList.remove('d-none', 'd-block');

					var date = new Date(cards[i].querySelector('.card .start_date').innerText);
					console.log(date);
					if (date > startDate && date < endDate) {
						if (!cards[i].classList.contains('d-block')) {
							cards[i].classList.toggle('d-block');
						}
					} else {
						if (!cards[i].classList.contains('d-none')) {
							cards[i].classList.toggle('d-none');
						}
					}
				}
			} else {
				for (var i = cards.length - 1; i >= 0; i--) {
					cards[i].classList.remove('d-none', 'd-block');
				}
			}
		},
		filterByType() {
			
		}
	}
});


