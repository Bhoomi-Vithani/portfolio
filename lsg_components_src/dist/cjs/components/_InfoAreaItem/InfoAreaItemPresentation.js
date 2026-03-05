'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var Host = require('../../utils/Host.js');
var InfoAreaItem_styles = require('./InfoAreaItem.styles.js');

// @ts-strict-ignore
const InfoAreaItemPresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  overline,
  variant,
  value
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [InfoAreaItem_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [`${InfoAreaItem_styles.hostClass}-variant__${variant}`]: variant
  }),
  isStencilHost: isStencilHost
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${InfoAreaItem_styles.hostClass}-overline`
}, overline), /*#__PURE__*/React__default.createElement("div", {
  className: `${InfoAreaItem_styles.hostClass}-value`
}, value)));
InfoAreaItemPresentation.displayName = "InfoAreaItemPresentation";

exports.InfoAreaItemPresentation = InfoAreaItemPresentation;
