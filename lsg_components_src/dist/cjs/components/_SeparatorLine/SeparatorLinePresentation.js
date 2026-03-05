'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var Host = require('../../utils/Host.js');
var SeparatorLine_styles = require('./SeparatorLine.styles.js');

// @ts-strict-ignore
const SeparatorLinePresentation = ({
  id,
  className,
  isStencilHost,
  centeredLayout = false,
  componentSpacing = "medium",
  horizontalAlignment
}) => {
  const isCentered = horizontalAlignment === "center" ? true : centeredLayout;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [SeparatorLine_styles.hostClass]: true,
      [`${prefix.lsgPre}-centered-layout`]: isCentered,
      [`${prefix.lsgPre}-spacing-${componentSpacing}`]: componentSpacing
    }),
    isStencilHost: isStencilHost
  });
};
SeparatorLinePresentation.displayName = "SeparatorLinePresentation";

exports.SeparatorLinePresentation = SeparatorLinePresentation;
