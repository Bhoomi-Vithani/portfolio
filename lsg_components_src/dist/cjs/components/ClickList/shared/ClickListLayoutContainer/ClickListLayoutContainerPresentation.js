'use strict';

var React__default = require('react');
var prefix = require('../../../../config/prefix.js');
var DomUtils = require('../../../../utils/DomUtils.js');
var ClickListLayoutContainer_styles = require('./ClickListLayoutContainer.styles.js');

const ClickListLayoutContainerPresentation = ({
  left,
  right,
  actions,
  className,
  id,
  noMargin
}) => (/*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${ClickListLayoutContainer_styles.mainClass}`]: true,
    [`${className}`]: !!className,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  id: id
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${ClickListLayoutContainer_styles.mainClass}-content`
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${ClickListLayoutContainer_styles.mainClass}-left`
}, left), /*#__PURE__*/React__default.createElement("div", {
  className: `${ClickListLayoutContainer_styles.mainClass}-right`
}, right)), /*#__PURE__*/React__default.createElement("div", {
  className: `${ClickListLayoutContainer_styles.mainClass}-actions`
}, actions)));
ClickListLayoutContainerPresentation.displayName = "ClickListLayoutContainerPresentation";

exports.ClickListLayoutContainerPresentation = ClickListLayoutContainerPresentation;
