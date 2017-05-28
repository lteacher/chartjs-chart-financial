'use strict';

// TODO: Need this for npm link local dev
var Chart = window.Chart || require('chart.js');

require('./element.candlestick.js')(Chart);
require('./scale.financialLinear.js')(Chart);
require('./scale.timeseries.js')(Chart);
require('./controller.financial.js')(Chart);
