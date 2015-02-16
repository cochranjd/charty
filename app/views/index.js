import Ember from 'ember';

export default Ember.View.extend({

    chartWidth: function() {
        return this.get('svgWidth') - this.get('leftMargin') - this.get('rightMargin');
    }.property('leftMargin', 'rightMargin'),

    chartHeight: function() {
        return this.get('svgHeight') - this.get('topMargin') - this.get('bottomMargin');
    }.property('topMargin', 'bottomMargin'),

    svgWidth: 960,
    svgHeight: 500,

    leftMargin: 50,
    rightMargin: 20,
    topMargin: 20,
    bottomMargin: 30,

    domainFunc: null,
    valueFunc: null,

    viewBox: function() {
        return '0 0 ' + this.get('svgWidth') + ' ' + this.get('svgHeight');
    }.property('svgWidth', 'svgHeight'),

    prepareChart: function() {
        var x = d3.time.scale()
            .range([0, this.get('chartWidth')]);

        var y = d3.scale.linear()
            .range([this.get('chartHeight'), 0]);

        console.log('Domain Min: ' + this.get('controller.domainMin'));
        console.log('Domain Max: ' + this.get('controller.domainMax'));
        console.log('Data Max: ' + this.get('controller.dataMax'));
        x.domain([this.get('controller.domainMin'), this.get('controller.domainMax')]);
        y.domain([0, this.get('controller.dataMax')]);

        this.setProperties({
            domainFunc: x,
            valueFunc: y
        });

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var chart = d3.select("svg g.my-chart");

        chart.select('.x.axis').call(xAxis).attr('transform', this.get('xTranslate'));
        var y_axis = chart.select('.y.axis').call(yAxis);
        y_axis.select('.y-axis-label').remove();
        y_axis.append("text")
            .attr("class", "y-axis-label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text(this.get('controller.selectedType') === 'Close' ? 'Price ($)':'Volume (In Millions)');
    }.on('didInsertElement').observes('controller.{dataMax,domainMax,domainMin}'),

    initFoundation: function() {
        this.$().foundation();
    }.on('didInsertElement'),

    chartTranslate: function() {
        return 'translate(' + this.get('leftMargin') + ',' + this.get('topMargin') + ')';
    }.property('leftMargin', 'topMargin'),

    xTranslate: function() {
        return 'translate(0,' + this.get('chartHeight') + ')';
    }.property('chartHeight')

});
