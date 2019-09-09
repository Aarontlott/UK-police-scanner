import Adapter from '@ember-data/adapter';

export default Adapter.extend({
  query(store, type, query) {
    return new Promise(function(resolve, reject) {
		fetch('https://data.police.uk/api/'+ query.forceId + '/' + query.id + '/events')
		.then((resp) => resp.json())
		.then((data) => {
			// Adding an ID because the events does not come with one
			if (data.length != 0) {
				for (var i = data.length - 1; i >= 0; i--) {
					data[i].id = i;
					if (data[i].description) {
						var cleanedDescription = data[i].description.replace(/(<([^>]+)>)/ig,"");
					}
					var sd = new Date(data[i].start_date);
					var ed = new Date(data[i].end_date);
					data[i].start_date = sd.toString().substring(0, 24);
					data[i].end_date = ed.toString().substring(0, 24);
					data[i].description = cleanedDescription;
				}
			} else {
				data = [{
				    "id": "0",
				    "description": "",
				    "end_date": "-",
				    "title": "Oh no! It looks like there's no events, please check back later.",
				    "address": "-",
				    "type": "-",
				    "start_date": "-"
				  },
				];
			}
			resolve(data);
		}).catch((error) => {
			reject(error);
		});
    });
  }
});