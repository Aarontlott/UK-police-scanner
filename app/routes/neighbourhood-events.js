import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		var forceName = this.store.queryRecord('specificForce', { id: params.force } );
		var retArray = {"neighbourhood":"","neighbourhoodEvent":""};
		retArray.neighbourhood = forceName;
		retArray.neighbourhoodEvent = this.store.query('neighbourhoodEvent', { forceId: params.force, id: params.id });
		return retArray;
		// return this.store.query('neighbourhoodEvent', { forceId: params.force, id: params.id });
	},

	setupController(controller, model) {
		Ember.set(controller, 'neighbourhoodEvent', model);
	}
});
