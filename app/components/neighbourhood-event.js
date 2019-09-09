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
		filterByType(filterTarget) {
			var reset = document.querySelectorAll('.type_buttons .btn');
			for (var i = reset.length - 1; i >= 0; i--) {
				if (reset[i].classList.contains('active')) {
					reset[i].classList.remove('active');
				}
			}
			var cards = document.querySelectorAll('.card');
			var filterValue = document.querySelector('.type_buttons .' + filterTarget);
			var searchVal = filterTarget;
			if (!filterValue.classList.contains('active')) {
				filterValue.classList.add('active');
				for (var i = cards.length - 1; i >= 0; i--) {
					cards[i].classList.remove('d-none', 'd-block');
					var title = cards[i].querySelector('.event_type').innerText.toLowerCase();
					if (title.indexOf(searchVal) !== -1) {
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
				filterValue.classList.remove('active');
				for (var i = cards.length - 1; i >= 0; i--) {
					cards[i].classList.remove('d-none', 'd-block');
				}
			}
		}
	}
});


