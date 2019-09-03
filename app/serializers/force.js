import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType){
		payload = { forces: payload }; // Because Ember expects the payload to arrive this way, and it needs to be normalized to work.
		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});
