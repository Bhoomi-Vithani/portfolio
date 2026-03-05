'use strict';

var React__default = require('react');

const ChartXYPlotPresentation = ({
  width,
  height,
  children
}) => (/*#__PURE__*/React__default.createElement("svg", {
  width: width >= 0 ? width : 0,
  height: height >= 0 ? height : 0
}, children));
ChartXYPlotPresentation.displayName = "ChartXYPlotPresentation";

exports.ChartXYPlotPresentation = ChartXYPlotPresentation;
