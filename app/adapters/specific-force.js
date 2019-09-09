import Adapter from '@ember-data/adapter';

export default Adapter.extend({
  queryRecord(store, type, query) {
    return new Promise(function(resolve, reject) {
		fetch('https://data.police.uk/api/forces/'+ query.id)
		.then((resp) => resp.json())
		.then((data) => {
			resolve(data);
		}).catch((error) => {
			reject(error);
		});
    });
  }
});