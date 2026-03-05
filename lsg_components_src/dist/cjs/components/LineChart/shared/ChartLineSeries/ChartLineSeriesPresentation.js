'use strict';

var d3Shape = require('d3-shape');
var React__default = require('react');
var DomUtils = require('../../../../utils/DomUtils.js');
var ChartLineSeries_styles = require('./ChartLineSeries.styles.js');

const ChartLineSeriesPresentation = ({
  xScale,
  yScale,
  data,
  color,
  mobile,
  curveType
}) => {
  const x = d => xScale(d.x);
  const y = d => yScale(d.y);
  const chartLine = d3Shape.line(x, y);
  const pathFunction = curveType === "stepped" ? chartLine.curve(d3Shape.curveStep) : chartLine;
  return /*#__PURE__*/React__default.createElement("path", {
    className: DomUtils.cleanupClassObject({
      [`${ChartLineSeries_styles.hostClass}`]: true,
      [`${ChartLineSeries_styles.hostClass}-line`]: true,
      [`${ChartLineSeries_styles.hostClass}-line__${color}`]: color,
      [`${ChartLineSeries_styles.hostClass}-line__mobile`]: mobile
    }),
    d: pathFunction(data)
  });
};
ChartLineSeriesPresentation.displayName = "ChartLineSeriesPresentation";

exports.ChartLineSeriesPresentation = ChartLineSeriesPresentation;
