'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var LabelPresentation = require('../../_Label/LabelPresentation.js');
var A11yMeaningfulLabelContext = require('./A11yMeaningfulLabelContext.js');

const A11yMeaningfulLabelPresentation = ({
  htmlAttrs,
  inline = true,
  ...props
}) => {
  const {
    type,
    hasKeyboardFocus: _,
    ...actionContext
  } = React__default.useContext(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext);
  // Find example of different renderings to link or label:s
  // callback for label type is done as an example in Cards.Checkbox.example or upload-single-file
  // callback for link type is done as an example in cards selection example
  return type === "link" ? (/*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    ...props,
    ...actionContext,
    expandToOverlay: true,
    isDisplayInline: inline,
    htmlAttrs: htmlAttrs,
    // TODO: Use Component API instead of implicit CSS rules
    className: `${prefix.lsgPre}accessible-label`,
    ref: props.refCallback || props.actionRef
  })) : (/*#__PURE__*/React__default.createElement(LabelPresentation.LabelPresentation, {
    ...props,
    ...actionContext,
    expandToOverlay: true,
    isDisplayInline: inline,
    htmlFor: actionContext.htmlFor,
    htmlAttrs: htmlAttrs,
    // TODO: Use Component API instead of implicit CSS rules
    className: `${prefix.lsgPre}accessible-label`,
    ref: props.refCallback
  }));
};
A11yMeaningfulLabelPresentation.displayName = "A11yMeaningfulLabelPresentation";

exports.A11yMeaningfulLabelPresentation = A11yMeaningfulLabelPresentation;
