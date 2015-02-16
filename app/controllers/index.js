import Ember from 'ember';

export default Ember.ArrayController.extend({

    selectedType: 'Volume',

    selectedTypes: ['Close', 'Volume'],

    typeChange: function() {
        console.log('New Type: ' + this.get('selectedType'));
    }.observes('selectedType'),

    selectableData: function() {
        return this.get('model').map(function(item) {
            return item.set('selected', true);
        });
    }.property('model'),

    selectedData: function() {
        return this.get('selectableData').filterBy('selected', true);
    }.property('selectableData', 'selectableData.@each.selected'),

    dataMax: function() {
        var _type = this.get('selectedType').toLowerCase();

        return this.get('selectedData').map(function(item) {
            return item.get('data').map(function(dataItem) {
                return dataItem[_type];
            }).reduce(function(previousMax, nextValue) {
                if (item.symbol === 'IBM') {
                    console.log('Value: ' + nextValue);
                }
                return Math.max(previousMax, nextValue);
            }, 0);
        }).reduce(function(previousMax, nextValue) {
            return Math.max(previousMax, nextValue);
        }, 0);
    }.property('selectedData', 'selectedData.@each', 'selectedType'),

    domainMin: function() {
        var reduceFunction = function(previousMin, nextValue ) {
            if (previousMin < nextValue) {
                return previousMin;
            }
            return nextValue;
        };

        return this.reduceDomain(reduceFunction);

    }.property('selectedData', 'selectedData.@each'),

    domainMax: function() {
        var reduceFunction = function(previousMax, nextValue) {
            if (previousMax > nextValue) {
                return previousMax;
            }
            return nextValue;
        };

        return this.reduceDomain(reduceFunction);
    }.property('selectedData', 'selectedData.@each'),

    reduceDomain: function(func) {
        var _type = this.get('selectedType').toLowerCase();

        var data = this.get('selectedData').map(function(item) {
            var mappedData = item.get('data').map(function(dataItem) {
                return dataItem.date;
            });
            return mappedData.reduce(func, new Date());
        });

        return data.reduce(func, new Date());
    }
});
