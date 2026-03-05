'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var EyeCatcher_styles = require('./EyeCatcher.styles.js');

// @ts-strict-ignore
const EyeCatcherPresentation = ({
  id,
  className,
  noMargin,
  text,
  textLong,
  increaseWidth,
  fontSize = "medium",
  viewport,
  horizontalAlignment
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [EyeCatcher_styles.hostClass]: true,
    [`${EyeCatcher_styles.hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [ThemePresentation.getThemeClass("brand")]: true
  }),
  id: id
}, /*#__PURE__*/React__default.createElement("p", {
  className: DomUtils.cleanupClassObject({
    [`${EyeCatcher_styles.hostClass}-text`]: true,
    [`${EyeCatcher_styles.hostClass}-text-${fontSize}`]: true,
    [`${EyeCatcher_styles.hostClass}-text-wide`]: increaseWidth
  })
}, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("strong", null, viewport === "xl" || viewport === "lg" && textLong ? textLong : text)))));
EyeCatcherPresentation.displayName = "EyeCatcherPresentation";

exports.EyeCatcherPresentation = EyeCatcherPresentation;
