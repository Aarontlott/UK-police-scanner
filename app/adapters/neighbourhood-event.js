import Adapter from '@ember-data/adapter';

export default Adapter.extend({
  query(store, type, query) {
    return new Promise(function(resolve, reject) {
		fetch('https://data.police.uk/api/'+ query.forceId + '/' + query.id + '/events')
		.then((resp) => resp.json())
		.then((data) => {
			// Adding an ID because the events does not come with one
			for (var i = data.length - 1; i >= 0; i--) {
				data[i].id = i;
			}
			resolve(data);
		}).catch((error) => {
			reject(error);
		});
    });
  }
});