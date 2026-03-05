'use strict';

var React__default = require('react');
var ChartInfoContainer = require('./shared/ChartInfoContainer.js');
var ChartInfoItemPresentation = require('./shared/ChartInfoItemPresentation.js');

// @ts-strict-ignore
const ChartInfo = ({
  title,
  items,
  activeIndex,
  ...props
}) => {
  const hasActiveIndex = typeof activeIndex === "number";
  return /*#__PURE__*/React__default.createElement(ChartInfoContainer.ChartInfoContainer, {
    title: title,
    ...props
  }, items.map((child, index) => {
    /* eslint-disable-next-line no-nested-ternary */
    const isActive = !hasActiveIndex ? false : hasActiveIndex && index === activeIndex ? true : undefined;
    return /*#__PURE__*/React__default.createElement(ChartInfoItemPresentation.ChartInfoItemPresentation, {
      ...child,
      isActive: isActive
    });
  }));
};
ChartInfo.displayName = "ChartInfo";

exports.ChartInfo = ChartInfo;
