import Adapter from '@ember-data/adapter';

export default Adapter.extend({
  query(store, type, query) {
    return new Promise(function(resolve, reject) {
		fetch('https://data.police.uk/api/'+ query.id +'/neighbourhoods')
		.then((resp) => resp.json())
		.then((data) => {
			for (var i = data.length - 1; i >= 0; i--) {
				var cleanedName = data[i].name.replace("&amp;","and");
				if (cleanedName.indexOf(", ") == -1) {
					cleanedName = cleanedName.replace(/,/g, ", ");
				}
				data[i].name = cleanedName;
			}
			resolve(data);
		}).catch((error) => {
			reject(error);
		});
    });
  }
});