'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var SeparatorLinePresentation = require('../../_SeparatorLine/SeparatorLinePresentation.js');
var ClickList_styles = require('./ClickList.styles.js');

// @ts-strict-ignore
const ClickListPresentation = ({
  id,
  noMargin,
  children,
  className,
  horizontalAlignment,
  label,
  spacing,
  errorText,
  hostRef,
  look,
  handleOnBlur,
  htmlAttrs = {}
}) => {
  const listType = look || "default";
  const uniqueId = index.useUniqueId(ClickList_styles.hostClass.concat(`-${listType}-`), id);
  const errorTextId = index.useUniqueId(`${ClickList_styles.hostClass}-error-text-`, id && `${id}-error-text`);
  const labelTextId = index.useUniqueId(`${ClickList_styles.hostClass}-label`, id && `${id}-label`);
  const numChildren = ReactUtils.fragmentCount(children);
  const Container = look === "radio" || look === "checkbox" || numChildren <= 1 ? "div" : "ul";
  const childrenAs = look === "radio" || look === "checkbox" || numChildren <= 1 ? "div" : "li";
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [`${ClickList_styles.hostClass}`]: true,
      [`${ClickList_styles.hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      // TODO: spacing used in ClickListLayoutContainer.styles.ts, check if we can improve the structure
      [`${ClickList_styles.hostClass}__spacing-${spacing}`]: spacing
    }),
    id: uniqueId,
    ref: hostRef,
    onBlur: handleOnBlur
  }, label && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    size: "helper-text",
    className: `${ClickList_styles.hostClass}-headline`,
    noMargin: true,
    id: labelTextId
  }, label), /*#__PURE__*/React__default.createElement(SeparatorLinePresentation.SeparatorLinePresentation, {
    componentSpacing: "none"
  }))), /*#__PURE__*/React__default.createElement(Container, {
    ...htmlAttrs,
    className: `${ClickList_styles.hostClass}-ul`,
    "aria-errormessage": errorText ? errorTextId : undefined,
    "aria-invalid": !!errorText,
    "aria-labelledby": label || errorText || htmlAttrs["aria-labelledby"] ? [label && labelTextId, errorText && errorTextId, htmlAttrs["aria-labelledby"]].filter(t => !!t).join(" ") : undefined,
    // Use for radio groups role=radiogroup, if you are not using a fieldset https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Radio_Role
    role:
    // eslint-disable-next-line no-nested-ternary
    look === "radio" && numChildren > 1 ? "radiogroup" : look === "checkbox" && numChildren > 1 ? "group" : undefined
  }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
    as: childrenAs
  }))), errorText && (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    className: `${ClickList_styles.hostClass}-errorText`,
    size: "error-text",
    id: errorTextId
  }, errorText)));
};
ClickListPresentation.displayName = "ClickListPresentation";

exports.ClickListPresentation = ClickListPresentation;
