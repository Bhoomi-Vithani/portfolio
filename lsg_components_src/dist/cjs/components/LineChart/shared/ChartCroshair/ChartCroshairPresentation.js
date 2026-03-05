'use strict';

var React__default = require('react');
var ChartCroshair_styles = require('./ChartCroshair.styles.js');

// @ts-strict-ignore
const ChartCroshairPresentation = ({
  xScale,
  yScale,
  points
}) => {
  const xScaleNice = xScale.nice();
  const yScaleNice = yScale.nice();
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("line", {
    className: `${ChartCroshair_styles.hostClass}-line`,
    x1: xScaleNice(points[0].point.x),
    y1: 0,
    x2: xScaleNice(points[0].point.x),
    y2: yScaleNice(yScale.nice().domain()[0])
  }), points.map(point => (/*#__PURE__*/React__default.createElement("circle", {
    className: `${ChartCroshair_styles.hostClass}-circle`,
    cx: xScaleNice(point.point.x),
    cy: yScaleNice(point.point.y),
    r: 4
  }))));
};
ChartCroshairPresentation.displayName = "ChartCroshairPresentation";

exports.ChartCroshairPresentation = ChartCroshairPresentation;
