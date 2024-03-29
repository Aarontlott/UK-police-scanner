import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		var retArray = {"force":"","neighbourhoods":""};
		retArray.force = this.store.queryRecord('specificForce', { id: params.id } );
		retArray.neighbourhoods = this.store.query('forcesNeighbourhood', { id: params.id });
		return retArray;
		// return this.store.query('forcesNeighbourhood', { id: params.id });
	},

	setupController(controller, model) {
		Ember.set(controller, 'forceNeighbourhoods', model);
	}
});
