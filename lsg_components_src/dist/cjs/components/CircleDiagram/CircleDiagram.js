'use strict';

var React__default = require('react');
var CircleCountdownWrapper = require('./shared/CircleCountdownWrapper.js');

// @ts-strict-ignore
const CircleDiagram = ({
  noAnimation = false,
  animationOnStart = false,
  valueLabel,
  chartInfoArea,
  ariaDescription,
  ariaLabel,
  ...props
}) => {
  // mapping to internal interface object that's avoid to publish appearance prop. Appearance should be
  // set only in the background. Therefore the prop named as chartInfoArea reflects its character.
  const chartInfoAreaInternal = chartInfoArea ? {
    ...chartInfoArea,
    appearance: "infoarea"
  } : undefined;
  return (
    /*#__PURE__*/
    // Todo: remove valueLabel check in Release 18 and make valueLabel not optional (as it is in shared). (? noch nicht überprüft! CB2KELD)
    React__default.createElement(CircleCountdownWrapper.CircleCountdownWrapper, {
      chartInfo: chartInfoAreaInternal,
      valueLabel: valueLabel || "",
      ariaLabel: ariaLabel || ariaDescription,
      noAnimation,
      animationOnStart,
      ...props
    })
  );
};
CircleDiagram.displayName = "CircleDiagram";

exports.CircleDiagram = CircleDiagram;
