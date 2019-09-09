import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		var retArray = {"neighbourhood":"","neighbourhoodEvent":"","force":""};
		retArray.neighbourhood = this.store.queryRecord('specificNeighbourhood', { forceId: params.force, id: params.id  } );
		retArray.force = this.store.queryRecord('specificForce', { id: params.force } );
		retArray.neighbourhoodEvent = this.store.query('neighbourhoodEvent', { forceId: params.force, id: params.id });
		return retArray;
	},

	setupController(controller, model) {
		Ember.set(controller, 'neighbourhoodEvent', model);
	}
});
