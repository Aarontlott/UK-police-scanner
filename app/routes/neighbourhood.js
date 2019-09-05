import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		return this.store.query('forcesNeighbourhood', { id: params.id })
	},

	setupController(controller, model) {
		Ember.set(controller, 'forceNeighbourhoods', model);
	}
});
