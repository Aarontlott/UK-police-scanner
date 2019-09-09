import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.store.findAll('force');
	},

	setupController(controller, model) {
		Ember.set(controller, 'forces', model);
	}
});
