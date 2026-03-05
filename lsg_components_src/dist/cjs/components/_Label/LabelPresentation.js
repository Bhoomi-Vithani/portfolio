'use strict';

var React__default = require('react');
var DomUtils = require('../../utils/DomUtils.js');
var React = require('../../utils/React.js');
var SpinnerPresentation = require('../Spinner/shared/SpinnerPresentation.js');
var Label_styles = require('./Label.styles.js');

// @ts-strict-ignore
const defaultProps = {
  onMouseHoverChange: () => {
    /* empty */
  },
  onKeyboardFocusChange: () => {
    /* empty */
  },
  type: "label"
};
// TODO: Search bei den Änderungen des Spinners nicht identifiziert, nur durch jetzige Umstellung auf ariaLabel-Mandatory. Änderung bei A11y-Anpassung der Search.
const LabelPresentation = React.fRef(props => {
  const {
    disabled,
    loading,
    id,
    ref,
    children,
    htmlAttrs,
    className,
    expandToOverlay,
    htmlFor,
    onMouseHoverChange,
    onKeyboardFocusChange,
    isDisplayInline,
    type,
    value,
    onChange,
    name,
    htmlInputAttrs,
    nonInteractive
  } = props;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, type !== "label" && !nonInteractive && (/*#__PURE__*/React__default.createElement("input", {
    id: htmlFor,
    className: `${Label_styles.mainClass}-input`,
    type: type,
    checked: value,
    onChange: e => onChange(e.target.checked, name, e),
    onMouseEnter: () => {
      if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
        onMouseHoverChange(true);
      }
    },
    onMouseLeave: () => onMouseHoverChange(false),
    onFocus: () => {
      if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
        onKeyboardFocusChange(true);
      }
    },
    onBlur: () => onKeyboardFocusChange(false),
    ...htmlInputAttrs
  })), nonInteractive ? (/*#__PURE__*/React__default.createElement("span", {
    ...htmlAttrs,
    className: DomUtils.cleanupClassObject({
      [`${Label_styles.mainClass}`]: true,
      [className]: !!className,
      [`${Label_styles.mainClass}__disabled`]: true,
      [`${Label_styles.mainClass}__loading`]: loading,
      [`${Label_styles.mainClass}__overlay`]: expandToOverlay,
      [`${Label_styles.mainClass}__inline`]: isDisplayInline
    }),
    id: id,
    ref: ref,
    onMouseEnter: () => {
      if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
        onMouseHoverChange(true);
      }
    },
    onMouseLeave: () => onMouseHoverChange(false),
    onFocus: () => {
      if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
        onKeyboardFocusChange(true);
      }
    },
    onBlur: () => onKeyboardFocusChange(false)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Label_styles.mainClass}-inner`
  }, children), loading && (/*#__PURE__*/React__default.createElement("span", {
    className: `${Label_styles.mainClass}-spinner`
  }, /*#__PURE__*/React__default.createElement(SpinnerPresentation.SpinnerPresentation, {
    loading: loading,
    variant: "indeterminate",
    size: 24,
    ariaLabel: ""
  }))))) : (/*#__PURE__*/React__default.createElement("label", {
    ...htmlAttrs,
    className: DomUtils.cleanupClassObject({
      [`${Label_styles.mainClass}`]: true,
      [className]: !!className,
      [`${Label_styles.mainClass}__disabled`]: disabled,
      [`${Label_styles.mainClass}__loading`]: loading,
      [`${Label_styles.mainClass}__overlay`]: expandToOverlay,
      [`${Label_styles.mainClass}__inline`]: isDisplayInline
    }),
    id: id,
    htmlFor: htmlFor,
    ref: ref,
    onMouseEnter: () => {
      if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
        onMouseHoverChange(true);
      }
    },
    onMouseLeave: () => onMouseHoverChange(false),
    onFocus: () => {
      if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
        onKeyboardFocusChange(true);
      }
    },
    onBlur: () => onKeyboardFocusChange(false)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Label_styles.mainClass}-inner`
  }, children), loading && (/*#__PURE__*/React__default.createElement("span", {
    className: `${Label_styles.mainClass}-spinner`
  }, /*#__PURE__*/React__default.createElement(SpinnerPresentation.SpinnerPresentation, {
    loading: loading,
    variant: "indeterminate",
    size: 24,
    ariaLabel: ""
  }))))));
}, defaultProps);
LabelPresentation.displayName = "LabelPresentation";

exports.LabelPresentation = LabelPresentation;
exports.defaultProps = defaultProps;
