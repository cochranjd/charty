import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'path',

    classNames: ['data-plot'],
    
    attributeBindings: ['d', 'color:stroke'],

    selectedType: null,

    color: null,

    d: function() {
        if (Ember.isBlank(this.get('domainFunc')) || Ember.isBlank(this.get('valueFunc'))) {
            return '';
        }

        return this.get('dataFunc')(this.get('data'));
    }.property('data', 'data.@each', 'dataFunc', 'domainFunc', 'valueFunc'),

    dataFunc: function() {
        var _selectedType = this.get('selectedType').toLowerCase();

        return d3.svg.line().x(function(d) {
            return this.get('domainFunc')(d.date);
        }.bind(this)).y(function(d) {
            return this.get('valueFunc')(d[_selectedType]);
        }.bind(this));
    }.property('selectedType')
});
