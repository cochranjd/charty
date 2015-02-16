import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {

        var prepareData = function(item) {
            item.date = new Date(item.date);
            item.volume = item.volume/1000000;
            return item;
        };

        return [
            Ember.Object.create({
                symbol: 'IBM',
                color: '#8888FF',
                data: IBM.map(prepareData)
            }),
            Ember.Object.create({
                symbol: 'GM',
                color: '#FF8888',
                data: GM.map(prepareData)
            }),
            Ember.Object.create({
                symbol: 'APPL',
                color: '#888888',
                data: APPL.map(prepareData)
            })
        ];
    }

});


var IBM = [
    {date: 'February 2, 2015', volume: 4427700, close: 160.4},
    {date: 'January 2, 2015', volume: 6198300, close: 152.24},
    {date: 'December 1, 2014', volume: 4799700, close: 159.32},
    {date: 'November 3, 2014', volume: 4337700, close: 161.04},
    {date: 'October 1, 2014', volume: 6611800, close: 162.15},
    {date: 'September 2, 2014', volume: 3195800, close: 187.23},
    {date: 'August 1, 2014', volume: 2684000, close: 189.66},
    {date: 'July 1, 2014', volume: 4627500, close: 187.93},
    {date: 'June 2, 2014', volume: 3939300, close: 177.73},
    {date: 'May 1, 2014', volume: 3554200, close: 180.76},
    {date: 'April 1, 2014', volume: 5840600, close: 191.52},
    {date: 'March 3, 2014', volume: 6072400, close: 187.64},
    {date: 'February 3, 2014', volume: 4827500, close: 180.51},
    {date: 'January 2, 2014', volume: 6127700, close: 171.29},
    {date: 'December 2, 2013', volume: 4838700, close: 181.85},
    {date: 'November 1, 2013', volume: 5192700, close: 174.2},
    {date: 'October 1, 2013', volume: 5881900, close: 172.82},
    {date: 'September 3, 2013', volume: 3773300, close: 178.57},
    {date: 'August 1, 2013', volume: 3445800, close: 175.77},
    {date: 'July 1, 2013', volume: 4176700, close: 187.14},
    {date: 'June 3, 2013', volume: 4513500, close: 183.37},
    {date: 'May 1, 2013', volume: 4346900, close: 199.6},
    {date: 'April 1, 2013', volume: 5282100, close: 193.43},
    {date: 'March 1, 2013', volume: 3988600, close: 203.71},
    {date: 'February 1, 2013', volume: 3622800, close: 191.8},
    {date: 'January 2, 2013', volume: 4320300, close: 193.13}];

var GM = [
    {date: 'February 2, 2015', volume: 24571800, close: 37.62},
    {date: 'January 2, 2015', volume: 17098600, close: 32.62},
    {date: 'December 1, 2014', volume: 14062100, close: 34.91},
    {date: 'November 3, 2014', volume: 10667700, close: 33.13},
    {date: 'October 1, 2014', volume: 20150300, close: 31.12},
    {date: 'September 2, 2014', volume: 13680000, close: 31.66},
    {date: 'August 1, 2014', volume: 9945000, close: 34.19},
    {date: 'July 1, 2014', volume: 14495800, close: 33.23},
    {date: 'June 2, 2014', volume: 16510900, close: 35.67},
    {date: 'May 1, 2014', volume: 13250300, close: 33.7},
    {date: 'April 1, 2014', volume: 24202900, close: 33.6},
    {date: 'March 3, 2014', volume: 25479300, close: 33.54},
    {date: 'February 3, 2014', volume: 32867900, close: 34.96},
    {date: 'January 2, 2014', volume: 27042000, close: 34.85},
    {date: 'December 2, 2013', volume: 26619300, close: 39.47},
    {date: 'November 1, 2013', volume: 22058900, close: 37.41},
    {date: 'October 1, 2013', volume: 19282900, close: 35.69},
    {date: 'September 3, 2013', volume: 18450200, close: 34.74},
    {date: 'August 1, 2013', volume: 11750000, close: 32.92},
    {date: 'July 1, 2013', volume: 12857200, close: 34.65},
    {date: 'June 3, 2013', volume: 20533200, close: 32.17},
    {date: 'May 1, 2013', volume: 12847500, close: 32.73},
    {date: 'April 1, 2013', volume: 12143500, close: 29.79},
    {date: 'March 1, 2013', volume: 11177300, close: 26.87},
    {date: 'February 1, 2013', volume: 10630700, close: 26.22},
    {date: 'January 2, 2013', volume: 12355000, close: 27.13}];

var APPL = [
    {date: 'February 2, 2015', volume: 62677200, close: 127.08},
    {date: 'January 2, 2015', volume: 69450400, close: 116.7},
    {date: 'December 1, 2014', volume: 50669200, close: 109.95},
    {date: 'November 3, 2014', volume: 44485400, close: 118.46},
    {date: 'October 1, 2014', volume: 61078100, close: 107.11},
    {date: 'September 2, 2014', volume: 75388300, close: 99.92},
    {date: 'August 1, 2014', volume: 46746200, close: 101.66},
    {date: 'July 1, 2014', volume: 49637900, close: 94.34},
    {date: 'June 2, 2014', volume: 59839500, close: 91.71},
    {date: 'May 1, 2014', volume: 74996300, close: 89.24},
    {date: 'April 1, 2014', volume: 82044000, close: 82.73},
    {date: 'March 3, 2014', volume: 61552000, close: 75.25},
    {date: 'February 3, 2014', volume: 82267500, close: 73.78},
    {date: 'January 2, 2014', volume: 109889900, close: 69.76},
    {date: 'December 2, 2013', volume: 86672400, close: 78.19},
    {date: 'November 1, 2013', volume: 69291000, close: 77.5},
    {date: 'October 1, 2013', volume: 88189400, close: 72.42},
    {date: 'September 3, 2013', volume: 111138700, close: 66.06},
    {date: 'August 1, 2013', volume: 94666300, close: 67.51},
    {date: 'July 1, 2013', volume: 77966700, close: 62.29},
    {date: 'June 3, 2013', volume: 94963100, close: 54.58},
    {date: 'May 1, 2013', volume: 111725300, close: 61.9},
    {date: 'April 1, 2013', volume: 132443500, close: 60.55},
    {date: 'March 1, 2013', volume: 120246400, close: 60.53},
    {date: 'February 1, 2013', volume: 127191400, close: 60.36},
    {date: 'January 2, 2013', volume: 160032800, close: 61.92}];