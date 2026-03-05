'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var GridPresentation = require('../../Grid/shared/GridPresentation.js');
var GridRowPresentation = require('../../GridRow/shared/GridRowPresentation.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var Stepper_styles = require('./Stepper.styles.js');

// @ts-strict-ignore
const StepperPresentation = ({
  id,
  children,
  noMargin,
  className,
  headline,
  iconLinks,
  centeredLayout,
  navHtmlAttrs
}) => {
  // use nav element for iconLinks if a label is provided
  const Nav = navHtmlAttrs?.["aria-label"] ? "nav" : React__default.Fragment;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Stepper_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${prefix.lsgPre}-centered-layout`]: centeredLayout
    })
  }, headline, /*#__PURE__*/React__default.createElement("div", {
    className: GridPresentation.getGridClasses({
      spacing: "doublesubsection"
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: GridRowPresentation.getGridRowClasses({})
  }, children)), iconLinks && (/*#__PURE__*/React__default.createElement(Nav, {
    ...navHtmlAttrs
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    direction: "horizontal"
  }, iconLinks))));
};
StepperPresentation.displayName = "StepperPresentation";

exports.StepperPresentation = StepperPresentation;
