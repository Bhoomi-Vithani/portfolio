'use strict';

var React__default = require('react');
var ChartAxis_styles = require('./ChartAxis.styles.js');

const ChartAxisPresentation = ({
  scale,
  orientation = "horizontal",
  tickValues,
  tickFormat
}) => {
  const defaultXAxisTickFormatter = v => v.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const defaultYAxisTickFormatter = v => v;
  const formatValue = v => {
    if (orientation === "horizontal") {
      return tickFormat ? tickFormat(v) : defaultXAxisTickFormatter(v);
    }
    return tickFormat ? tickFormat(v) : defaultYAxisTickFormatter(v);
  };
  return /*#__PURE__*/React__default.createElement("g", null, (tickValues || scale.ticks()).map((tick, i) => (/*#__PURE__*/React__default.createElement("g", {
    key: i,
    className: `${ChartAxis_styles.hostClass}-${orientation === undefined || orientation === "horizontal" ? "independent" : "dependent"}`
  }, /*#__PURE__*/React__default.createElement("text", {
    className: `${ChartAxis_styles.hostClass}-tick-label`,
    x: orientation === "horizontal" ? scale(tick) : 0,
    y: orientation === "vertical" ? scale(tick) : 0
  }, formatValue(tick))))));
};
ChartAxisPresentation.displayName = "ChartAxisPresentation";

exports.ChartAxisPresentation = ChartAxisPresentation;
