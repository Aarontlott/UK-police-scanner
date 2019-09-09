import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	contact_details: DS.attr('string'),
    description: DS.attr('string'),
    title: DS.attr('string'),
    address: DS.attr('string'),
    type: DS.attr('string'),
    start_date: DS.attr('string'),
    end_date: DS.attr('string')
});
