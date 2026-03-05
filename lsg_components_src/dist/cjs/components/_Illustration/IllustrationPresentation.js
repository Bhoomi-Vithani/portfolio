'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var Host = require('../../utils/Host.js');
var Illustration_styles = require('./Illustration.styles.js');

// @ts-strict-ignore
const IllustrationPresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  src,
  alt,
  size = "small",
  ariaHidden
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [Illustration_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  isStencilHost: isStencilHost
}, /*#__PURE__*/React__default.createElement("img", {
  className: DomUtils.cleanupClassObject({
    [`${Illustration_styles.hostClass}-img`]: true,
    [`${Illustration_styles.hostClass}-img__${size}`]: size
  }),
  "aria-hidden": ariaHidden,
  src: src,
  alt: alt
})));
IllustrationPresentation.displayName = "IllustrationPresentation";

exports.IllustrationPresentation = IllustrationPresentation;
