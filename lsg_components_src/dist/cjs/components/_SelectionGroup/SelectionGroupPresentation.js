'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var index = require('../../utils/Hooks/index.js');
var Host = require('../../utils/Host.js');
var HelperTextPresentation = require('../_HelperText/HelperTextPresentation.js');
var SelectionGroup_styles = require('./SelectionGroup.styles.js');

// @ts-strict-ignore
const SelectionGroupPresentation = ({
  id: idProp,
  children,
  className,
  noMargin,
  isStencilHost,
  direction = "vertical",
  invalid,
  label,
  helperText,
  errorText,
  horizontalAlignment,
  htmlAttrs = {}
}) => {
  const id = index.useUniqueId(`${SelectionGroup_styles.hostClass}-`, idProp);
  const fieldsetLegendId = `${id}-fieldset-legend-text`;
  const errorTextId = `${id}-error-text`;
  const helperTextId = `${id}-helper-text`;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [SelectionGroup_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${SelectionGroup_styles.hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
      [`${SelectionGroup_styles.hostClass}__${direction}`]: direction
    }),
    isStencilHost: isStencilHost
  }, /*#__PURE__*/React__default.createElement("fieldset", {
    className: `${SelectionGroup_styles.hostClass}-fieldset`,
    "aria-errormessage": errorText ? errorTextId : undefined,
    "aria-invalid": !!errorText || !!invalid,
    "aria-labelledby": [fieldsetLegendId, helperText && helperTextId, errorText && errorTextId, htmlAttrs["aria-labelledby"]].filter(t => !!t).join(" "),
    ...htmlAttrs
  }, /*#__PURE__*/React__default.createElement("legend", {
    className: `${SelectionGroup_styles.hostClass}-legend`,
    id: fieldsetLegendId
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: `${SelectionGroup_styles.hostClass}-fieldset-inner`
  }, children)), /*#__PURE__*/React__default.createElement(HelperTextPresentation.HelperTextPresentation, {
    className: `${SelectionGroup_styles.hostClass}-helper-text`,
    helperText: helperText,
    errorText: errorText,
    helperTextId: helperTextId,
    errorTextId: errorTextId
  }));
};
SelectionGroupPresentation.displayName = "SelectionGroupPresentation";

exports.SelectionGroupPresentation = SelectionGroupPresentation;
