'use strict';

var React__default = require('react');
var DomUtils = require('../../../../utils/DomUtils.js');
var ChartGrid_styles = require('./ChartGrid.styles.js');

// @ts-strict-ignore
const ChartGridPresentation = ({
  xScale,
  yScale,
  columnLineStyle,
  rowLineStyle,
  columnTickValues,
  rowTickValues,
  zeroLineBold
}) => {
  const xScaleNice = xScale.nice();
  const yScaleNice = yScale.nice();
  const ticksX = rowTickValues ? rowTickValues.map(value => ({
    value,
    xOffset: xScale(value)
  })) : xScaleNice.ticks().map(value => ({
    value,
    xOffset: xScaleNice(value)
  }));
  const ticksY = columnTickValues ? columnTickValues.map(value => ({
    value,
    xOffset: yScale(value)
  })) : yScaleNice.ticks().map(value => ({
    value,
    xOffset: yScaleNice(value)
  }));
  //  disable bold zero line if zero line is the minimum x-axis
  const ticksYValues = ticksY.map(({
    value
  }) => value);
  const checkBoldZeroLine = Math.min(...ticksYValues) <= 0 && zeroLineBold;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, rowLineStyle !== "none" && ticksY.map(({
    xOffset
  }, i) => (/*#__PURE__*/React__default.createElement("line", {
    key: `rowLine${i}`,
    className: DomUtils.cleanupClassObject({
      [`${ChartGrid_styles.hostClass}-line`]: true,
      [`${ChartGrid_styles.hostClass}-line__${rowLineStyle}`]: rowLineStyle
    }),
    x1: xScaleNice(xScale.nice().domain()[0]),
    x2: xScaleNice(xScale.nice().domain()[1]),
    y1: xOffset,
    y2: xOffset
  }))), columnLineStyle !== "none" && ticksX.map(({
    xOffset
  }, i) => (/*#__PURE__*/React__default.createElement("line", {
    key: `columnLine${i}`,
    className: DomUtils.cleanupClassObject({
      [`${ChartGrid_styles.hostClass}-line`]: true,
      [`${ChartGrid_styles.hostClass}-line__${columnLineStyle}`]: columnLineStyle
    }),
    x1: xOffset,
    x2: xOffset,
    y1: yScaleNice(yScale.nice().domain()[0]),
    y2: yScaleNice(yScale.nice().domain()[1])
  }))), rowLineStyle !== "none" && checkBoldZeroLine && (/*#__PURE__*/React__default.createElement("line", {
    className: DomUtils.cleanupClassObject({
      [`${ChartGrid_styles.hostClass}-line`]: true,
      [`${ChartGrid_styles.hostClass}-line__bold`]: true
    }),
    x1: xScaleNice(xScale.nice().domain()[0]),
    x2: xScaleNice(xScale.nice().domain()[1]),
    y1: yScaleNice(0),
    y2: yScaleNice(0)
  })));
};
ChartGridPresentation.displayName = "ChartGridPresentation";

exports.ChartGridPresentation = ChartGridPresentation;
