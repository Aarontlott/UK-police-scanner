import DS from 'ember-data';
// Base adapter for the Police API site

export default DS.RESTAdapter.extend({
	host: 'https://data.police.uk/',
	namespace: 'api',
});
