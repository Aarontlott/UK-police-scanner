import Component from '@ember/component';

export default Component.extend({
	actions: {
		search() {
			var cards = document.querySelectorAll('.card');
			var searchVal = document.querySelector('.searchBox').value.toLowerCase();
			if (searchVal.length != 0) {
				for (var i = cards.length - 1; i >= 0; i--) {
					cards[i].classList.remove('d-none', 'd-block');
					var title = cards[i].querySelector('.card-title').innerText.toLowerCase();
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
				for (var i = cards.length - 1; i >= 0; i--) {
					cards[i].classList.remove('d-none', 'd-block');
				}
			}
		}
	}
});
