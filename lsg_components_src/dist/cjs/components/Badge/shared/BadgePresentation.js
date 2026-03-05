'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var Icon_styles = require('../../Icon/shared/Icon.styles.js');
var Badge_styles = require('./Badge.styles.js');

// @ts-strict-ignore
const BadgePresentation = ({
  id: idProp,
  className,
  children,
  color: colorInternal = "primary",
  size: sizeInternal = "default",
  inline = false,
  margin,
  htmlAttrs
}) => {
  const size = ReactUtils.fragmentCount(children, true) > 0 ? sizeInternal : "dot";
  const color = size === "dot" && colorInternal === "primary" ? undefined : colorInternal;
  const id = index.useUniqueId(`${Badge_styles.hostClass}-`, idProp);
  return /*#__PURE__*/React__default.createElement("span", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [`${Badge_styles.hostClass}`]: true,
      [`${Icon_styles.hostClass}__inherit-color`]: true,
      [`${Badge_styles.hostClass}__${color}`]: color,
      [`${Badge_styles.hostClass}__${size}`]: size,
      [`${Badge_styles.hostClass}__inline`]: inline,
      [`${Badge_styles.hostClass}__margin-left`]: margin === "left" || margin === "both",
      [`${Badge_styles.hostClass}__margin-right`]: margin === "right" || margin === "both"
    }),
    "data-lsg-component": "badge",
    ...htmlAttrs
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${Badge_styles.hostClass}-inner`
  }, children));
};

exports.BadgePresentation = BadgePresentation;
