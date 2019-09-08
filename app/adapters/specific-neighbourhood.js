import Adapter from '@ember-data/adapter';

export default Adapter.extend({
  queryRecord(store, type, query) {
    return new Promise(function(resolve, reject) {
		fetch('https://data.police.uk/api/'+ query.forceId + '/' + query.id)
		.then((resp) => resp.json())
		.then((data) => {
			var cleanedName = data.name.replace("&amp;","and");
			if (cleanedName.indexOf(", ") == -1) {
				cleanedName = cleanedName.replace(/,/g, ", ");
			}
			data.name = cleanedName;
			resolve(data);
		}).catch((error) => {
			reject(error);
		});
    });
  }
});